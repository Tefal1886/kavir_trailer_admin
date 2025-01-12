export default defineEventHandler(async (event) => {
  const { id } = event.context.params;
  const products = await $fetch("/api/products");
  const product = products.filter((product) => product.id == id);
  const data = product[0];

  return data;
});
