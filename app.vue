<script setup>
const [lightMode] = useMode();
</script>

<template>
  <div
    class="bg-white max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto"
    :class="{ dark: !lightMode }"
  >
    <Navbar />
    <NuxtPage />
  </div>
</template>
