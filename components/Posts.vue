<script setup>
const { data: blogPosts } = await useAsyncData("blogPosts", () =>
  queryContent("/").where({ type: "post" }).find()
);

const hasPosts = computed(() => Boolean(blogPosts.value?.length));

const formatDate = (str) => {
  const date = new Date(str);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};
</script>

<template>
  <div>
    <div v-if="!hasPosts">
      <NoPostsBanner />
    </div>
    <ul class="flex content-center justify-center flex-col gap-8" v-else>
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
