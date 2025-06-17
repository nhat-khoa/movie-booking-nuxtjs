import { createI18n } from "vue-i18n";

export default defineNuxtPlugin(async (nuxtApp) => {
  // Import file JSON bằng import() (Dynamic Import)
  const messages = {
    en: (await import("@/locales/en.json")).default,
    vi: (await import("@/locales/vi.json")).default,
  };

  const i18n = createI18n({
    legacy: false, // Bắt buộc dùng `false` để dùng với script setup
    globalInjection: true, // Cho phép dùng trực tiếp `$t()`
    locale: "vi", // Ngôn ngữ mặc định
    fallbackLocale: "en", // Nếu thiếu key sẽ fallback sang en
    messages,
  });

  nuxtApp.vueApp.use(i18n);
});
