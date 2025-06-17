<template>
  <div id="wrap">
    <div class="container" id="page-movie">
      <div class="row">
        <div
          class="movie-slider"
          :style="{ backgroundImage: `url(${movie.backgroundUrl})` }"
        >
          <div class="overlay"></div>
          <div class="trailer">
            <a
              @click="toggleOpen"
              class="cursor-pointer video-play-button"
              data-toggle="modal"
            >
              <span></span>
            </a>
          </div>
        </div>
        <div class="movie-detail">
          <div class="poster">
            <img
              :src="`${movie.posterUrl}`"
              :alt="`${movie.title}`"
              class="img-responsive"
            />
          </div>
          <div class="movie-info">
            <div class="movie-name">
              <a>
                <h1>{{ movie.title }}</h1>
              </a>
              <h2>{{ movie.titleEnglish }}</h2>
            </div>
            <p>
              <strong>Thời lượng:</strong>
              {{ movie.duration }} phút
            </p>
            <p>
              <strong>Khởi chiếu từ:</strong>
              {{ movie.releaseDate }}
            </p>
            <p>
              <strong>Thể loại:</strong>
              {{ movie.category }}
            </p>
            <p class="cap">
              <strong>Đạo diễn:</strong>
              {{ movie.director }}
            </p>
            <p class="cap">
              <strong>Diễn viên:</strong>
              {{ movie.cast }}
            </p>
            <p class="cap">
              <strong>Ngôn ngữ:</strong>
              {{ movie.language }}
            </p>
            <p>
              <strong>Độ tuổi:</strong>
              <span class="age_restricted_wrap">
                <span class="age age-P">{{ movie.ageRating }}</span>
                <span class="age_restricted_label"> </span>
              </span>
            </p>
            <div class="group-buton">
              <a href="javascript:;" id="dat-ve">
                <img
                  src="https://touchcinema.com/images/icons/icon-dat-ve.png"
                  alt="Đặt vé"
                />
                Đặt vé
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 col-sm-8">
          <div class="movie-content">
            <div class="showdow"></div>
            <div class="content">
              <div class="text">
                <p>
                  {{ movie.description }}
                </p>
              </div>
            </div>
          </div>
          <div class="showtime-section" id="showtime">
            <h2>Lịch chiếu</h2>
            <div class="showtime-date">Hôm nay, ngày 16/6</div>
            <div class="showtimes">
              <div>
                <a class="disabled">19:00</a>
              </div>
            </div>
            <div class="clearfix"></div>
          </div>

          <div class="page-post-detail" style="margin-top: 60px">
            <div class="clearfix"></div>
            <div class="related-post">
              <h2>Bài viết mới</h2>
              <div class="row">
                <div class="col-md-4 col-sm-4">
                  <div class="poster">
                    <a
                      href="https://touchcinema.com/danh-gia-phim/con-lac-ta-thuat"
                    >
                      <img
                        class="img-responsive"
                        src="https://touchcinema.com/uploads/phim-con-lac-ta-thuat/phim-con-lac-ta-thuat-thumbnail.jpg"
                        alt="Review phim Con lắc tà thuật – The Hypnosis"
                      />
                    </a>
                  </div>
                  <h3>
                    <a
                      href="https://touchcinema.com/danh-gia-phim/con-lac-ta-thuat"
                      >Review phim Con lắc tà thuật – The Hypnosis</a
                    >
                  </h3>
                </div>
                <div class="col-md-4 col-sm-4">
                  <div class="poster">
                    <a
                      href="https://touchcinema.com/danh-gia-phim/seobok-nguoi-nhan-ban"
                    >
                      <img
                        class="img-responsive"
                        src="https://touchcinema.com/uploads/phim-nguoi-nhan-ban/phim-nguoi-nhan-ban-thumbnail.jpg"
                        alt="Review phim Seobok (Người nhân bản) – Vì sao con người luôn sợ hãi trước cái chết?"
                      />
                    </a>
                  </div>
                  <h3>
                    <a
                      href="https://touchcinema.com/danh-gia-phim/seobok-nguoi-nhan-ban"
                      >Review phim Seobok (Người nhân bản) – Vì sao con người
                      luôn sợ hãi trước cái chết?</a
                    >
                  </h3>
                </div>
                <div class="col-md-4 col-sm-4">
                  <div class="poster">
                    <a
                      href="https://touchcinema.com/danh-gia-phim/tham-tu-lung-danh-conan-vien-dan-do"
                    >
                      <img
                        class="img-responsive"
                        src="https://touchcinema.com/uploads/phim-tham-tu-lung-danh-conan-vien-dan-do/phim-tham-tu-lung-danh-conan-vien-dan-do-thumbnail.jpg"
                        alt="Review phim Thám tử lừng danh Conan: Viên đạn đỏ - Hấp dẫn miễn chê"
                      />
                    </a>
                  </div>
                  <h3>
                    <a
                      href="https://touchcinema.com/danh-gia-phim/tham-tu-lung-danh-conan-vien-dan-do"
                      >Review phim Thám tử lừng danh Conan: Viên đạn đỏ - Hấp
                      dẫn miễn chê</a
                    >
                  </h3>
                </div>
                <div class="col-md-4 col-sm-4">
                  <div class="poster">
                    <a href="https://touchcinema.com/danh-gia-phim/lat-mat-48h">
                      <img
                        class="img-responsive"
                        src="https://touchcinema.com/uploads/phim-lat-mat-48h/phim-lat-mat-48h-thumbnail.png"
                        alt='Review phim Lật mặt: 48h  - Lý Hải "đỉnh của chóp" luôn'
                      />
                    </a>
                  </div>
                  <h3>
                    <a href="https://touchcinema.com/danh-gia-phim/lat-mat-48h"
                      >Review phim Lật mặt: 48h - Lý Hải "đỉnh của chóp" luôn</a
                    >
                  </h3>
                </div>
                <div class="col-md-4 col-sm-4">
                  <div class="poster">
                    <a
                      href="https://touchcinema.com/danh-gia-phim/nao-minh-cung-mo"
                    >
                      <img
                        class="img-responsive"
                        src="https://touchcinema.com/uploads/phim-nao-minh-cung-mo/phim-nao-minh-cung-mo-thumbnail.png"
                        alt="Review phim Nào mình cùng mơ – Vui vẻ, nhẹ nhàng"
                      />
                    </a>
                  </div>
                  <h3>
                    <a
                      href="https://touchcinema.com/danh-gia-phim/nao-minh-cung-mo"
                      >Review phim Nào mình cùng mơ – Vui vẻ, nhẹ nhàng</a
                    >
                  </h3>
                </div>
                <div class="col-md-4 col-sm-4">
                  <div class="poster">
                    <a href="https://touchcinema.com/danh-gia-phim/kieu">
                      <img
                        class="img-responsive"
                        src="https://touchcinema.com/uploads/phim-kieu/phim-kieu-thumbnail.png"
                        alt="Review phim Kiều – Có phải bị chê nhiều là không nên xem?"
                      />
                    </a>
                  </div>
                  <h3>
                    <a href="https://touchcinema.com/danh-gia-phim/kieu"
                      >Review phim Kiều – Có phải bị chê nhiều là không nên
                      xem?</a
                    >
                  </h3>
                </div>
                <div class="col-md-4 col-sm-4">
                  <div class="poster">
                    <a
                      href="https://touchcinema.com/danh-gia-phim/ban-tay-diet-quy"
                    >
                      <img
                        class="img-responsive"
                        src="https://touchcinema.com/uploads/phim-ban-tay-diet-quy/phim-ban-tay-diet-quy-thumbnail.png"
                        alt="Review phim Bàn tay diệt quỷ - Gay cấn, ấn tượng và mê!"
                      />
                    </a>
                  </div>
                  <h3>
                    <a
                      href="https://touchcinema.com/danh-gia-phim/ban-tay-diet-quy"
                      >Review phim Bàn tay diệt quỷ - Gay cấn, ấn tượng và
                      mê!</a
                    >
                  </h3>
                </div>
                <div class="col-md-4 col-sm-4">
                  <div class="poster">
                    <a
                      href="https://touchcinema.com/danh-gia-phim/mortal-kombat-cuoc-chien-sinh-tu"
                    >
                      <img
                        class="img-responsive"
                        src="https://touchcinema.com/uploads/phim-mortal-kombat-cuoc-chien-sinh-tu/phim-mortal-kombat-cuoc-chien-sinh-tu-1-thumbnail.png"
                        alt="Review phim Mortal Kombat: Cuộc chiến sinh tử - Phù thủy James Wan chưa bao giờ khiến khán giả thất vọng"
                      />
                    </a>
                  </div>
                  <h3>
                    <a
                      href="https://touchcinema.com/danh-gia-phim/mortal-kombat-cuoc-chien-sinh-tu"
                      >Review phim Mortal Kombat: Cuộc chiến sinh tử - Phù thủy
                      James Wan chưa bao giờ khiến khán giả thất vọng</a
                    >
                  </h3>
                </div>
                <div class="col-md-4 col-sm-4">
                  <div class="poster">
                    <a href="https://touchcinema.com/danh-gia-phim/song-song">
                      <img
                        class="img-responsive"
                        src="https://touchcinema.com/uploads/phim-song-song/phim-song-song-thumbnail.jpg"
                        alt="Review phim Song Song – Một cánh én nhỏ làm “chao đảo” cả vài mùa xuân"
                      />
                    </a>
                  </div>
                  <h3>
                    <a href="https://touchcinema.com/danh-gia-phim/song-song"
                      >Review phim Song Song – Một cánh én nhỏ làm “chao đảo” cả
                      vài mùa xuân</a
                    >
                  </h3>
                </div>
                <div class="col-md-4 col-sm-4">
                  <div class="poster">
                    <a href="https://touchcinema.com/danh-gia-phim/an-quy">
                      <img
                        class="img-responsive"
                        src="https://touchcinema.com/uploads/phim-an-quy/phim-an-quy-thumbnail.jpg"
                        alt="Review phim Ấn quỷ - Đức tin rất cần tỉnh táo và lý trí"
                      />
                    </a>
                  </div>
                  <h3>
                    <a href="https://touchcinema.com/danh-gia-phim/an-quy"
                      >Review phim Ấn quỷ - Đức tin rất cần tỉnh táo và lý
                      trí</a
                    >
                  </h3>
                </div>
                <div class="col-md-4 col-sm-4">
                  <div class="poster">
                    <a
                      href="https://touchcinema.com/danh-gia-phim/oi-troi-oi-chuyen-phieu-luu-day-thu-vi"
                    >
                      <img
                        class="img-responsive"
                        src="https://touchcinema.com/uploads/oi-troi-oi-chuyen-phieu-luu-thu-vi/oi-troi-oi-chuyen-phieu-luu-thu-vi-thumbnail.jpg"
                        alt="Review phim Ối trời ơi! Chuyến phiêu lưu đầy “thú” vị - Vui nhộn, hài hước"
                      />
                    </a>
                  </div>
                  <h3>
                    <a
                      href="https://touchcinema.com/danh-gia-phim/oi-troi-oi-chuyen-phieu-luu-day-thu-vi"
                      >Review phim Ối trời ơi! Chuyến phiêu lưu đầy “thú” vị -
                      Vui nhộn, hài hước</a
                    >
                  </h3>
                </div>
                <div class="col-md-4 col-sm-4">
                  <div class="poster">
                    <a
                      href="https://touchcinema.com/danh-gia-phim/godzilla-vs-kong"
                    >
                      <img
                        class="img-responsive"
                        src="https://touchcinema.com/uploads/phim-godzilla-vs-kong/phim-godzilla-vs-kong-thumbnail.jpg"
                        alt="Review phim Godzilla Vs. Kong – Đại chiến của hai quái vật thời cổ đại có biến Trái đất về thời đồ đá?"
                      />
                    </a>
                  </div>
                  <h3>
                    <a
                      href="https://touchcinema.com/danh-gia-phim/godzilla-vs-kong"
                      >Review phim Godzilla Vs. Kong – Đại chiến của hai quái
                      vật thời cổ đại có biến Trái đất về thời đồ đá?</a
                    >
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-4">
          <div class="sidebar">
            <div class="widget-ticket">
              <h2>
                <img
                  src="https://touchcinema.com/images/icons/icon-ticket.png"
                  alt="Đặt vé"
                />
                <span>Đặt vé</span>
                <div class="border"></div>
              </h2>
              <form>
                <div class="close-modal">Đóng</div>
                <div class="select-group">
                  <span class="addon"><i class="fa fa-film"></i></span>
                  <select class="form-control" id="widget-movie">
                    <option>Chọn Phim</option>
                    <option value="1072">Bí Kíp Luyện Rồng (Phụ Đề)</option>
                    <option value="1160">Bí Kíp Luyện Rồng (Lồng Tiếng)</option>
                    <option value="1153">Bộ 5 Siêu Đẳng Cấp (Phụ Đề)</option>
                    <option value="1161">
                      Bộ 5 Siêu Đẳng Cấp (Lồng Tiếng)
                    </option>
                    <option value="1143">
                      Dế Mèn: Cuộc Phiêu Lưu Tới Xóm Lầy Lội (Lồng Tiếng)
                    </option>
                    <option value="1108">
                      Doraemon: Nobita Và Cuộc Phiêu Lưu Vào Thế Giới Trong
                      Tranh (Lồng Tiếng)
                    </option>
                    <option value="1163">Quỷ Tha Ma Bắt</option>
                    <option value="1139">Dưới Đáy Hồ</option>
                    <option value="1137">Điệp Quỷ Tân Nương</option>
                  </select>
                </div>
                <div class="select-group">
                  <span class="addon"
                    ><i class="fa fa-calendar-plus-o"></i
                  ></span>
                  <select class="form-control" id="widget-date">
                    <option>Chọn Ngày</option>
                  </select>
                </div>
                <div class="select-group">
                  <span class="addon"><i class="fa fa-calendar"></i></span>
                  <select class="form-control" id="widget-time">
                    <option>Chọn Suất</option>
                  </select>
                </div>
                <div class="center">
                  <button type="button" class="btn btn-success widget-buy">
                    Mua vé
                  </button>
                </div>
                <div class="loading hidden">
                  <img
                    src="https://touchcinema.com/images/loader.gif"
                    alt="Loading..."
                  />
                </div>
              </form>
            </div>
          </div>
          <div class="related-movie">
            <h2>Phim đang chiếu</h2>
            <div class="list">
              <a href="https://touchcinema.com/phim/bi-kip-luyen-rong">
                <div
                  class="poster"
                  style="
                    background-image: url('https://touchcinema.com/storage/slider-app/1440wx600h1-3.jpg');
                  "
                ></div>
              </a>
              <a href="https://touchcinema.com/phim/bi-kip-luyen-rong-0">
                <div
                  class="poster"
                  style="
                    background-image: url('https://touchcinema.com/storage/slider-app/1440wx600h1-3.jpg');
                  "
                ></div>
              </a>
              <a href="https://touchcinema.com/phim/bo-5-sieu-dang-cap">
                <div
                  class="poster"
                  style="
                    background-image: url('https://touchcinema.com/storage/slider-app/2048wx858h-33.jpg');
                  "
                ></div>
              </a>
              <a href="https://touchcinema.com/phim/lt-bo-5-sieu-dang-cap">
                <div
                  class="poster"
                  style="
                    background-image: url('https://touchcinema.com/storage/slider-app/2048wx858h-33.jpg');
                  "
                ></div>
              </a>
              <a
                href="https://touchcinema.com/phim/de-men-cuoc-phieu-luu-toi-xom-lay-loi"
              >
                <div
                  class="poster"
                  style="
                    background-image: url('https://touchcinema.com/storage/slider-app/1440wx600h-21.jpg');
                  "
                ></div>
              </a>
              <a
                href="https://touchcinema.com/phim/doraemon-2025-nobita-va-cau-chuyen-the-gioi-tranh-anh"
              >
                <div
                  class="poster"
                  style="
                    background-image: url('https://touchcinema.com/storage/slider-app/2048wx858h-30.jpg');
                  "
                ></div>
              </a>
              <a href="https://touchcinema.com/phim/quy-tha-ma-bat">
                <div
                  class="poster"
                  style="
                    background-image: url('https://touchcinema.com/storage/slider-app/1440wx600h-22.jpg');
                  "
                ></div>
              </a>
              <a href="https://touchcinema.com/phim/duoi-day-ho">
                <div
                  class="poster"
                  style="
                    background-image: url('https://touchcinema.com/storage/slider-app/duoi-day-ho-p-2048-1748921724215.jpg');
                  "
                ></div>
              </a>
              <a href="https://touchcinema.com/phim/diep-quy-tan-nuong">
                <div
                  class="poster"
                  style="
                    background-image: url('https://touchcinema.com/storage/slider-app/2048wx858h-32.jpg');
                  "
                ></div>
              </a>
            </div>
            <div class="view-more">
              <a href="https://touchcinema.com/phim">
                <div class="text">xem thêm</div>
                <div class="arrow-down"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isOpen" class="modal fade in" id="modal-trailer">
      <div class="modal-dialog">
        <div class="modal-content" ref="trailerVideoRef">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              title="Đóng"
              aria-hidden="true"
              @click="toggleOpen"
            >
              ×
            </button>
          </div>
          <div class="modal-body">
            <div class="video-container">
              <iframe
                width="853"
                height="480"
                :src="`${convertToEmbedUrl(movie.trailerVideoUrl)}`"
                frameborder="0"
                allowfullscreen=""
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";
import { onClickOutside } from "@vueuse/core";

const { $axios } = useNuxtApp();
const toast = useToast();
const route = useRoute();

const movieId = route.params.id;
const isOpen = ref(false);
const trailerVideoRef = ref(null);
const movie = ref({
  id: "loading...",
  title: "loading...",
  titleEnglish: "loading...",
  releaseDate: "loading...",
  duration: "loading...",
  language: "loading...",
  director: "loading...",
  category: "loading...",
  backgroundUrl: "loading...",
  posterUrl: "loading...",
  description: "loading...",
  cast: "loading...",
  trailerVideoUrl: "loading...",
  ageRating: "loading...",
});

onMounted(async () => {
  const response = await $axios.get(`/movie/${movieId}`, {});
  console.log("response: ", response);
  movie.value = response.data.result;
});

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};

onClickOutside(trailerVideoRef, () => {
  isOpen.value = false;
});

const convertToEmbedUrl = (url) => {
  const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/;
  const match = url.match(regex);
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
};
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
