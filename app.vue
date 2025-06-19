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
<style>
.white-bg {
  background-color: white;
  padding: 20px;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}
</style>
