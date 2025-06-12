<template>
  <div class="text-center text-2xl font-bold">
    Thời gian còn lại: {{ minutes }}:{{
      seconds < 10 ? "0" + seconds : seconds
    }}
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const totalTime = ref(0.1 * 60); // 5 phút = 300 giây
const minutes = computed(() => Math.floor(totalTime.value / 60));
const seconds = computed(() => totalTime.value % 60);

let timer = null;

onMounted(() => {
  timer = setInterval(() => {
    if (totalTime.value > 0) {
      totalTime.value--;
    } else {
      clearInterval(timer);
      router.push("/schedule");
    }
  }, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>
