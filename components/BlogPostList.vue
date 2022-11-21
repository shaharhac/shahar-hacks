<script setup>
const { data: blogPosts } = await useAsyncData("blogPosts", () =>
  queryContent("/").find()
);

const formatDate = (str) => {
  console.log({ str });
  const date = new Date(str);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};
</script>

<template>
  <div>
    <ul>
      <li v-for="(post, index) in blogPosts" :key="post._path">
        <BlogPostPreviewItem
          :title="post.title"
          :path="post._path"
          :published="formatDate(post.published)"
          :preview="`this is post number ${index + 1}`"
          :tags="post.tags"
          :backgroundImage="post.backgroundImage"
        />
      </li>
    </ul>
  </div>
</template>
