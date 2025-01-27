export default defineEventHandler(async (event) => {
  const { id } = event.context.params;
  const products = await $fetch(`https://api.kavirtrailer.com/product/${id}`);
    const data = products;
    return data;

  return data;
});
