<script>
export default {
  data() {
    return {
      opened: false,
      pages: [
        {
          displayName: "Posts",
          href: "/",
        },
        {
          displayName: "About",
          href: "/About",
        },
      ],
    };
  },
};
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
        <li v-for="(page, index) in pages" :key="index">
          <NuxtLink :to="page.href"> {{ page.displayName }}</NuxtLink>
        </li>
      </ul>
      <div class="space-y-2 cursor-pointer lg:hidden" @click="opened = !opened">
        <img class="w-8 h-8" src="~/assets/images/burger.png" alt="" />
      </div>
    </nav>
    <nav v-if="opened" class="w-full h-full absolute">
      <ul class="flex flex-col text-center">
        <li
          v-for="(page, index) in pages"
          :key="index"
          v-click-outside="() => (opened = false)"
          @click="opened = false"
        >
          <NuxtLink
            :to="page.href"
            class="bg-white hover:bg-green-500 p-6 block border border-black"
          >
            {{ page.displayName }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
