<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    published: {
      type: String,
      required: true,
    },
    preview: {
      type: String,
    },
    tags: {
      type: Array,
      default: () => [],
    },
    path: {
      type: String,
      required: true,
    },
    backgroundImage: {
      type: String,
    },
  },
  setup(props) {},
};
</script>

<template>
  <div class="max-w-lg mx-auto">
    <div class="bg-white shadow-md border border-gray-200 rounded-lg mb-5">
      <nuxt-link :to="path">
        <img class="rounded-t-lg" :src="backgroundImage" alt="" />
      </nuxt-link>
      <div class="p-5">
        <nuxt-link :to="path">
          <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">
            {{ title }}
          </h5>
        </nuxt-link>
        <p class="font-normal text-gray-700 mb-3 h-4.5">
          {{ preview }}
        </p>
        <div class="flex mb-3">
          <Tag v-for="tag in tags" :key="tag" :name="tag" />
        </div>
        <nuxt-link
          :to="path"
          class="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
        >
          Read more
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
