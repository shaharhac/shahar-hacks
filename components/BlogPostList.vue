<script setup>
const { data: blogPosts } = await useAsyncData("blogPosts", () =>
  queryContent("/").find()
);
</script>

<template>
  <div>
    <section class="blog-posts">
      <div v-for="(post, index) in blogPosts" :key="post._path">
        post #{{ index + 1 }}<a :href="post._path">{{ post.title }}</a>
      </div>
    </section>
  </div>
</template>

<style></style>
