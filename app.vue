<script setup>
const [darkMode] = useDarkMode();
</script>

<template>
  <div :class="{ dark: darkMode }" class="w-screen h-max">
    <div class="dark:bg-gray-800 h-full">
      <div
        class="bg-white max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto dark:bg-gray-800 dark:text-white"
      >
        <Navbar />
        <NuxtPage />
      </div>
    </div>
  </div>
</template>
