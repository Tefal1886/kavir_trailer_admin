<template>
  <div class="flex items-center gap-1 grow">
    <p v-if="subject" class="w-24 sm:w-28 md:w-32">{{ subject }} :</p>
    <input
      v-if="title"
      :value="title"
      class="py-1 px-2 bg-cello bg-opacity-10 border-[1px] border-cello rounded-md text-black outline-none focus:outline-cello outline-offset-0 w-24 sm:w-28"
    />
    <span v-if="title">:</span>
    <input
      type="text"
      :value="content"
      class="py-1 px-2 bg-cello bg-opacity-10 border-[1px] border-cello rounded-md text-black outline-none focus:outline-cello outline-offset-0 grow w-[calc(100%-96px)] sm:w-[calc(100%-112px)] md:w-[calc(100%-128px)]"
    />
  </div>
</template>

<script setup>
const { title, subject, content } = defineProps([
  "title",
  "subject",
  "content",
]);
</script>

<style scoped></style>
