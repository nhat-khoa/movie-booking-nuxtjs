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
                  <h2>{{ $t("login.signup") }}</h2>
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
                      <label for="name">{{ $t("login.username") }}</label>
                      <input
                        id="name"
                        type="text"
                        class="form-control"
                        name="name"
                        value=""
                        :placeholder="$t('login.username')"
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
                        placeholder="E-Mail"
                        required
                      />
                    </div>

                    <div class="form-group">
                      <label for="name">{{ $t("login.fullname") }}</label>
                      <input
                        id="name"
                        type="text"
                        class="form-control"
                        name="fullname"
                        value=""
                        :placeholder="$t('login.fullname')"
                        required
                        autofocus
                      />
                    </div>
                    <div class="form-group">
                      <label for="name">{{ $t("login.phoneNumber") }}</label>
                      <input
                        id="name"
                        type="phone"
                        class="form-control"
                        name="phone"
                        value=""
                        :placeholder="$t('login.phoneNumber')"
                        required
                        autofocus
                      />
                    </div>

                    <div class="form-group">
                      <label for="password">{{ $t("login.password") }}</label>
                      <input
                        id="password"
                        type="password"
                        class="form-control"
                        name="password"
                        :placeholder="$t('login.password')"
                        required
                      />
                    </div>

                    <div class="form-group">
                      <label for="password-confirm">
                        {{ $t("login.reEnterPass") }}
                      </label>
                      <input
                        id="password-confirm"
                        type="password"
                        class="form-control"
                        name="password_confirmation"
                        :placeholder="$t('login.reEnterPass')"
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
                      {{ $t("login.signup") }}
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
                        <h2>{{ $t("login.signin") }}</h2>
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
                            <label for="username">
                              {{ $t("login.username") }}
                            </label>
                            <input
                              id="username"
                              type="text"
                              name="name"
                              class="form-control"
                              value=""
                              :placeholder="$t('login.username')"
                              required
                            />
                          </div>
                          <div class="form-group">
                            <label for="password">
                              {{ $t("login.password") }}
                            </label>
                            <input
                              id="password"
                              type="password"
                              name="password"
                              class="form-control"
                              :placeholder="$t('login.password')"
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
                            <label for="remember" class="italic">
                              {{ $t("login.rememberLogin") }}
                            </label>
                          </div>
                          <input
                            type="submit"
                            class="btn btn-login"
                            :value="$t('login.signin')"
                          />
                          <div class="attr-link">
                            <a href="password/reset.html">
                              {{ $t("login.forgotPass") }}
                            </a>
                            /
                            <a href="register.html">
                              {{ $t("login.signup") }}
                            </a>
                          </div>
                        </form>
                        <a
                          class="login-social"
                          title="Login with facebook"
                          style="cursor: pointer"
                          type="button"
                          @click="handleGoogleFacebook"
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
import { useUserStore } from "~/stores/user";

const { $googleSignIn, $axios } = useNuxtApp();
const toast = useToast();
const userStore = useUserStore();

const handleGoogleFacebook = () => {
  toast.info("Comming soon!");
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
    const user = {
      ...response.data.result.user,
      accessToken: response.data.result.accessToken,
      refreshToken: response.data.result.refreshToken,
    };
    userStore.setUser(user);
    navigateTo("/schedule");

    console.log("Login success, response: ", response);
    toast.success("Login success!");
  } catch (error) {
    console.error("Error during login: ", error);
    toast.error(error.response.data.message);
  }
}
</script>

<style></style>
