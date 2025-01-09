<template>
  <div
    class="bg-cello h-[10vh] text-sidecar w-screen fixed top-0 z-50 flex items-center"
  >
    <p class="w-[25vw] text-center">پنل مدیریتی کویر تریلر</p>
    <div class="grow flex items-center justify-end">
      <div ref="tresd" class="transition-all duration-[3s] w-fit">
        <Logo class="w-[26vh] fill-sidecar" />
      </div>
    </div>
    <div class="flex gap-3 w-[25vw] items-center justify-center">
      <p>مصطفی نیکوسیر</p>
      <img
        src="/assets/images/admin.jpg"
        alt="ادمین"
        class="h-[6vh] w-[6vh] rounded-full"
      />
    </div>
  </div>
</template>

<script setup>
const tresd = ref("");
onMounted(() => {
  setTimeout(() => {
    tresd.value.classList.add("move_right");
  }, 1000);
});
</script>

<style scoped>
.move_right {
  @apply translate-x-[calc(50vw-26vh)];
}
</style>
