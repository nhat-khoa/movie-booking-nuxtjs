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
      const userStore = useUserStore();

      // Load lại từ localStorage nếu chưa load
      if (!userStore.isLoaded) {
        userStore.loadUserFromLocalStorage();
      }

      const token = userStore.user.accessToken;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      else {
        delete config.headers.Authorization;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return {
    provide: {
      axios: instance,
    },
  };
});
