<template>
  <div id="wrap">
    <section id="home-movie" class="page-list-movie">
      <div class="container">
        <h1
          style="
            display: block;
            margin-top: -46px;
            text-align: left;
            color: #fff;
          "
        >
          Danh sách phim
        </h1>
        <ul class="nav nav-tabs" style="margin-top: 0">
          <li :class="{ active: isNowShowing }" class="nowshowing">
            <a href="#phimdangchieu" @click.prevent="showNowShowing">
              <img src="/images/icons/icon-ticket.png" alt="Phim đang chiếu" />
              <span>Phim đang chiếu</span>
            </a>
            <span class="border"></span>
          </li>

          <li :class="{ active: !isNowShowing }" class="comingsoon">
            <a href="#phimsapchieu" @click.prevent="showComingSoon">
              <span>Phim sắp chiếu</span>
              <img
                src="/images/icons/icon-sap-chieu.png"
                alt="Phim sắp chiếu"
              />
            </a>
            <span class="border"></span>
          </li>
        </ul>
        <div class="tab-content">
          <div
            v-if="isNowShowing"
            id="phimdangchieu"
            class="tab-pane fade in active"
          >
            <div class="row row-eq-height">
              <div
                v-for="movie in movieNowShowing"
                :key="movie.id"
                class="col-md-3 col-sm-4 col-xs-6"
              >
                <div class="movie">
                  <div class="poster">
                    <NuxtLink :to="`movie/${movie.id}`">
                      <img
                        class="img-responsive"
                        :src="movie.posterUrl"
                        :alt="movie.title"
                      />
                    </NuxtLink>
                    <div class="info">
                      <NuxtLink :to="`movie/${movie.id}`" class="button detail">
                        Chi tiết
                      </NuxtLink>
                      <a href="" class="button ticket">
                        Mua vé
                        <img src="/images/icons/icon-dat-ve.png" alt="Mua vé" />
                      </a>
                      <p class="button duration">
                        <b>Thời lượng:</b> {{ movie.duration }} phút
                      </p>
                      <p class="button category">
                        <b>Thể loại:</b> {{ movie.category }}
                      </p>
                    </div>
                  </div>
                  <div class="detail" style="min-height: 160px">
                    <h2>
                      <NuxtLink :to="`movie/${movie.id}`">
                        {{ movie.title }}
                      </NuxtLink>
                    </h2>
                    <p class="release">Khởi chiếu {{ movie.releaseDate }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else id="phimsapchieu" class="tab-pane fade in active">
            <div v-if="movieCommingSoon.length > 0" class="row row-eq-height">
              <div
                v-for="movie in movieCommingSoon"
                :key="movie.id"
                class="col-md-3 col-sm-4 col-xs-6"
              >
                <div class="movie">
                  <div class="poster">
                    <NuxtLink :to="`movie/${movie.id}`">
                      <img
                        class="img-responsive"
                        :src="movie.posterUrl"
                        :alt="movie.title"
                      />
                    </NuxtLink>
                    <div class="info">
                      <NuxtLink :to="`movie/${movie.id}`" class="button detail">
                        Chi tiết
                      </NuxtLink>
                      <a href="" class="button ticket">
                        Mua vé
                        <img src="/images/icons/icon-dat-ve.png" alt="Mua vé" />
                      </a>
                      <p class="button duration">
                        <b>Thời lượng:</b> {{ movie.duration }} phút
                      </p>
                      <p class="button category">
                        <b>Thể loại:</b> {{ movie.category }}
                      </p>
                    </div>
                  </div>
                  <div class="detail" style="min-height: 160px">
                    <h2>
                      <NuxtLink :to="`movie/${movie.id}`">
                        {{ movie.title }}
                      </NuxtLink>
                    </h2>
                    <p class="release">Khởi chiếu {{ movie.releaseDate }}</p>
                  </div>
                </div>
              </div>
              <div class="clearfix"></div>
            </div>
            <div v-else class="row">
              <div class="col-sm-12">
                <div class="panel panel-warning text-center">
                  <div class="panel-heading">
                    <h3 class="panel-title" style="font-size: 18pt">
                      <i class="fa fa-calendar-times-o" aria-hidden="true"></i>
                      Thông báo
                    </h3>
                  </div>
                  <div class="panel-body">
                    <p
                      style="font-size: 20pt; font-weight: bold; color: #a94442"
                    >
                      Chưa có lịch phim sắp chiếu
                    </p>
                    <p style="font-size: 13pt; color: #777">
                      Vui lòng quay lại sau để xem các phim mới được cập nhật.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const { $axios } = useNuxtApp();
const isNowShowing = ref(true);
const movieNowShowing = ref([]);
const movieCommingSoon = ref([]);

onMounted(async () => {
  fetchMovieNowShowing();
  fetchMovieCommingSoon();
});

const fetchMovieNowShowing = async () => {
  const response = await $axios.get(`/movie/in-schedule`);
  movieNowShowing.value = response.data.result;
};

const fetchMovieCommingSoon = async () => {
  const response = await $axios.get(`/movie/not-in-schedule`);
  movieCommingSoon.value = response.data.result;
};

const showNowShowing = () => {
  isNowShowing.value = true;
};

const showComingSoon = () => {
  isNowShowing.value = false;
};
</script>

<style></style>
