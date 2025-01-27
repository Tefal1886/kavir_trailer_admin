<template>
  <div class="flex flex-col gap-12 w-full pb-12">
    <Search />
    <SelectionBar title="محصولات" add="true" />
    <div class="flex flex-col w-full">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :id="product.id"
        :title="product.name"
        :image="product.aks_kala[0].address"
      />
    </div>
  </div>
</template>

<script setup>
import ProductCard from "~/components/products/ProductCard.vue";

const { data } = await useFetch("/api/products");
const products = data.value;
</script>

<style scoped></style>
