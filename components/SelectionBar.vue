<template>
  <div class="pb-4">
    <div class="flex pt-8 gap-3">
      <button
        class="btn text-xl border-cello bg-cello text-sidecar hover:brightness-125"
        @click="$emit('send')"
      >
        تایید ویرایش
      </button>
      <button
        class="btn text-xl border-primary bg-primary text-sidecar hover:brightness-75"
      >
        انصراف
      </button>
    </div>
    <div class="flex flex-col lg:flex-row lg:justify-between gap-8 pt-8">
      <!-- <div class="flex flex-row flex-wrap gap-3 sm:gap-2 text-lg">
        <button
          class="btn sm:text-sm md:text-md hover:text-secondary hover:border-secondary"
        >
          انتخاب تمام {{ title }}
        </button>
        <button
          class="btn sm:text-sm md:text-md enabled:hover:text-primary enabled:hover:border-primary"
          disabled
        >
          عدم نمایش {{ title }} انتخاب شده
        </button>
        <button
          class="btn sm:text-sm md:text-md enabled:hover:text-primary enabled:hover:border-primary"
          disabled
        >
          حذف {{ title }} انتخاب شده
        </button>
      </div> -->
      <button v-if="add" class="btn_edit flex items-center gap-3 text-lg">
        <Lucide-plus />
        <span> افزودن محصول </span>
      </button>
    </div>
  </div>
</template>

<script setup>
const { title, add } = defineProps(["title", "add"]);
</script>

<style scoped></style>
