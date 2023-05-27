<script setup></script>

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
