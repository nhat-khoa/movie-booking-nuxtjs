<template>
  <!-- HEADER STEPS -->
  <div class="steps-header clearfix">
    <div class="pull-left" style="margin-left: 30px; line-height: 50px">
      <button
        @click="goBack"
        type="button"
        class="btn btn-link p-0 m-0 align-baseline"
      >
        <i class="fa fa-arrow-left"></i> Quay lại
      </button>
      <span class="step active">01 CHỌN GHẾ</span>
      <span class="step">02 XÁC THỰC & THANH TOÁN</span>
      <span class="step">03 HOÀN TẤT</span>
    </div>
  </div>

  <!-- NỘI DUNG -->
  <div class="container-fluid">
    <div class="row">
      <!-- Chọn ghế -->
      <div class="col-md-9">
        <p>
          <small>
            * Không được bỏ trống 01 ghế bên cạnh hoặc ghế đầu tiên của dãy
          </small>
        </p>

        <div class="legend">
          <span>
            <div class="seat"></div>
            Ghế có thể đặt
          </span>
          <span>
            <div class="seat seat-selected"></div>
            Ghế đang chọn
          </span>
          <span>
            <div class="seat seat-chosen"></div>
            Ghế đã có người chọn
          </span>
          <span>
            <div class="seat seat-booked"></div>
            Ghế đã có người đặt
          </span>
          <span>
            <div class="seat seat-disabled"></div>
            Ghế không thể đặt
          </span>
        </div>

        <div class="screen"></div>
        <div class="text-screen">Màn hình</div>
        <div id="seats" class="text-center">
          <div
            v-for="(seatRow, rowIndex) in groupedSeats"
            :key="rowIndex"
            class="row text-center"
          >
            <div class="col-xs-12">
              <div
                v-for="seat in seatRow"
                :key="seat.id"
                :class="[
                  seat.isDoubleSeat ? 'double-seat' : 'seat',
                  { 'seat-booked': seat.isBooked },
                  { 'text-light': seat.isBooked },
                  { 'seat-selected': isSelected(seat) },
                  { 'seat-chosen': isChosenByAnotherUser(seat) },
                  { 'text-light': isChosenByAnotherUser(seat) },
                ]"
                @click="toggleSeat(seat)"
              >
                {{ seat.line + "" + seat.number }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Thông tin đặt vé -->
      <div class="col-md-3 booking-panel">
        <h4 class="text-center text-uppercase" style="color: #e91e63">
          Thông tin đặt vé
        </h4>
        <p><strong>Họ tên: </strong>{{ userStore.user.fullName }}</p>
        <p><strong>Số điện thoại: </strong>{{ userStore.user.phoneNumber }}</p>
        <p><strong>Email: </strong>{{ userStore.user.email }}</p>

        <p><strong>Phim: </strong>{{ schedule.movie.title }}</p>
        <p>
          <strong>Thời gian: </strong>
          {{ formatToVietnameseDateTime(schedule.startTime) }}
        </p>
        <p><strong>Phòng: </strong>{{ schedule.room.name }}</p>
        <p>
          <strong>Ghế: </strong>
          <span
            v-for="seat in selectedSeats"
            :key="seat.id"
            class="text-danger"
          >
            {{ seat.line + "" + seat.number + ", " }}
          </span>
        </p>
        <p><strong>Lưu ý:</strong></p>
        <ul>
          <li>Vé đã mua không thể đổi hay trả lại.</li>
          <li>
            Khi được yêu cầu, vui lòng xuất trình giấy tờ tùy thân để chứng thực
            độ tuổi khi xem phim.
          </li>
          <li>
            Bản sao thông tin vé sẽ được lưu vào mục lịch sử giao dịch trong tài
            khoản. 1 bản sao khác sẽ gửi đến Email của quý khách. Quý khách vui
            lòng kiểm tra kỹ cả trong mục spam email.
          </li>
        </ul>

        <div class="text-center total-price-box">
          <p class="total-price">
            Tổng tiền: <strong>{{ formattedTotalMoney }}</strong>
          </p>
          <button @click="toggleBookTicket" class="btn">ĐẶT VÉ</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount } from "vue";
import { useToast } from "vue-toastification";
import * as webstomp from "webstomp-client";
import { useUserStore } from "~/stores/user";

definePageMeta({
  layout: "book-ticket",
});

const route = useRoute();
const { $axios } = useNuxtApp();
const toast = useToast();
const userStore = useUserStore();

const scheduleId = route.params.scheduleId;
const roomId = route.params.roomId;
const listSeats = ref([]);
const selectedSeats = ref([]);
const anotherUserSelectedSeats = ref([]);
let stompClient = null;

