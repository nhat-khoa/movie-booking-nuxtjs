<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
import { onMounted } from "vue";

onMounted(async () => {
  if (typeof global === "undefined") {
    window.global = window;
  }
});
</script>
