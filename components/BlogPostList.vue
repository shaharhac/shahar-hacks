<script setup>
const { data: blogPosts } = await useAsyncData("blogPosts", () =>
  queryContent("/").find()
);
</script>

<template>
  <div>
    <section class="articles">
      <div v-for="post in blogPosts" :key="post._path">
        <a :href="post._path">{{ post.title }}</a>
      </div>
    </section>
  </div>
</template>

<style></style>
