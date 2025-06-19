<template>
  <div class="container white-bg">
    <h2 class="text-center text-info">Lịch sử mua vé</h2>

    <!-- Vé chưa thanh toán -->
    <div class="table-container" style="margin-top: 0px">
      <h3 class="text-danger">Vé chưa thanh toán</h3>
      <table class="table table-bordered table-striped">
        <thead class="table-danger">
          <tr>
            <th class="text-center">Mã giao dịch</th>
            <th class="text-center">Tên phim</th>
            <th class="text-center">Lịch chiếu</th>
            <th class="text-center">Phòng</th>
            <th class="text-center">Ghế</th>
            <th class="text-center">Giá</th>
            <th class="text-center">Thời gian còn lại</th>
            <th class="text-center">Thanh toán</th>
          </tr>
        </thead>
        <tbody v-if="unpaidTickets.length > 0">
          <tr v-for="ticket in unpaidTickets" :key="ticket.id">
            <td class="text-center">
              {{ ticket.appTransId }}
            </td>
            <td class="text-center">
              {{ ticket.schedule.movie.title }}
            </td>
            <td class="text-center">
              {{ formatDateTime(ticket.schedule.startTime) }}
            </td>
            <td class="text-center">
              {{ ticket.schedule.room.name }}
            </td>
            <td class="text-center">
              {{
                ticket.seats.map((seat) => seat.line + seat.number).join(", ")
              }}
            </td>
            <td class="text-center">
              {{ formatVND(ticket.totalPrice) }}
            </td>
            <td class="text-center text-danger">
              {{ formatTime(ticket.timeToLive) }}
            </td>
            <td class="text-center">
              <button
                @click="togglePay(ticket.orderUrl)"
                class="btn-success btn-sm"
                title="Thanh toán"
              >
                <i class="fa fa-credit-card"></i>
              </button>
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td colspan="8" class="text-center text-muted py-3">
              Không có dữ liệu
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Vé đã thanh toán -->
    <div class="table-container" style="margin-top: 30px">
      <h3 class="text-success">Vé đã thanh toán</h3>
      <table class="table table-bordered table-hover">
        <thead class="table-success">
          <tr>
            <th class="text-center">Mã vé</th>
            <th class="text-center">Tên phim</th>
            <th class="text-center">Lịch chiếu</th>
            <th class="text-center">Phòng</th>
            <th class="text-center">Ghế</th>
            <th class="text-center">Giá</th>
            <th class="text-center">Thời gian đặt</th>
            <th class="text-center">Trạng thái</th>
          </tr>
        </thead>
        <tbody v-if="paidTickets.length > 0">
          <tr v-for="ticket in paidTickets" :key="ticket.id">
            <td class="text-center">{{ ticket.id }}</td>
            <td class="text-center">{{ ticket.schedule.movie.title }}</td>
            <td class="text-center">
              {{ formatDateTime(ticket.schedule.startTime) }}
            </td>
            <td class="text-center">{{ ticket.schedule.room.name }}</td>
            <td class="text-center">
              {{
                ticket.seatList
                  .map((seat) => seat.line + seat.number)
                  .join(", ")
              }}
            </td>
            <td class="text-center">
              {{ formatVND(ticket.totalPrice) }}
            </td>
            <td class="text-center">
              {{ formatDateTime(ticket.bookedAt) }}
            </td>
            <td
              v-if="isSeen(ticket.schedule.startTime)"
              class="text-center text-success"
            >
              <i class="fa fa-check" aria-hidden="true"></i> Hoàn thành
            </td>
            <td v-else class="text-center text-danger">
              <i class="fa fa-times" aria-hidden="true"></i> Chưa xem
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td colspan="8" class="text-center text-muted py-3">
              Không có dữ liệu
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useUserStore } from "~/stores/user";
import { useToast } from "vue-toastification";

const { $axios } = useNuxtApp();
const userStore = useUserStore();
const toast = useToast();
const unpaidTickets = ref([]);
const paidTickets = ref([]);
let timer = null;

onMounted(() => {
  timer = setInterval(() => {
    unpaidTickets.value.forEach((ticket) => {
      if (ticket.timeToLive > 0) {
        ticket.timeToLive--;
      }
    });
  }, 1000);

  fetchUnpaidTickets();
  fetchPaidTickets();
});

onBeforeUnmount(() => {
  clearInterval(timer);
});

const fetchUnpaidTickets = async () => {
  try {
    const response = await $axios.get(`/redis/ticket`);
    unpaidTickets.value = response.data.result
      .map((item) => {
        item.seats.sort((a, b) => {
          // So sánh theo line trước (A, B, C,...)
          if (a.line < b.line) return -1;
          if (a.line > b.line) return 1;

          // Nếu line giống nhau thì so sánh theo number (số)
          return a.number - b.number;
        });
        return item;
      })
      .sort((a, b) => {
        return a.timeToLive - b.timeToLive;
      });
    console.log("unpaid tickets: ", unpaidTickets.value);
  } catch (error) {
    console.error("Error fetching unpaid tickets:", error);
    toast.error("Error fetching unpaid tickets");
  }
};

const fetchPaidTickets = async () => {
  try {
    const response = await $axios.get(`/ticket/by-user`);
    paidTickets.value = response.data.result.sort((a, b) => {
      return new Date(b.schedule.startTime) - new Date(a.schedule.startTime);
    });
    console.log("paid tickets: ", paidTickets.value);
  } catch (error) {
    console.error("Error fetching paid tickets:", error);
    toast.error("Error fetching paid tickets");
  }
};

const togglePay = (url) => {
  window.open(url, "_blank");
};

// Format mm:ss
const formatTime = (seconds) => {
  if (seconds <= 0) return "Hết hạn";
  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
};

const formatVND = (price) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
};

const formatDateTime = (inputDateTime) => {
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

  return `${hours}:${minutes}, ${weekday} (${day}/${month}/${year}) `;
};

const isSeen = (startTime) => {
  const now = new Date();
  const start = new Date(startTime);
  return start < now ? true : false;
};
</script>

<style scoped>
.table-danger {
  background-color: #f8d7da !important; /* Màu đỏ nhạt giống Bootstrap 5 */
  color: #842029; /* Màu chữ đỏ đậm */
}
.table-success {
  background-color: #d1e7dd !important;
  color: #0f5132;
}
.table td {
  text-align: center;
  vertical-align: middle;
}
.table th {
  text-align: center;
  vertical-align: middle;
}
</style>
