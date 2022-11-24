<script setup>
const { data: blogPosts } = await useAsyncData("blogPosts", () =>
  queryContent("/").where({ type: "post" }).find()
);

const formatDate = (str) => {
  const date = new Date(str);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};
</script>

<template>
  <div>
    <ul class="flex">
      <li v-for="post in blogPosts" :key="post._path">
        <Card
          :title="post.title"
          :path="post._path"
          :published="formatDate(post.published)"
          :preview="post.preview"
          :tags="post.tags"
          :backgroundImage="post.backgroundImage"
        />
      </li>
    </ul>
  </div>
</template>
