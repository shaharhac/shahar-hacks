<script setup>
const formatDate = (str) => {
  const date = new Date(str);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};
</script>

<template>
  <article>
    <ContentDoc v-slot="{ doc }">
      <ContentRenderer
        :value="doc"
        class="mt-4 prose max-w-none prose-xl prose-slate dark:prose-invert"
      />
    </ContentDoc>
  </article>
</template>
