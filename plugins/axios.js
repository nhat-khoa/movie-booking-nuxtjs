import axios from "axios";
import { useToast } from "vue-toastification";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const toast = useToast();
  const instance = axios.create({
    baseURL: config.public.apiBase,
  });

  instance.interceptors.request.use(
    (config) => {
      // const userStore = useUserStore();

      // // Load lại từ localStorage nếu chưa load
      // if (!userStore.isLoaded) {
      //   userStore.loadUserFromLocalStorage();
      // }

      // const token = userStore.user.access_token;
      // if (token) {
      //   config.headers.Authorization = `Bearer ${token}`;
      // }
      // else {
      //   delete config.headers.Authorization;
      // }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // // Auto refresh token nếu hết hạn
  // instance.interceptors.response.use(
  //   (response) => response,
  //   async (error) => {
  //     const config = useRuntimeConfig();
  //     const originalRequest = error.config;
  //     const userStore = useUserStore();
  //     if (
  //       error.response?.status === 401 &&
  //       !originalRequest._retry &&
  //       userStore.user.refresh_token
  //     ) {
  //       originalRequest._retry = true;

  //       try {
  //         const res = await $fetch(`${config.public.apiBase}/api/auth/token/refresh/`, {
  //           method: "POST",
  //           body: {
  //             refresh: userStore.user.refresh_token,
  //           },
  //         });

  //         // Lưu token mới
  //         userStore.setUser({
  //           ...userStore.user,
  //           access_token: res.access,
  //         });

  //         // Gán token mới vào request cũ
  //         originalRequest.headers.Authorization = `Bearer ${res.access}`;
  //         return instance(originalRequest);
  //       } catch (refreshErr) {
  //         if (originalRequest.url.includes("/api/auth/verify/"))
  //           return Promise.reject(error);

  //         userStore.logout();
  //         toast.error("Session expired. Please login again.");
  //         return navigateTo("/login", { replace: true });
  //       }
  //     }

  //     return Promise.reject(error);
  //   }
  // );


  return {
    provide: {
      axios: instance,
    },
  };
});
