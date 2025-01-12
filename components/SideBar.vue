<template>
  <div
    class="flex w-[70vw] sm:w-[50vw] md:w-[30vw] lg:w-[20%] xl:w-[15%] bg-cello bg-center h-[calc(100vh-64px)] md:h-[90vh] fixed -right-full lg:right-0 top-16 md:top-[10vh] z-50 border-t-[1px] border-sidecar text-sidecar text-lg py-8 px-5 flex-col gap-4 late"
    :class="{ showSidebar: toggle }"
  >
    <div class="flex md:hidden gap-3 w-full items-center justify-center pb-8">
      <p>مصطفی نیکوسیر</p>
      <img
        src="/assets/images/admin.jpg"
        alt="ادمین"
        class="h-[6vh] w-[6vh] rounded-full"
      />
    </div>
    <NuxtLink to="/" class="side-icon">داشبورد</NuxtLink>
    <NuxtLink to="/menu" class="side-icon">منو</NuxtLink>
    <NuxtLink to="/main" class="side-icon">صفحه اصلی</NuxtLink>
    <NuxtLink to="/aboutus" class="side-icon">درباره ما</NuxtLink>
    <NuxtLink to="/contactus" class="side-icon">ارتباط با ما</NuxtLink>
    <NuxtLink to="/products" class="side-icon">محصولات</NuxtLink>
    <button
      class="flex gap-4 pt-4 mt-6 w-full justify-center text-lg items-center border-t-[1px] border-sidecar hover:text-primary late"
    >
      <p>خروج</p>
      <lucide-log-out />
    </button>
  </div>
</template>
<script setup>
const { toggle } = defineProps(["toggle"]);
</script>

<style scoped>
.showSidebar {
  @apply right-0;
}
</style>
