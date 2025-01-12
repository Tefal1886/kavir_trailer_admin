<template>
  <div>
    <div
      class="flex items-center justify-around bg-cello h-16 md:h-[10vh] text-sidecar w-screen fixed top-0 z-50 px-4 md:px-0"
    >
      <div
        class="w-[50vw] sm:w-[40vw] md:w-[30%] lg:w-1/5 xl:w-[15%] flex items-center justify-between md:justify-around"
      >
        <lucide-menu
          @click="$emit('toggleSidebar')"
          v-if="!toggle"
          class="lg:hidden menu"
        />
        <lucide-x
          @click="$emit('toggleSidebar')"
          v-if="toggle"
          class="lg:hidden menu"
        />
        <p class="sm:text-lg">پنل مدیریتی کویر تریلر</p>
      </div>
      <div class="grow flex items-center justify-end">
        <div ref="logo" class="transition-all duration-[5s] w-fit">
          <Logo class="w-[25vw] md:w-[26vh] fill-sidecar" />
        </div>
      </div>
      <div class="hidden md:flex gap-3 w-[25vw] items-center justify-center">
        <p>مصطفی نیکوسیر</p>
        <img
          src="/assets/images/admin.jpg"
          alt="ادمین"
          class="h-[6vh] w-[6vh] rounded-full"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const { toggle } = defineProps(["toggle"]);

// move the car to the right
const logo = ref("");
onMounted(() => {
  setTimeout(() => {
    logo.value.classList.add("move_right");
  }, 1000);
});
</script>

<style scoped>
.move_right {
  @apply md:translate-x-[calc(45vw-26vh)] lg:translate-x-[calc(55vw-26vh)] xl:translate-x-[calc(60vw-26vh)];
}

@keyframes showMenuIcon {
  0% {
    opacity: 0%;
  }
  100% {
    opacity: 100;
  }
}
.menu {
  animation: showMenuIcon 0.3s;
  animation-fill-mode: both;
}
</style>
