<template>
  <div class="flex items-center gap-1 grow">
    <p v-if="title" class="w-24 sm:w-28 md:w-32">{{ title }} :</p>
    <textarea
      v-if="subject"
      :value="subject"
      class="py-1 px-2 w-20 sm:w-28 md:w-32 h-20 bg-cello bg-opacity-10 border-[1px] border-cello rounded-md text-black outline-none focus:outline-cello outline-offset-0"
    ></textarea>
    <span v-if="subject">:</span>
    <textarea
      name=""
      id=""
      :value="content"
      class="py-1 px-2 bg-cello bg-opacity-10 border-[1px] border-cello rounded-md text-black outline-none focus:outline-cello outline-offset-0 grow h-20"
    ></textarea>
  </div>
</template>

<script setup>
const { title, content, subject } = defineProps([
  "title",
  "content",
  "subject",
]);
</script>

<style scoped></style>
