<template>
  <div class="flex flex-col w-full gap-6 pb-12 items-stretch">
    <h2 class="pb-6">
      ویرایش محصول / <span class="font-semibold">{{ product.title }}</span>
    </h2>
    <SelectionBar title="موارد" />

    <!-- معرفی محصول -->
    <div class="container border-t-2 border-cello">
      <h2 class="header">معرفی محصول :</h2>
      <ProductItem subject="نام محصول" :content="product.title" />
      <ProductLongItem title="متن معرفی" :content="product.description" />
      <ProductLongItem title="توضیحات" :content="product.explaination" />
    </div>

    <!-- تصاویر -->
    <div class="container gap-0 border-t-2 border-cello">
      <h2 class="header">تصاویر :</h2>
      <div class="py-6 flex flex-col gap-4 w-full">
        <div class="flex w-60 justify-between">
          <p>تصویر مدل تریلر :</p>
          <button class="btn_disable">آپلود فایل</button>
        </div>
        <div class="w-full md:w-[calc(100%-270px)]">
          <img
            :src="product.model"
            alt="مدل"
            title="مدل تریلر"
            class="w-full"
          />
        </div>
      </div>
      <div class="flex flex-col gap-4 py-6 border-y-[1px] border-cello">
        <div class="flex w-60 justify-between">
          <p class="pb-4">تصویر آیکون تریلر :</p>
          <button class="btn_disable">آپلود فایل</button>
        </div>
        <img :src="product.icon" alt="آیکون" class="w-32 rounded-md" />
      </div>
      <div class="flex flex-col gap-4 py-6">
        <div class="flex w-60 justify-between">
          <p class="pb-4">تصاویر تریلر :</p>
          <button class="btn_disable">آپلود فایل</button>
        </div>
        <div class="flex flex-wrap gap-2">
          <div
            v-for="(image, index) in product.images"
            :key="index"
            class="relative"
          >
            <lucide-x
              class="cursor-pointer absolute w-4 h-4 top-0 right-0 z-20 bg-sidecar text-primary border-[1px] border-primary rounded-tr-md hover:bg-red-200 late"
            />
            <img :src="image" class="w-28 rounded-md" />
          </div>
        </div>
      </div>
    </div>

    <!-- مشخصات فنی -->
    <div class="container border-t-2 border-cello">
      <div class="flex items-center justify-between">
        <h2 class="header">مشخصات فنی :</h2>
        <AddButton title="افزودن مشخصات جدید" />
      </div>
      <div class="container gap-7">
        <div
          v-for="(
            technicalSpecification, index
          ) in product.TechnicalSpecifications"
          :key="index"
          class="flex flex-col lg:flex-row lg:items-center w-full gap-1 lg:gap-3"
        >
          <div class="flex gap-2 md:gap-4 lg:grow">
            <CheckIcon :id="`tech${index}`" />
            <ProductLongItem
              :subject="technicalSpecification.name"
              :content="technicalSpecification.description"
            />
          </div>
          <div class="flex lg:flex-col gap-2 justify-end">
            <button class="btn_disable min-w-fit">عدم نمایش</button>
            <button class="btn_del">حذف</button>
          </div>
        </div>
      </div>
    </div>

    <!-- متعلقات -->
    <div class="container border-t-2 border-cello">
      <div class="flex items-center justify-between">
        <h2 class="header">متعلقات :</h2>
        <AddButton title="افزودن آپشن جدید" />
      </div>
      <div class="container gap-7">
        <div
          v-for="(accessory, index) in product.accessories"
          :key="index"
          class="flex flex-col lg:flex-row lg:gap-3 gap-1 w-full"
        >
          <div class="flex gap-2 items-center w-full md:gap-4">
            <CheckIcon :id="`acc${index}`" />
            <input
              type="text"
              :value="accessory"
              class="py-1 px-2 bg-cello bg-opacity-10 border-[1px] border-cello rounded-md text-black outline-none focus:outline-cello outline-offset-0 grow"
            />
          </div>
          <div class="flex gap-2 justify-end">
            <button class="btn_disable min-w-fit">عدم نمایش</button>
            <button class="btn_del">حذف</button>
          </div>
        </div>
      </div>
    </div>

    <!-- جدول ویژگی ها -->
    <div class="container border-t-2 border-cello">
      <div class="flex items-center justify-between">
        <h2 class="header">جدول ویژگی ها :</h2>
        <AddButton title="افزودن ویژگی جدید" />
      </div>
      <div class="container gap-7">
        <div
          v-for="(feature, index) in product.features"
          :key="index"
          class="flex flex-col lg:flex-row gap-1 lg:gap-3 w-full"
        >
          <div class="flex items-center gap-2 md:gap-4 w-full">
            <CheckIcon :id="`feat${index}`" />
            <ProductItem :title="feature.title" :content="feature.amount" />
          </div>
          <div class="flex gap-2 justify-end">
            <button class="btn_disable min-w-fit">عدم نمایش</button>
            <button class="btn_del">حذف</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductItem from "~/components/products/ProductItem.vue";
import ProductLongItem from "~/components/products/ProductLongItem.vue";

const { id } = useRoute().params;
const url = `/api/products/${id}`;
const { data } = await useFetch(url);
const product = data.value;
</script>

<style scoped></style>
