<script setup>
const formatDate = (str) => {
  const date = new Date(str);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};
</script>

<template>
  <div>
    <ContentDoc v-slot="{ doc }">
      <h1>{{ doc.title }}</h1>
      <h2>{{ formatDate(doc.published) }}</h2>
      <ContentRenderer :value="doc" />
    </ContentDoc>
  </div>
</template>
