<template>
  <button class="btn_edit h-fit flex items-center justify-between" @click="$emit('showAddWindow')">
    <Lucide-plus />
    <span>{{ title }}</span>
  </button>
</template>

<script setup>
const { title } = defineProps(["title"]);
</script>

<style scoped></style>
