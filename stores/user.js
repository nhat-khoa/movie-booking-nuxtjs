import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const user = ref({
    id: "",
    email: "",
    fullName: "",
    avatarGoogleUrl: "",
    dateOfBirth: "",
    gender: "",
    phoneNumber: "",
    accessToken: "",
    refreshToken: "",
  });

  const isLoaded = ref(false);

  const loadUserFromLocalStorage = () => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      user.value = JSON.parse(storedUser);
    }
    isLoaded.value = true; // Đánh dấu đã load xong
  };

  const setUser = (newUser) => {
    user.value = newUser;
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const logout = () => {
    user.value = {
      id: "",
      email: "",
      fullName: "",
      avatarGoogleUrl: "",
      dateOfBirth: "",
      gender: "",
      phoneNumber: "",
      accessToken: "",
      refreshToken: "",
    };
    localStorage.removeItem("user");
  };

  return { user, isLoaded, setUser, logout, loadUserFromLocalStorage };
});
