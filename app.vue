<script setup>
const colorMode = useColorMode();
const dark = computed(
  () =>
    (colorMode.preference === "system" && colorMode.value === "dark") ||
    colorMode.preference === "dark"
);
</script>

<template>
  <div :class="{ dark }" class="w-screen">
    <div class="dark:bg-gray-800 min-h-screen h-max">
      <div
        class="bg-white max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto h-max dark:bg-gray-800 dark:text-white"
      >
        <Navbar />
        <NuxtPage />
      </div>
    </div>
  </div>
</template>