const schedule = ref({
  startTime: "loading...",
  movie: {
    title: "loading...",
  },
  room: {
    name: "loading...",
  },
});

const groupedSeats = computed(() => {
  const groups = [];
  const seats = listSeats.value;

  for (let i = 0; i < seats.length; i += 12) {
    groups.push(seats.slice(i, i + 12));
  }

  return groups;
});

const totalMoney = computed(() =>
  selectedSeats.value.reduce((sum, seat) => {
    return sum + (seat.isDoubleSeat ? 150000 : 80000);
  }, 0)
);

const formattedTotalMoney = computed(() =>
  new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(
    totalMoney.value
  )
);

onMounted(async () => {
  window.addEventListener("beforeunload", cleanUpSeat);
  if (!userStore.isLoaded) {
    userStore.loadUserFromLocalStorage();
  }
  await loadSeatList();
  await loadScheduleInfo();
  await initSocket();
});

onBeforeUnmount(async () => {
  window.removeEventListener("beforeunload", cleanUpSeat);
  cleanUpSeat();
});

// Khi selectedSeats thay đổi thì gửi lên server
watch(
  selectedSeats,
  (newVal) => {
    if (stompClient && stompClient.connected) {
      stompClient.send(
        "/app/select-seat", // endpoint định nghĩa ở server STOMP
        JSON.stringify({
          userId: userStore.user.id,
          scheduleId,
          seatIds: newVal.map((seat) => seat.id),
        })
      );
    }
  },
  { deep: true }
);

const cleanUpSeat = async () => {
  if (stompClient && stompClient.connected) {
    stompClient.send(
      "/app/select-seat", // endpoint định nghĩa ở server STOMP
      JSON.stringify({
        userId: userStore.user.id,
        scheduleId,
        seatIds: [],
      })
    );
    stompClient.disconnect(() => {
      console.log("🔌 Disconnected from STOMP");
    });
  }
};

const loadSeatList = async () => {
  try {
    // 1. Gọi API lấy danh sách ghế theo roomId
    const response = await $axios.get(`/seat/by-room-id/${roomId}`);
    const seats = response.data.result;

    // 2. Gọi song song các API kiểm tra từng seat đã được đặt chưa
    const updatedSeats = await Promise.all(
      seats.map(async (seat) => {
        try {
          const checkRes = await $axios.get(
            "/ticket/exists-by-schedule-id-and-seat-id",
            {
              params: {
                scheduleId: scheduleId,
                seatId: seat.id,
              },
            }
          );

          return {
            ...seat,
            isBooked: checkRes.data.result,
          };
        } catch (error) {
          console.error(`Error checking seat ${seat.id}:`, error);
          return {
            ...seat,
            isBooked: false, // fallback nếu lỗi
          };
        }
      })
    );

    // 3. Gán lại vào listSeats để hiển thị
    listSeats.value = updatedSeats;
    console.log("listSeats with isBooked:", listSeats.value);
  } catch (error) {
    console.error("Error fetching seat:", error);
    toast.error("Error fetching seat: " + error);
  }
};

const loadScheduleInfo = async () => {
  try {
    // 1. Gọi API lấy danh sách ghế theo roomId
    const response = await $axios.get(`/schedule/by-id/${scheduleId}`);
    schedule.value = response.data.result;
  } catch (error) {
    console.error("Error fetching schedule:", error);
    toast.error("Error fetching schedule: " + error);
  }
};

async function initSocket() {
  // ✅ Import runtime để tránh lỗi 'global is not defined'
  const SockJS = (await import("sockjs-client")).default;
  const Stomp = (await import("webstomp-client")).default;

  const socket = new SockJS("http://localhost:8080/ws"); // BE đã dùng SockJS endpoint
  stompClient = Stomp.over(socket);

  stompClient.connect(
    {},

    // On Connected
    () => {
      console.log("✅ Connected to STOMP");

      stompClient.subscribe(`/topic/scheduleId/${scheduleId}`, (message) => {
        const data = JSON.parse(message.body); // data là mảng SeatSelected

        console.log("🎯 Seat updated:", data);

        const selectedByOthers = data
          .filter((item) => item.userId !== userStore.user.id)
          .flatMap((item) => item.seatIds); // gom tất cả seatIds của user khác

        anotherUserSelectedSeats.value = selectedByOthers;
      });

      stompClient.send(
        "/app/select-seat", // endpoint định nghĩa ở server STOMP
        JSON.stringify({
          userId: userStore.user.id,
          scheduleId,
          seatIds: [],
        })
      );
    },

    // On Error
    (error) => {
      console.error("❌ STOMP connection error:", error);
    }
  );
}

