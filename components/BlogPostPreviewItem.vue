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
  setup(props) {
    const formatPublishDate = computed(() => {
      const dateFormat = new Date(props.published);
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return dateFormat.toLocaleDateString("en-US", options);
    });

    return {
      formatPublishDate,
    };
  },
};
</script>

<template>
  <div>
    <section>
      <time>{{ published }}</time>
      <img :src="backgroundImage" alt="" />
      <ul>
        <li v-for="tag in tags" :key="tag">{{ tag }}</li>
      </ul>
      <h3>
        <a :href="path">{{ title }}</a>
      </h3>
      <p v-if="preview">{{ preview }}</p>
      <nuxt-link :to="path"> Read More </nuxt-link>
    </section>
  </div>
</template>
