import { useUserStore } from "~/stores/user";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const userStore = useUserStore();
  const { $axios } = useNuxtApp();

  const excludePaths = [
    "/", "/login", "/movie", "/schedule",
    "/price", "/member", "/event", "/rate-movie"
  ];
  if (excludePaths.includes(to.path) || to.path.startsWith('/movie/')) {
    return;
  }
  // Gọi API introspect để verify token
  try {
    await $axios.post("/auth/introspect");
    return;
  } catch (error) {
    userStore.logout();
    return navigateTo("/login");
  }
});

