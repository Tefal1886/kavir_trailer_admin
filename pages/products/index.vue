<template>
  <div class="flex flex-col gap-12 w-full pb-12">
    <Search />
    <SelectionBar title="محصولات" add="true" />
    <div class="flex flex-col w-full">
      <ProductCard
        v-for="(product, index) in products"
        :key="index"
        :image="product.icon"
        :title="product.title"
        :id="product.id"
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
