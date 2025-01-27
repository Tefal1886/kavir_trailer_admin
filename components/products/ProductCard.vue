<template>
  <div class="flex justify-between items-center w-full border-b-[1px] border-cello py-3">
    <div class="flex items-center justify-between gap-2 sm:gap-4">
      <CheckIcon :id="id" />
      <img :src="`https://kavirtrailer.com/images/products/${image}`" :alt="title" class="w-20 rounded-sm" />
      <h2 class="font-semibold">{{ title }}</h2>
    </div>
    <div class="flex flex-col sm:flex-row items-center gap-1 sm:gap-1.5 pr-2">
      <NuxtLink :to="`/products/${id}`" class="btn_edit w-[75px] sm:w-fit text-center">
        ویرایش
      </NuxtLink>
      <button class="btn_disable sm:w-fit">عدم نمایش</button>
      <button class="btn_del w-[75px] sm:w-fit text-center">حذف</button>
    </div>
  </div>
</template>

<script setup>
const { id, image, title } = defineProps(["id", "image", "title"]);
</script>

<style scoped></style>
