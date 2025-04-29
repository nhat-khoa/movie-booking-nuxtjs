import { defineNuxtPlugin } from "#app";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Toast, {
        position: "top-right", // Vị trí hiển thị
        timeout: 5000, // 5 giây tự tắt
        closeOnClick: true, // Đóng khi click vào
        pauseOnHover: true, // Dừng khi hover vào
        draggable: true, // Có thể kéo
    });
});
