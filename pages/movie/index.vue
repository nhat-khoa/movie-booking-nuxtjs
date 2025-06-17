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
              <div class="col-md-3 col-sm-4 col-xs-6">
                <div class="movie" style="padding-top: 30px">
                  <div class="poster">
                    <a href="phim/dia-dao-mat-troi-trong-bong-toi.html">
                      <img
                        class="img-responsive"
                        src="/uploads/slide-web/470x700-24-poster.jpg"
                        alt="Địa Đạo: Mặt Trời Trong Bóng Tối"
                      />
                    </a>
                    <div class="info">
                      <a
                        href="phim/dia-dao-mat-troi-trong-bong-toi.html"
                        class="button detail"
                      >
                        > Chi tiết
                      </a>
                      <a
                        href="phim/dia-dao-mat-troi-trong-bong-toi.html#showtime"
                        class="button ticket"
                      >
                        Mua vé
                        <img src="/images/icons/icon-dat-ve.png" alt="Mua vé" />
                      </a>
                      <p class="button duration"><b>Thời lượng:</b> 128 phút</p>
                      <p class="button category"><b>Thể loại:</b> Lịch Sử</p>
                      <p class="button format"><b>Định dạng</b> 2D</p>
                    </div>
                  </div>
                  <div class="detail">
                    <h2>
                      <a href="phim/dia-dao-mat-troi-trong-bong-toi.html"
                        >Địa Đạo: Mặt Trời Trong Bóng Tối</a
                      >
                    </h2>
                    <p class="release">Khởi chiếu 04/04/2025</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-4 col-xs-6">
                <div class="movie" style="padding-top: 30px">
                  <div class="poster">
                    <a href="phim/dia-dao-mat-troi-trong-bong-toi.html">
                      <img
                        class="img-responsive"
                        src="/uploads/slide-web/470x700-24-poster.jpg"
                        alt="Địa Đạo: Mặt Trời Trong Bóng Tối"
                      />
                    </a>
                    <div class="info">
                      <a
                        href="phim/dia-dao-mat-troi-trong-bong-toi.html"
                        class="button detail"
                      >
                        > Chi tiết
                      </a>
                      <a
                        href="phim/dia-dao-mat-troi-trong-bong-toi.html#showtime"
                        class="button ticket"
                      >
                        Mua vé
                        <img src="/images/icons/icon-dat-ve.png" alt="Mua vé" />
                      </a>
                      <p class="button duration"><b>Thời lượng:</b> 128 phút</p>
                      <p class="button category"><b>Thể loại:</b> Lịch Sử</p>
                      <p class="button format"><b>Định dạng</b> 2D</p>
                    </div>
                  </div>
                  <div class="detail">
                    <h2>
                      <a href="phim/dia-dao-mat-troi-trong-bong-toi.html"
                        >Địa Đạo: Mặt Trời Trong Bóng Tối</a
                      >
                    </h2>
                    <p class="release">Khởi chiếu 04/04/2025</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-4 col-xs-6">
                <div class="movie" style="padding-top: 30px">
                  <div class="poster">
                    <a href="phim/dia-dao-mat-troi-trong-bong-toi.html">
                      <img
                        class="img-responsive"
                        src="/uploads/slide-web/470x700-24-poster.jpg"
                        alt="Địa Đạo: Mặt Trời Trong Bóng Tối"
                      />
                    </a>
                    <div class="info">
                      <a
                        href="phim/dia-dao-mat-troi-trong-bong-toi.html"
                        class="button detail"
                      >
                        > Chi tiết
                      </a>
                      <a
                        href="phim/dia-dao-mat-troi-trong-bong-toi.html#showtime"
                        class="button ticket"
                      >
                        Mua vé
                        <img src="/images/icons/icon-dat-ve.png" alt="Mua vé" />
                      </a>
                      <p class="button duration"><b>Thời lượng:</b> 128 phút</p>
                      <p class="button category"><b>Thể loại:</b> Lịch Sử</p>
                      <p class="button format"><b>Định dạng</b> 2D</p>
                    </div>
                  </div>
                  <div class="detail">
                    <h2>
                      <a href="phim/dia-dao-mat-troi-trong-bong-toi.html"
                        >Địa Đạo: Mặt Trời Trong Bóng Tối</a
                      >
                    </h2>
                    <p class="release">Khởi chiếu 04/04/2025</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-4 col-xs-6">
                <div class="movie" style="padding-top: 30px">
                  <div class="poster">
                    <a href="phim/dia-dao-mat-troi-trong-bong-toi.html">
                      <img
                        class="img-responsive"
                        src="/uploads/slide-web/470x700-24-poster.jpg"
                        alt="Địa Đạo: Mặt Trời Trong Bóng Tối"
                      />
                    </a>
                    <div class="info">
                      <a
                        href="phim/dia-dao-mat-troi-trong-bong-toi.html"
                        class="button detail"
                      >
                        > Chi tiết
                      </a>
                      <a
                        href="phim/dia-dao-mat-troi-trong-bong-toi.html#showtime"
                        class="button ticket"
                      >
                        Mua vé
                        <img src="/images/icons/icon-dat-ve.png" alt="Mua vé" />
                      </a>
                      <p class="button duration"><b>Thời lượng:</b> 128 phút</p>
                      <p class="button category"><b>Thể loại:</b> Lịch Sử</p>
                      <p class="button format"><b>Định dạng</b> 2D</p>
                    </div>
                  </div>
                  <div class="detail">
                    <h2>
                      <a href="phim/dia-dao-mat-troi-trong-bong-toi.html"
                        >Địa Đạo: Mặt Trời Trong Bóng Tối</a
                      >
                    </h2>
                    <p class="release">Khởi chiếu 04/04/2025</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-4 col-xs-6">
                <div class="movie" style="padding-top: 30px">
                  <div class="poster">
                    <a href="phim/dia-dao-mat-troi-trong-bong-toi.html">
                      <img
                        class="img-responsive"
                        src="/uploads/slide-web/470x700-24-poster.jpg"
                        alt="Địa Đạo: Mặt Trời Trong Bóng Tối"
                      />
                    </a>
                    <div class="info">
                      <a
                        href="phim/dia-dao-mat-troi-trong-bong-toi.html"
                        class="button detail"
                      >
                        > Chi tiết
                      </a>
                      <a
                        href="phim/dia-dao-mat-troi-trong-bong-toi.html#showtime"
                        class="button ticket"
                      >
                        Mua vé
                        <img src="/images/icons/icon-dat-ve.png" alt="Mua vé" />
                      </a>
                      <p class="button duration"><b>Thời lượng:</b> 128 phút</p>
                      <p class="button category"><b>Thể loại:</b> Lịch Sử</p>
                      <p class="button format"><b>Định dạng</b> 2D</p>
                    </div>
                  </div>
                  <div class="detail">
                    <h2>
                      <a href="phim/dia-dao-mat-troi-trong-bong-toi.html"
                        >Địa Đạo: Mặt Trời Trong Bóng Tối</a
                      >
                    </h2>
                    <p class="release">Khởi chiếu 04/04/2025</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-4 col-xs-6">
                <div class="movie" style="padding-top: 30px">
                  <div class="poster">
                    <a href="phim/dia-dao-mat-troi-trong-bong-toi.html">
                      <img
                        class="img-responsive"
                        src="/uploads/slide-web/470x700-24-poster.jpg"
                        alt="Địa Đạo: Mặt Trời Trong Bóng Tối"
                      />
                    </a>
                    <div class="info">
                      <a
                        href="phim/dia-dao-mat-troi-trong-bong-toi.html"
                        class="button detail"
                      >
                        > Chi tiết
                      </a>
                      <a
                        href="phim/dia-dao-mat-troi-trong-bong-toi.html#showtime"
                        class="button ticket"
                      >
                        Mua vé
                        <img src="/images/icons/icon-dat-ve.png" alt="Mua vé" />
                      </a>
                      <p class="button duration"><b>Thời lượng:</b> 128 phút</p>
                      <p class="button category"><b>Thể loại:</b> Lịch Sử</p>
                      <p class="button format"><b>Định dạng</b> 2D</p>
                    </div>
                  </div>
                  <div class="detail">
                    <h2>
                      <a href="phim/dia-dao-mat-troi-trong-bong-toi.html"
                        >Địa Đạo: Mặt Trời Trong Bóng Tối</a
                      >
                    </h2>
                    <p class="release">Khởi chiếu 04/04/2025</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-4 col-xs-6">
                <div class="movie" style="padding-top: 30px">
                  <div class="poster">
                    <a href="phim/dia-dao-mat-troi-trong-bong-toi.html">
                      <img
                        class="img-responsive"
                        src="/uploads/slide-web/470x700-24-poster.jpg"
                        alt="Địa Đạo: Mặt Trời Trong Bóng Tối"
                      />
                    </a>
                    <div class="info">
                      <a
                        href="phim/dia-dao-mat-troi-trong-bong-toi.html"
                        class="button detail"
                      >
                        > Chi tiết
                      </a>
                      <a
                        href="phim/dia-dao-mat-troi-trong-bong-toi.html#showtime"
                        class="button ticket"
                      >
                        Mua vé
                        <img src="/images/icons/icon-dat-ve.png" alt="Mua vé" />
                      </a>
                      <p class="button duration"><b>Thời lượng:</b> 128 phút</p>
                      <p class="button category"><b>Thể loại:</b> Lịch Sử</p>
                      <p class="button format"><b>Định dạng</b> 2D</p>
                    </div>
                  </div>
                  <div class="detail">
                    <h2>
                      <a href="phim/dia-dao-mat-troi-trong-bong-toi.html"
                        >Địa Đạo: Mặt Trời Trong Bóng Tối</a
                      >
                    </h2>
                    <p class="release">Khởi chiếu 04/04/2025</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-4 col-xs-6">
                <div class="movie" style="padding-top: 30px">
                  <div class="poster">
                    <a href="phim/dia-dao-mat-troi-trong-bong-toi.html">
                      <img
                        class="img-responsive"
                        src="/uploads/slide-web/470x700-24-poster.jpg"
                        alt="Địa Đạo: Mặt Trời Trong Bóng Tối"
                      />
                    </a>
                    <div class="info">
                      <a
                        href="phim/dia-dao-mat-troi-trong-bong-toi.html"
                        class="button detail"
                      >
                        > Chi tiết
                      </a>
                      <a
                        href="phim/dia-dao-mat-troi-trong-bong-toi.html#showtime"
                        class="button ticket"
                      >
                        Mua vé
                        <img src="/images/icons/icon-dat-ve.png" alt="Mua vé" />
                      </a>
                      <p class="button duration"><b>Thời lượng:</b> 128 phút</p>
                      <p class="button category"><b>Thể loại:</b> Lịch Sử</p>
                      <p class="button format"><b>Định dạng</b> 2D</p>
                    </div>
                  </div>
                  <div class="detail">
                    <h2>
                      <a href="phim/dia-dao-mat-troi-trong-bong-toi.html"
                        >Địa Đạo: Mặt Trời Trong Bóng Tối</a
                      >
                    </h2>
                    <p class="release">Khởi chiếu 04/04/2025</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-4 col-xs-6">
                <div class="movie" style="padding-top: 30px">
                  <div class="poster">
                    <a href="phim/dia-dao-mat-troi-trong-bong-toi.html">
                      <img
                        class="img-responsive"
                        src="/uploads/slide-web/470x700-24-poster.jpg"
                        alt="Địa Đạo: Mặt Trời Trong Bóng Tối"
                      />
                    </a>
                    <div class="info">
                      <a
                        href="phim/dia-dao-mat-troi-trong-bong-toi.html"
                        class="button detail"
                      >
                        > Chi tiết
                      </a>
                      <a
                        href="phim/dia-dao-mat-troi-trong-bong-toi.html#showtime"
                        class="button ticket"
                      >
                        Mua vé
                        <img src="/images/icons/icon-dat-ve.png" alt="Mua vé" />
                      </a>
                      <p class="button duration"><b>Thời lượng:</b> 128 phút</p>
                      <p class="button category"><b>Thể loại:</b> Lịch Sử</p>
                      <p class="button format"><b>Định dạng</b> 2D</p>
                    </div>
                  </div>
                  <div class="detail">
                    <h2>
                      <a href="phim/dia-dao-mat-troi-trong-bong-toi.html"
                        >Địa Đạo: Mặt Trời Trong Bóng Tối</a
                      >
                    </h2>
                    <p class="release">Khởi chiếu 04/04/2025</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-4 col-xs-6">
                <div class="movie" style="padding-top: 30px">
                  <div class="poster">
                    <a href="phim/dia-dao-mat-troi-trong-bong-toi.html">
                      <img
                        class="img-responsive"
                        src="/uploads/slide-web/470x700-24-poster.jpg"
                        alt="Địa Đạo: Mặt Trời Trong Bóng Tối"
                      />
                    </a>
                    <div class="info">
                      <a
                        href="phim/dia-dao-mat-troi-trong-bong-toi.html"
                        class="button detail"
                      >
                        > Chi tiết
                      </a>
                      <a
                        href="phim/dia-dao-mat-troi-trong-bong-toi.html#showtime"
                        class="button ticket"
                      >
                        Mua vé
                        <img src="/images/icons/icon-dat-ve.png" alt="Mua vé" />
                      </a>
                      <p class="button duration"><b>Thời lượng:</b> 128 phút</p>
                      <p class="button category"><b>Thể loại:</b> Lịch Sử</p>
                      <p class="button format"><b>Định dạng</b> 2D</p>
                    </div>
                  </div>
                  <div class="detail">
                    <h2>
                      <a href="phim/dia-dao-mat-troi-trong-bong-toi.html"
                        >Địa Đạo: Mặt Trời Trong Bóng Tối</a
                      >
                    </h2>
                    <p class="release">Khởi chiếu 04/04/2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else id="phimsapchieu" class="tab-pane fade in active">
            <div class="row row-eq-height">
              <div class="col-md-3 col-sm-4 col-xs-6">
                <div class="movie" style="padding-top: 30px">
                  <div class="poster">
                    <a href="phim/tham-tu-kien-ky-an-khong-dau.html">
                      <img
                        class="img-responsive"
                        src="/uploads/slide-web/ttk-poster-teaser-cursed-village-fa-1638x2048-1-poster.jpg"
                        alt="Thám Tử Kiên: Kỳ Án Không Đầu"
                      />
                    </a>
                    <div class="info">
                      <a
                        href="phim/tham-tu-kien-ky-an-khong-dau.html"
                        class="button detail"
                      >
                        > Chi tiết
                      </a>
                      <a
                        href="phim/tham-tu-kien-ky-an-khong-dau.html#showtime"
                        class="button ticket"
                      >
                        Mua vé
                        <img src="/images/icons/icon-dat-ve.png" alt="Mua vé" />
                      </a>
                      <p class="button duration"><b>Thời lượng:</b></p>
                      <p class="button category"><b>Thể loại:</b> Kinh Dị</p>
                      <p class="button format"><b>Định dạng</b> 2D</p>
                    </div>
                  </div>
                  <div class="detail">
                    <h2>
                      <a href="phim/tham-tu-kien-ky-an-khong-dau.html"
                        >Thám Tử Kiên: Kỳ Án Không Đầu</a
                      >
                    </h2>
                    <p class="release">Khởi chiếu 30/04/2025</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-4 col-xs-6">
                <div class="movie" style="padding-top: 30px">
                  <div class="poster">
                    <a href="phim/tham-tu-kien-ky-an-khong-dau.html">
                      <img
                        class="img-responsive"
                        src="/uploads/slide-web/ttk-poster-teaser-cursed-village-fa-1638x2048-1-poster.jpg"
                        alt="Thám Tử Kiên: Kỳ Án Không Đầu"
                      />
                    </a>
                    <div class="info">
                      <a
                        href="phim/tham-tu-kien-ky-an-khong-dau.html"
                        class="button detail"
                      >
                        > Chi tiết
                      </a>
                      <a
                        href="phim/tham-tu-kien-ky-an-khong-dau.html#showtime"
                        class="button ticket"
                      >
                        Mua vé
                        <img src="/images/icons/icon-dat-ve.png" alt="Mua vé" />
                      </a>
                      <p class="button duration"><b>Thời lượng:</b></p>
                      <p class="button category"><b>Thể loại:</b> Kinh Dị</p>
                      <p class="button format"><b>Định dạng</b> 2D</p>
                    </div>
                  </div>
                  <div class="detail">
                    <h2>
                      <a href="phim/tham-tu-kien-ky-an-khong-dau.html"
                        >Thám Tử Kiên: Kỳ Án Không Đầu</a
                      >
                    </h2>
                    <p class="release">Khởi chiếu 30/04/2025</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-4 col-xs-6">
                <div class="movie" style="padding-top: 30px">
                  <div class="poster">
                    <a href="phim/tham-tu-kien-ky-an-khong-dau.html">
                      <img
                        class="img-responsive"
                        src="/uploads/slide-web/ttk-poster-teaser-cursed-village-fa-1638x2048-1-poster.jpg"
                        alt="Thám Tử Kiên: Kỳ Án Không Đầu"
                      />
                    </a>
                    <div class="info">
                      <a
                        href="phim/tham-tu-kien-ky-an-khong-dau.html"
                        class="button detail"
                      >
                        > Chi tiết
                      </a>
                      <a
                        href="phim/tham-tu-kien-ky-an-khong-dau.html#showtime"
                        class="button ticket"
                      >
                        Mua vé
                        <img src="/images/icons/icon-dat-ve.png" alt="Mua vé" />
                      </a>
                      <p class="button duration"><b>Thời lượng:</b></p>
                      <p class="button category"><b>Thể loại:</b> Kinh Dị</p>
                      <p class="button format"><b>Định dạng</b> 2D</p>
                    </div>
                  </div>
                  <div class="detail">
                    <h2>
                      <a href="phim/tham-tu-kien-ky-an-khong-dau.html"
                        >Thám Tử Kiên: Kỳ Án Không Đầu</a
                      >
                    </h2>
                    <p class="release">Khởi chiếu 30/04/2025</p>
                  </div>
                </div>
              </div>
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Biến boolean để xác định tab nào active
const isNowShowing = ref(true); // mặc định đang chiếu

// Khi bấm "Phim đang chiếu"
const showNowShowing = () => {
  isNowShowing.value = true;
};

// Khi bấm "Phim sắp chiếu"
const showComingSoon = () => {
  isNowShowing.value = false;
};
</script>

<style></style>
