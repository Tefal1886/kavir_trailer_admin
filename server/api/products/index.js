export default defineEventHandler(async (event) => {
    const products = await $fetch("https://api.kavirtrailer.com/products");
    const data = products;
    return data;
  });
  