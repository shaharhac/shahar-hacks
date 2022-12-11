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
  <div>
    <nuxt-link
      :to="path"
      class="flex flex-col items-center bg-white border rounded-lg w-full shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        :src="backgroundImage"
        alt=""
      />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ title }}
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {{ preview }}
        </p>
        <div class="flex mb-3">
          <Tag v-for="tag in tags" :key="tag" :name="tag" />
        </div>
      </div>
    </nuxt-link>
  </div>
</template>
