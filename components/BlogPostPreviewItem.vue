<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    published: {
      type: Date,
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
    <section class="blog-post">
      <time class="blog-post__time">{{ formatPublishDate }}</time>
      <h3 class="title">
        <a :href="path" class="blog-post__link">{{ title }}</a>
      </h3>
      <p v-if="preview" class="blog-post__preview">{{ preview }}</p>
      <nuxt-link class="button blog-post__button" :to="path">
        Read More
      </nuxt-link>
    </section>
  </div>
</template>

<style lang="scss">
.blog-post {
  padding-bottom: 2.5rem;
  margin-bottom: 2.5rem;
  border-bottom: 1px solid white;
}

a.blog-post__button {
  display: inline-block;
  padding: 0.5rem 1rem;
  text-decoration: none;
}

.blog-post__preview {
  margin-top: 0;
  @apply mb-3;
  font-size: 1.2rem;
}

.blog-post__link {
  font-weight: 700;
  color: #fff;
  &:hover {
    text-decoration: underline;
    color: #fff;
  }
}

.blog-post__time {
  font-weight: 500;
}

.blog-post .title {
  margin-top: 0.5rem;
  margin-bottom: 0.75rem;
  color: #fff;
  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}

.button {
  font-weight: 500;
  border: 1px solid #22aaff;
  border-radius: 4px;
  color: #22aaff;
  font-size: 0.9rem;
  padding: 0.3rem 0.6rem;
  text-transform: uppercase;
  box-shadow: 0 0;
  transition: background-color 0.2s ease-in, color 0.2s ease-in;
}

.button:hover {
  background-color: primary-color;
  color: #fff;
  text-decoration: none;
}

.tag-list {
  list-style: none;
  padding-left: 0;
  display: flex;
  margin-bottom: 25px;
}
.tag-list__item {
  margin-left: 10px;
}
.tag-list__item:first-child {
  margin-left: 0;
}
.tag-list__btn {
  padding: 5px;
  font-size: 0.9rem;
  background-color: #fff;
}
</style>
