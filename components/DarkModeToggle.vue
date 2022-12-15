<script setup>
import { ref, computed } from "vue";

const emit = defineEmits(["toggle"]);
const [darkMode, setDarkMode] = useDarkMode();

const imgSrc = computed(() => {
  return darkMode.value
    ? "/icons/lightbulb-on.png"
    : "/icons/lightbulb-off.png";
});

const toggle = () => {
  setDarkMode(!darkMode.value);
};
</script>

<template>
  <img class="cursor-pointer w-5 h-5" :src="imgSrc" @click="toggle" />
</template>
