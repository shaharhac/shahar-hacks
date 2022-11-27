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
      class="py-10 mb-12 flex justify-between"
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
        <div class="w-8 h-0.5 bg-gray-600"></div>
        <div class="w-8 h-0.5 bg-gray-600"></div>
        <div class="w-8 h-0.5 bg-gray-600"></div>
      </div>
    </nav>
    <nav v-show="opened" class="w-full h-full -mt-12 absolute">
      <ul class="flex flex-col text-center">
        <li v-for="(page, index) in pages" :key="index">
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
