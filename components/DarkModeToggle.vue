<script setup>
import { ref, computed } from "vue";

const emit = defineEmits(["toggle"]);
const lightMode = ref(true);

const imgSrc = computed(() => {
  return lightMode.value
    ? "/icons/lightbulb-off.png"
    : "/icons/lightbulb-on.png";
});

const toggle = () => {
  lightMode.value = !lightMode.value;
  emit("toggle", lightMode.value);
};
</script>

<template>
  <img class="cursor-pointer w-5 h-5" :src="imgSrc" @click="toggle" />
</template>