const goBack = () => {
  window.history.back();
};

const toggleSeat = async (seat) => {
  if (seat.isBooked) return; // không xử lý nếu ghế đã đặt
  if (isChosenByAnotherUser(seat)) return;

  const index = selectedSeats.value.findIndex((s) => s.id === seat.id);
  if (index !== -1) {
    selectedSeats.value.splice(index, 1); // bỏ chọn nếu đã chọn
  } else {
    selectedSeats.value.push(seat); // chọn nếu chưa có
  }
};

const isSelected = (seat) => {
  return selectedSeats.value.some((s) => s.id === seat.id);
};

const isChosenByAnotherUser = (seat) => {
  return anotherUserSelectedSeats.value.includes(seat.id);
};

const toggleBookTicket = async () => {
  console.log("selectedSeats count: ", selectedSeats.value.length);
  if (selectedSeats.value.length <= 0) {
    toast.info("No seat is selected");
    return;
  }
  try {
    const response = await $axios.post("/ticket", {
      scheduleId: scheduleId,
      seatIds: selectedSeats.value.map((seat) => seat.id),
    });
    const data = response.data;
    console.log("data response:", data);
    if (data.code == 1000) {
      toast.success("Book ticket success!");
    } else {
      toast.error("Book ticket failed!");
    }
  } catch (error) {
    console.error("Error during book ticket:", error);
    toast.error(error.response.data.message);
  }
};

function formatToVietnameseDateTime(inputDateTime) {
  const now = new Date();
  const inputDate = new Date(inputDateTime);

  // Danh sách tên thứ trong tuần (bắt đầu từ Chủ Nhật = 0)
  const weekdays = [
    "Chủ nhật",
    "Thứ 2",
    "Thứ 3",
    "Thứ 4",
    "Thứ 5",
    "Thứ 6",
    "Thứ 7",
  ];

  const isToday =
    inputDate.getDate() === now.getDate() &&
    inputDate.getMonth() === now.getMonth() &&
    inputDate.getFullYear() === now.getFullYear();

  const day = String(inputDate.getDate()).padStart(2, "0");
  const month = String(inputDate.getMonth() + 1).padStart(2, "0");
  const year = inputDate.getFullYear();
  const hours = String(inputDate.getHours()).padStart(2, "0");
  const minutes = String(inputDate.getMinutes()).padStart(2, "0");

  const weekday = isToday ? "Hôm nay" : weekdays[inputDate.getDay()];

  return `${weekday}, ngày ${day}/${month}/${year} ${hours}:${minutes}`;
}
</script>

<style scoped>
.text-light {
  color: #f8f9fa !important;
}
.container-fluid {
  background: #fff;
}
/* Header steps bar */
.steps-header {
  border-bottom: 2px solid #ccc;
  padding: 10px 20px;
  background: #fff;
}
.steps-header img {
  height: 50px;
}
.steps-header .step {
  display: inline-block;
  margin: 0 20px;
  font-weight: bold;
  color: #aaa;
}
.steps-header .step.active {
  color: #8e24aa;
  position: relative;
}
.steps-header .step.active:after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #8e24aa;
}
/* Seats styling */
.double-seat {
  display: inline-block;
  width: 60px;
  height: 30px;
  margin: 3px;
  line-height: 30px;
  text-align: center;
  border-radius: 2px;
  background-color: #ccc;
  cursor: pointer;
}
.seat {
  display: inline-block;
  width: 30px;
  height: 30px;
  margin: 3px;
  line-height: 30px;
  text-align: center;
  border-radius: 4px;
  background-color: #ccc;
  cursor: pointer;
}
.seat-selected {
  background-color: yellow;
}
.seat-chosen {
  background-color: green;
  cursor: not-allowed;
}
.seat-booked {
  background-color: red;
  cursor: not-allowed;
}
.seat-disabled {
  background-color: purple;
  cursor: not-allowed;
}
.screen {
  width: 100%;
  height: 10px;
  background: #444;
  margin: 20px 0 0 0;
}
.text-screen {
  font-size: large;
  font-weight: bold;
  text-align: center;
  width: 100%;
  height: 10px;
  margin: 10px 0 20px 0;
}
.legend span {
  margin-right: 15px;
  display: inline-block;
}
.legend .seat {
  margin-right: 5px;
}
.booking-panel {
  background: #f9f9f9;
  padding: 15px;
  border-left: 3px solid #e91e63;
  border-bottom: 3px solid #e91e63;
}
.total-price-box {
  margin-top: 20px;
}

.total-price {
  margin-bottom: 10px;
  font-size: 25px;
  color: #e91e63;
}
</style>
