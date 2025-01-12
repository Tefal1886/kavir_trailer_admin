<template>
  <div class="relative bg-sidecar w-screen">
    <Navbar @toggle-sidebar="toggleMenu" :toggle="toggle" />
    <div class="flex w-full">
      <SideBar :toggle="toggle" />
      <div
        class="h-[calc(100vh-64px)] md:h-[90vh] overflow-y-auto w-full lg:w-[80%] xl:w-[85vw] mt-16 md:mt-[10vh] pt-10 lg:mr-[20vw] xl:mr-[15vw] px-7 text-cello"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
const toggle = ref(false);
const toggleMenu = () => {
  toggle.value = !toggle.value;
};
</script>

<style>
.router-link-active {
  @apply bg-sidecar text-cello;
}
</style>
