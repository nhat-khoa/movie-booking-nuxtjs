<template>
  <div id="wrap">
    <div class="container ticket-login">
      <div class="row">
        <div class="col-md-3 col-sm-3">
          <div class="member-card">
            <img src="/images/member-card.png" alt="member-card" />
          </div>
        </div>
        <div class="col-md-9 col-sm-9 login-wrap">
          <div class="row">
            <div class="col-md-7 col-sm-6">
              <div class="mbox">
                <div class="title">
                  <h2>Đăng kí</h2>
                </div>
                <div class="box-body">
                  <form
                    role="form"
                    method="POST"
                    action="https://touchcinema.com/register"
                  >
                    <input
                      type="hidden"
                      name="_token"
                      value="ebZ5a7IoDdxuk661G0YWsm56CePNfExXJzQEehrU"
                    />
                    <div class="form-group">
                      <label for="name">Tên đăng nhập</label>
                      <input
                        id="name"
                        type="text"
                        class="form-control"
                        name="name"
                        value=""
                        required
                        autofocus
                      />
                    </div>

                    <div class="form-group">
                      <label for="email">E-Mail</label>
                      <input
                        id="email"
                        type="email"
                        class="form-control"
                        name="email"
                        value=""
                        required
                      />
                    </div>

                    <div class="form-group">
                      <label for="name">Họ và tên</label>
                      <input
                        id="name"
                        type="text"
                        class="form-control"
                        name="fullname"
                        value=""
                        required
                        autofocus
                      />
                    </div>
                    <div class="form-group">
                      <label for="name">SĐT</label>
                      <input
                        id="name"
                        type="phone"
                        class="form-control"
                        name="phone"
                        value=""
                        required
                        autofocus
                      />
                    </div>

                    <div class="form-group">
                      <label for="password">Mật khẩu</label>
                      <input
                        id="password"
                        type="password"
                        class="form-control"
                        name="password"
                        required
                      />
                    </div>

                    <div class="form-group">
                      <label for="password-confirm">Nhập lại mật khẩu</label>
                      <input
                        id="password-confirm"
                        type="password"
                        class="form-control"
                        name="password_confirmation"
                        required
                      />
                    </div>
                    <input
                      type="hidden"
                      id="ggToken"
                      name="g-recaptcha-response"
                      value=""
                    />
                    <button type="submit" class="btn btn-primary">
                      Đăng kí
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-md-5 col-sm-6">
              <div id="login">
                <div class="row">
                  <div class="col-xs-12">
                    <div class="mbox mbox-2">
                      <div class="title">
                        <h2>Đăng nhập</h2>
                      </div>
                      <div class="box-body">
                        <form
                          action="https://touchcinema.com/login"
                          method="post"
                        >
                          <input
                            type="hidden"
                            name="_token"
                            value="ebZ5a7IoDdxuk661G0YWsm56CePNfExXJzQEehrU"
                          />
                          <input
                            type="hidden"
                            name="redirect"
                            value="http://touchcinema.com/"
                          />
                          <div class="form-group">
                            <label for="username">Tên đăng nhập:</label>
                            <input
                              id="username"
                              type="text"
                              name="name"
                              class="form-control"
                              value=""
                              placeholder="Tên đăng nhập"
                              required
                            />
                          </div>
                          <div class="form-group">
                            <label for="password">Mật khẩu:</label>
                            <input
                              id="password"
                              type="password"
                              name="password"
                              class="form-control"
                              placeholder="Mật khẩu"
                              required
                            />
                          </div>
                          <div class="form-group">
                            <input
                              name="remember"
                              id="remember"
                              type="checkbox"
                              checked="checked"
                              value="forever"
                            />
                            <label for="remember" class="italic"
                              >Ghi nhớ đăng nhập</label
                            >
                          </div>
                          <input
                            type="submit"
                            class="btn btn-login"
                            value="Đăng nhập"
                          />
                          <div class="attr-link">
                            <a href="password/reset.html">Quên mật khẩu</a>
                            / <a href="register.html">Đăng kí</a>
                          </div>
                        </form>
                        <a
                          class="login-social"
                          title="Login with facebook"
                          style="cursor: pointer"
                          type="button"
                          @click="testToast"
                        >
                          <img
                            class="img-responsive"
                            src="/images/fb.png"
                            alt="Facebook"
                          />
                        </a>
                        <a
                          class="login-social"
                          title="Login with google"
                          style="cursor: pointer"
                          type="button"
                          @click="handleGoogleLogin"
                        >
                          <img
                            class="img-responsive"
                            src="/images/gp.png"
                            alt="Google"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// definePageMeta({
//   layout: "auth",
// });

import { useToast } from "vue-toastification";

const { $googleSignIn, $axios } = useNuxtApp();
const toast = useToast();

const testToast = () => {
  const message = "test"; // hoặc thử object khác nếu bạn muốn test
  console.log(typeof message, message);
  toast.error(message);
};

const handleGoogleLogin = async () => {
  try {
    google.accounts.id.disableAutoSelect();
    const credential = await $googleSignIn();
    console.log("credential nhận được từ google:", credential);
    await loginWithGoogle(credential);
  } catch (error) {
    toast.error("Login Google failed!");
    console.error("Login Google failed!", error);
  }
};

async function loginWithGoogle(credential) {
  try {
    const response = await $axios.post("/auth/login-google", {
      credential,
    });
    const data = response.data;
    console.log("data response:", data);
    toast.success("Login success!");
    toast.success("data response:" + data);
  } catch (error) {
    console.error("Error during login:", error);
    toast.error("Error during login: " + error);
  }
}
</script>

<style></style>
