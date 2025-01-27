<template>
  <div class="flex flex-col lg:flex-row gap-3 items-end bg-yellow-400 bg-opacity-20 p-5 rounded-md">
    <div class="flex flex-col lg:flex-row gap-2 lg:gap-4 w-full text-secondary lg:items-end">
      <div class="flex flex-col">
        <label class="pb-1 font-semibold text-lg">عنوان:</label>
        <input type="text" class="border-2 border-secondary p-1 rounded-md bg-secondary bg-opacity-15 text-gray-800"
          v-model="title" @input="onInputTiTle">
      </div>
      <div class="flex flex-col grow">
        <label class="pb-1 font-semibold text-lg">توضیحات:</label>
        <textarea type="text"
          class="border-2 border-secondary p-1 rounded-md bg-secondary bg-opacity-15 text-gray-800 w-full h-9"
          v-model="content" @input="onInputContent"></textarea>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <button class="text-primary hover:scale-110 delaying" @click="$emit('hide')"><lucide-x /></button>
      <button class=" btn_edit bg-secondary w-16 text-lg hover:bg-secondary hover:brightness-110"
        @click="$emit('confirm')">
        تایید
      </button>
    </div>
  </div>
</template>

<script setup>
const { index } = defineProps(['index']);
const title = ref('');
const content = ref('');
const emit = defineEmits(['title-changed', 'content-changed']);

const onInputTiTle = () => {
  emit('title-changed', title.value);
};
const onInputContent = () => {
  emit('content-changed', content.value);
};

</script>

<style scoped></style>