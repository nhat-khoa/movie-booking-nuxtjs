<template>
  <div class="row showtime-movie">
    <div class="col-lg-3 col-md-3 col-sm-4">
      <div class="poster">
        <a href="phim/dia-dao-mat-troi-trong-bong-toi.html">
          <img :src="movie.posterUrl" alt="" class="img-responsive" />
        </a>
      </div>
    </div>
    <div class="col-lg-9 col-md-9 col-sm-8">
      <div class="info">
        <NuxtLink :to="`/movie/${movie.id}`">
          <h3>{{ movie.title }}</h3>
        </NuxtLink>
        <h3 style="color: black">{{ movie.titleEnglish }}</h3>
        <div class="age">{{ movie.ageRating }}</div>
        <div class="release">
          <span class="date">{{ releaseDay }}</span>
          <span>{{ releaseMonth }}</span>
        </div>
        <div class="star">
          <i class="fa fa-star active"></i>
          <i class="fa fa-star active"></i>
          <i class="fa fa-star active"></i>
          <i class="fa fa-star active"></i>
          <i class="fa fa-star active"></i>
        </div>
        <div class="detail">
          <span>
            <strong>
              <i class="fa fa-clock-o"></i>
              Thời lượng:
            </strong>
            {{ movie.duration }} phút
          </span>
          <span>
            <strong>
              <i class="fa fa-align-left"></i>
              Thể loại:
            </strong>
            {{ movie.category }}
          </span>
          <span>
            <strong>
              <i class="fa fa-user"></i>
              Đạo diễn:
            </strong>
            {{ movie.director }}
          </span>
        </div>
      </div>
      <div class="showtimes">
        <div>
          <NuxtLink
            v-for="schedule in movie.schedule"
            :key="schedule.id"
            :class="getClassForTime(schedule.startTime)"
            :to="`/book-ticket/${schedule.id}/${schedule.room.id}`"
          >
            {{ formatTime(schedule.startTime) }}
            <!-- {{ schedule.startTime }} -->
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import dayjs from "dayjs";

const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
});

const releaseDay = dayjs(props.movie.releaseDate).format("DD");
const releaseMonth = dayjs(props.movie.releaseDate).format("MM");

function getClassForTime(timeStr) {
  const now = new Date();
  const showTime = new Date(timeStr);
  return showTime > now ? "active" : "disabled";
}

function formatTime(timeStr) {
  const date = new Date(timeStr);
  return date.toLocaleTimeString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}
</script>

<style></style>
