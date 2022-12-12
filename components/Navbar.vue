<script>
export default {
  data() {
    return {
      opened: false,
      actions: [
        {
          displayName: "Posts",
          href: "/",
        },
        {
          displayName: "About",
          href: "/About",
        },
        {
          component: resolveComponent("DarkModeToggle"),
          on: {
            toggle: this.toggle,
          },
        },
      ],
    };
  },
  methods: {
    toggle(value) {
      const [mode, setMode] = useMode();
      setMode(value);
    },
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
        <li v-for="(action, index) in actions" :key="index">
          <NuxtLink v-if="action.href" :to="action.href">
            {{ action.displayName }}</NuxtLink
          >
          <div v-else-if="action.component">
            <component :is="action.component" @toggle="action.on.toggle" />
          </div>
        </li>
      </ul>
      <div class="space-y-2 cursor-pointer lg:hidden" @click="opened = !opened">
        <img class="w-8 h-8" src="~/assets/images/burger.png" alt="" />
      </div>
    </nav>
    <nav v-if="opened" class="w-full h-full absolute">
      <ul class="flex flex-col text-center">
        <li
          v-for="(action, index) in actions"
          :key="index"
          v-click-outside="() => (opened = false)"
          @click="opened = false"
        >
          <NuxtLink
            :to="action.href"
            class="bg-white hover:bg-green-500 p-6 block border border-black dark:border-white dark:bg-gray-700"
          >
            {{ action.displayName }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
