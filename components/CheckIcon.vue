<template>
  <div class="mt-2 relative">
    <input
      type="checkbox"
      name=""
      :id="`itemSelected${id}`"
      class="peer opacity-0"
    />
    <label
      :for="`itemSelected${id}`"
      class="absolute -top-[.5px] -right-[3px] h-5 w-5 leading-3 text-sidecar cursor-pointer border-2 border-cello rounded-sm peer-checked:bg-cello text-transparent peer-checked:text-secondary transition-all duration-75"
    >
      <Lucide-check
        class="absolute w-8 h-8 -top-3 -right-3 text-inherit brightness-110"
      />
    </label>
  </div>
</template>

<script setup>
const { index } = defineProps(["id"]);
</script>

<style scoped></style>
