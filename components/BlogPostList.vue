<script setup>
const { data: blogPosts } = await useAsyncData("blogPosts", () =>
  queryContent("/").find()
);
</script>

<template>
  <div>
    <ul>
      <li v-for="(post, index) in blogPosts" :key="post._path">
        <BlogPostPreviewItem
          :title="post.title"
          :path="post._path"
          :published="new Date()"
          :preview="`this is post number ${index + 1}`"
          :tags="['dev', 'lifestyle']"
        />
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.blog-posts__list {
  padding: 0;
  margin: 0;
}
</style>
