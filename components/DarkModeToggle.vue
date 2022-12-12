<script setup>
import { ref, computed } from "vue";

const emit = defineEmits(["toggle"]);
const lightMode = ref(true);

const imgSrc = computed(() => {
  return lightMode.value ? "/icons/half-moon.png" : "/icons/sun.png";
});

const toggle = () => {
  lightMode.value = !lightMode.value;
  emit("toggle", lightMode.value);
};
</script>

<template>
  <img class="cursor-pointer w-4 h-4" :src="imgSrc" @click="toggle" />
</template>
