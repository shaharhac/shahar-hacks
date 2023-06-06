<script setup>
import { computed } from "vue";

const colorMode = useColorMode();
const dark = computed(() => {
  return (
    (colorMode.preference === "system" && colorMode.value === "dark") ||
    colorMode.preference === "dark"
  );
});

const imgSrc = computed(() => {
  return dark.value ? "/icons/lightbulb-on.png" : "/icons/lightbulb-off.png";
});

const toggle = () => {
  const currentColor =
    colorMode.preference === "system" ? colorMode.value : colorMode.preference;

  colorMode.preference = currentColor === "dark" ? "light" : "dark";
};
</script>

<template>
  <img class="cursor-pointer w-5 h-5" :src="imgSrc" @click="toggle" />
</template>
