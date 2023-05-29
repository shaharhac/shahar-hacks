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

const [darkMode] = useDarkMode();
const burgerSrc = computed(() => {
  return darkMode.value ? "/icons/colored-burger.png" : "/icons/burger.png";
});
</script>

<template>
  <div class="relative">
    <nav
      class="py-10 flex justify-between items-center"
      role="navigation"
      aria-label="main navigation"
    >
      <NuxtLink to="/">
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
      <div class="space-y-2 cursor-pointer lg:hidden" @click="opened = !opened">
        <img class="w-8 h-8" :src="burgerSrc" alt="hamburger menu" />
      </div>
    </nav>
    <nav v-if="opened" class="w-full h-full absolute">
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
            class="bg-white hover:bg-green-500 p-6 block border border-black dark:border-white dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            {{ action.displayName }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
