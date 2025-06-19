import axios from "axios";
import { useToast } from "vue-toastification";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const toast = useToast();
  const instance = axios.create({
    baseURL: config.public.apiBase,
  });

  // REQUEST Interceptor: Gắn token nếu có
  instance.interceptors.request.use(
    (config) => {
      const userStore = useUserStore();

      if (!userStore.isLoaded) {
        userStore.loadUserFromLocalStorage();
      }

      const token = userStore.user?.accessToken;

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      } else {
        delete config.headers.Authorization;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // RESPONSE Interceptor: Xử lý lỗi toàn cục
  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const userStore = useUserStore();

      if (error.response?.status === 401) {
        toast.error("Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.");
        userStore.logout();
      }

      if (error.response?.status === 403) {
        toast.error("Không có quyền truy cập.");
      }

      if (error.response?.status >= 500) {
        toast.error("Lỗi hệ thống. Vui lòng thử lại sau.");
      }

      return Promise.reject(error);
    }
  );

  return {
    provide: {
      axios: instance,
    },
  };
});

