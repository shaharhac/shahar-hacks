<script setup>
import { ref, computed } from "vue";

const opened = ref(false);
const actions = ref([
  {
    displayName: "Posts",
    href: "/",
  },
  {
    displayName: "About",
    href: "/about",
  },
  {
    component: resolveComponent("DarkModeToggle"),
  },
]);

const colorMode = useColorMode();
const dark = computed(() => {
  return (
    (colorMode.preference === "system" && colorMode.value === "dark") ||
    colorMode.preference === "dark"
  );
});

const burgerSrc = computed(() => {
  return dark.value ? "/icons/colored-burger.png" : "/icons/burger.png";
});
</script>

<template>
  <div class="relative">
    <nav
      class="pt-10 pb-5 flex justify-between items-center"
      role="navigation"
      aria-label="main navigation"
    >
      <NuxtLink to="/" class="min-w-fit">
        <h1 class="text-xl font-burtons">SHAHAR HACKS</h1>
      </NuxtLink>
      <ul class="flex items-center gap-8 invisible lg:visible">
        <li v-for="(action, index) in actions" :key="index">
          <NuxtLink v-if="action.href" :to="action.href">
            {{ action.displayName }}</NuxtLink
          >
          <div v-else-if="action.component">
            <component :is="action.component" />
          </div>
        </li>
      </ul>
      <div class="flex flex-row gap-5 cursor-pointer lg:hidden">
        <DarkModeToggle class="w-8 h-8" />
        <img
          class="w-8 h-8"
          :src="burgerSrc"
          alt="hamburger menu"
          @click="opened = !opened"
        />
      </div>
    </nav>
    <nav v-if="opened" class="w-full h-full mb-10">
      <ul
        class="flex flex-col text-center"
        v-click-outside="() => (opened = false)"
      >
        <li
          v-for="(action, index) in actions"
          :key="index"
          @click="opened = false"
        >
          <NuxtLink
            v-if="action.href"
            :to="action.href"
            class="p-3 block dark:text-white hover:text-gray-600 dark:hover:text-gray-200"
          >
            {{ action.displayName }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
