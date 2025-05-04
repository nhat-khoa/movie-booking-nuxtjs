<template>
  <div id="header">
    <div class="container">
      <div class="logo">
        <a href="index.html"
          ><img
            style="max-width: 100%"
            src="/images/touchcinema.png"
            alt="touchcinema"
        /></a>
      </div>
      <div class="primary-menu">
        <div class="top-button">
          <div class="row">
            <div class="col-md-8 col-sm-7">
              <a class="buy-ticket" href="#"
                ><img
                  class="img-responsive"
                  src="/images/icons/dat-ve-ngay.png"
                  alt="Mua vé"
              /></a>
              <a class="flags" href="#"
                ><img
                  class="img-responsive"
                  src="/images/flags/vn.png"
                  alt="Ngôn ngữ"
              /></a>
              <a class="hidden-lg btn-search" href="javascript:;"
                ><i class="fa fa-search"></i
              ></a>
              <form
                action="https://touchcinema.com/tim-kiem"
                class="form-search visible-lg"
              >
                <div class="input-group">
                  <input
                    class="form-control"
                    name="k"
                    value=""
                    type="search"
                    placeholder="Tìm kiếm"
                  />
                  <button type="submit" class="submit">
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </form>
            </div>
            <div class="col-md-4 col-sm-5 account">
              <a href="login.html" class="login">
                <img
                  src="/images/icons/so-da.png"
                  alt="Đăng nhập"
                  class="img-responsive"
                />
                <span>Đăng nhập</span>
              </a>
              <a href="register.html" class="register">
                <img
                  src="/images/icons/bong-ngo.png"
                  alt="Đăng kí"
                  class="img-responsive"
                />
                <span>Đăng kí <b class="hh">thành viên</b></span>
              </a>
            </div>
          </div>
        </div>
        <nav
          class="navbar navbar-default"
          role="navigation"
          id="touchcinema-fixed-top"
        >
          <div id="primary-menu">
            <div class="collapse navbar-collapse">
              <ul class="nav navbar-nav navbar-left">
                <li class=""><a href="index.html">Trang chủ</a></li>
                <li :class="{ active: $route.path === '/movie' }">
                  <NuxtLink to="/movie">Phim</NuxtLink>
                </li>
                <li :class="{ active: $route.path === '/schedule' }">
                  <NuxtLink to="/schedule">Lịch chiếu</NuxtLink>
                </li>
                <li class=""><a href="gia-ve.html">giá vé</a></li>
                <li class=""><a href="thanh-vien.html">Thành viên</a></li>
                <li class="">
                  <a href="khuyen-mai.html">Ưu đãi - Sự kiện</a>
                </li>
                <li class="">
                  <a href="danh-gia-phim.html">Đánh giá phim</a>
                </li>
                <li class=""><a href="gioi-thieu.html">Giới thiệu</a></li>
                <li class="dropdown">
                  <a
                    class="dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dịch vụ</a
                  >
                  <ul class="dropdown-menu">
                    <li>
                      <a href="dich-vu/quang-cao-su-kien.html">
                        Dịch vụ quảng cáo - sự kiện
                      </a>
                    </li>
                    <li>
                      <a href="dich-vu/touch-voucher.html"> Touch Voucher </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul class="nav navbar-nav navbar-right">
                <li>
                  <div class="notification-box">
                    <div id="noti_Button" class="notifications">
                      <i class="fa fa-bell" aria-hidden="true"></i>
                    </div>
                    <!--THE NOTIFICAIONS DROPDOWN BOX.-->
                    <div id="notifications">
                      <h3>Thông báo</h3>
                      <div class="list-notifications">
                        <ul>
                          <li>
                            <a href="index.html">
                              <b>💗Chúc mừng năm mới Ất Tỵ💗</b>
                              <p>
                                Xin cảm ơn tất cả quý khách hàng thân yêu đã
                                luôn tin tưởng và ủng hộ Touch Cinema, chúc mọi
                                người năm mới thuận buồm xuôi gió - tài lộc đầy
                                nhà - sức khoẻ đầy mình nhaa 💗
                              </p>
                            </a>
                          </li>
                          <li>
                            <a href="index.html">
                              <b>NHỚ ĐỔI ĐIỂM THƯỞNG NHÉ KHÁCH IU ƠI</b>
                              <p>
                                Hôm nay là ngày cuối cùng để đổi điểm thưởng thẻ
                                thành viên Touch Cinema trước khi điểm reset về
                                0. Khách hàng có thể tự thực hiện đổi online
                                trên app/web Touch Cinema hoặc mang theo thẻ
                                thành viên/CCCD đến trực tiếp tại quầy. Quầy vé
                                và bắp nước Touch hôm nay sẽ phục vụ đến hết
                                22h30 để chờ khách iu. Mọi thông tin thêm xin
                                liên hệ Facebook Touch Cinema. Chúc quý khách
                                năm mới An Khang, Thịnh Vượng, Như Ý.
                              </p>
                            </a>
                          </li>
                          <li>
                            <a href="index.html">
                              <b
                                >THÔNG BÁO: ĐỔI ĐIỂM THƯỞNG TRƯỚC 00H
                                01/01/2025</b
                              >
                              <p>
                                Touch Cinema trân trọng kính mời quý khách hàng
                                (Hạng thẻ Member/VIP/Diamond) thực hiện đổi điểm
                                thưởng trước khi điểm được reset về 0 vào ngày
                                00h ngày 01/01/2025. Khách hàng có thể thao tác
                                đổi qua app/web Touch Cinema hoặc mang thẻ thành
                                viên/CCCD đến đổi điểm trực tiếp tại quầy rạp.
                                Nếu cần hỗ trợ thêm, quý khách vui lòng liên hệ
                                Facebook Touch Cinema Gia Lai
                              </p>
                            </a>
                          </li>
                          <li>
                            <a href="index.html">
                              <b
                                >NGÀY CUỐI ĐỔI ĐIỂM THÀNH VIÊN TOUCH CINEMA
                                2023⚡⚡⚡</b
                              >
                              <p>
                                Trân trọng kính mời quý khách hàng đổi điểm
                                thưởng thành viên Touch Cinema (Đổi online tại
                                app/web Touch Cinema cho các suất đã có lịch
                                chiếu hoặc đổi trực tiếp tại quầy). 00H 1/1/2024
                                Hệ thống sẽ tự động reset điểm về 0.
                              </p>
                            </a>
                          </li>
                          <li>
                            <a href="index.html">
                              <b>Khuyến mãi mới từ Touch Cinema</b>
                              <p>Khuyến mãi từ Touch Cinema: TOUCHxYOUNGFEST</p>
                            </a>
                          </li>
                          <li>
                            <a href="phim/nha-ba-nu.html">
                              <b>💵Nhà Bà Nữ: Cán mốc 50 tỷ</b>
                              <p>
                                ❤️Bộ phim về gia đình chân thật và ý nghĩa, hứa
                                hẹn sẽ chạm đến cảm xúc của người xem.
                              </p>
                            </a>
                          </li>
                          <li>
                            <a href="phim/nha-ba-nu.html">
                              <b>🦀 Nhà Bà Nữ - Bánh canh cua đủ vị</b>
                              <p>
                                Đến Touch Cinema ”book” ngay món bánh canh cua
                                Nhà Bà Nữ. Đồng cảm với những hoài bão, khát
                                vọng và cả sự nông nổi của tuổi trẻ… 🥰
                              </p>
                            </a>
                          </li>
                          <li>
                            <a href="index.html">
                              <b>Touch Cinema Happy New Year!!!🎊</b>
                              <p>
                                Nhân dịp tết Quý Mão 2023 kính chúc quý khách
                                cùng gia đình mạnh khỏe, an khang thịnh vượng,
                                vạn sự như ý, vạn sự thành công💕💕💕💕
                              </p>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <!-- /.navbar-collapse -->
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
