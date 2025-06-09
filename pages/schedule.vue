<template>
  <div id="wrap">
    <div class="page-showtime">
      <div class="container">
        <div class="col-md-12 col-sm-12">
          <h2>Xem lịch chiếu theo ngày</h2>
          <ul class="nav nav-tabs">
            <li
              v-for="(schedule, index) in listDateSchedule"
              :key="index"
              :class="{ active: schedule.date === selectedDate }"
              @click="fetchListMovieByDate(schedule.date)"
            >
              <a>
                <span class="day">
                  {{ schedule.isToday ? "Hôm nay" : schedule.dayName }}
                </span>
                <span class="date">{{ schedule.dateNum }}</span>
                <span class="month">{{ schedule.monthName }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="container title-page">
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <h1>Lịch chiếu phim</h1>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="tab-content">
          <div class="tab-pane fade active in">
            <span v-if="isLoading">Loading...</span>
            <MovieSchedule
              v-else
              v-for="(movieItem, index) in listMovie"
              :key="movieItem.id || index"
              :movie="movieItem"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";
import { onMounted, ref } from "vue";
import dayjs from "dayjs";
import "dayjs/locale/vi";

dayjs.locale("vi"); // để format tiếng Việt

const { $axios } = useNuxtApp();
const toast = useToast();
const listDateSchedule = ref([]);
const selectedDate = ref(null);
const listMovie = ref([]);
const isLoading = ref(false);

onMounted(async () => {
  try {
    const response = await $axios.get("/schedule");

    // Xử lý thêm thông tin
    listDateSchedule.value = response.data.result.map((item, index) => {
      const date = dayjs(item);

      const transformed = {
        date: item,
        dayName: capitalizeFirstLetter(date.format("dddd")),
        dateNum: date.format("D"),
        monthName: `Tháng ${date.format("M")}`,
        isToday: date.isSame(dayjs(), "day"),
      };
      console.log(`Mapped[${item}]`, transformed);

      // Gán selected mặc định là phần tử đầu tiên
      if (index === 0 && !selectedDate.value) {
        selectedDate.value = transformed.date;
        fetchListMovieByDate(selectedDate.value);
      }

      return transformed;
    });
  } catch (error) {
    console.error("Error fetching schedule:", error);
    toast.error("Error fetching schedule: " + error.response.data.message);
  }
});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const fetchListMovieByDate = async (date) => {
  selectedDate.value = date;
  try {
    isLoading.value = true;
    const response = await $axios.get(`/schedule/movie-by-date/${date}`);
    const listMovieId = response.data.result;
    console.log("listMovieId: ", listMovieId);

    // Gọi song song nhiều API
    const movieDetailPromises = listMovieId.map(async (id) => {
      const [movieRes, showtimeRes] = await Promise.all([
        $axios.get(`/movie/${id}`),
        $axios.get(`/schedule/by-date-and-movie-id/${date}/${id}`),
      ]);

      return {
        ...movieRes.data.result,
        schedule: showtimeRes.data.result,
      };
    });

    listMovie.value = await Promise.all(movieDetailPromises);
    console.log("listMovie: ", listMovie.value);
  } catch (error) {
    console.error("Error fetching movie: ", error);
    toast.error("Error fetching movie: " + error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
li {
  cursor: pointer;
}
</style>
