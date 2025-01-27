<template>
  <div class="flex flex-col w-full gap-6 pb-12 items-stretch">
    <h2 class="pb-6">
      ویرایش محصول /
      <span class="font-semibold">{{ product.name }}</span>
    </h2>
    <SelectionBar title="موارد" @send="sendData" />

    <!-- معرفی محصول -->
    <div class="container border-t-2 border-cello">
      <h2 class="header">معرفی محصول :</h2>
      <div class="input_container">
        <p class="input_subject">نام محصول:</p>
        <input type="text" v-model="product.name" class="input_content" :class="{
          data_changed: product.name !== originalProduct.name,
        }" />
      </div>
      <div class="input_container">
        <p class="input_subject">متن معرفی:</p>
        <textarea v-model="product.sharh_kotah" class="input_content h-20" :class="{
          data_changed: product.sharh_kotah !== originalProduct.sharh_kotah,
        }"></textarea>
      </div>
      <div class="input_container">
        <p class="input_subject">توضیحات:</p>
        <textarea v-model="product.tozihat" class="input_content h-20" :class="{
          data_changed: product.tozihat !== originalProduct.tozihat,
        }"></textarea>
      </div>
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
          <img :src="`https://kavirtrailer.com/images/products/${product.aks_asli}`" alt="مدل" title="مدل تریلر"
            class="w-full" />
        </div>
      </div>
      <div class="flex flex-col gap-4 py-6 border-y-[1px] border-cello">
        <div class="flex w-60 justify-between">
          <p class="pb-4">تصویر آیکون تریلر :</p>
          <button class="btn_disable">آپلود فایل</button>
        </div>
        <img :src="`https://kavirtrailer.com/images/products/${product.aks_label}`" alt="آیکون"
          class="w-32 rounded-md" />
      </div>
      <div class="flex flex-col gap-4 py-6">
        <div class="flex w-60 justify-between">
          <p class="pb-4">تصاویر تریلر :</p>
          <button class="btn_disable">آپلود فایل</button>
        </div>
        <div class="flex flex-wrap gap-2">
          <div v-for="image in product.aks_kala" :key="image.id" class="relative">
            <lucide-x
              class="cursor-pointer absolute w-4 h-4 top-0 right-0 z-20 bg-sidecar text-primary border-[1px] border-primary rounded-tr-md hover:bg-red-200 late" />
            <img :src="`https://kavirtrailer.com/images/products/${image.address}`" class="w-28 rounded-md" />
          </div>
        </div>
      </div>
    </div>

    <!-- مشخصات فنی -->
    <div class="container border-t-2 border-cello">
      <div class="flex items-center justify-between">
        <h2 class="header">مشخصات فنی :</h2>
        <AddButton title="افزودن مشخصات جدید" @showAddWindow="showAdd(0)" />
      </div>
      <AddItem v-if="addWin[0]"
        @hide="hideAdd(0)"
        @title-changed="(value) => {newItems[0] = value;}"
        @content-changed="(value) => {newItems[1] = value;}"
        @confirm="confirmNew(0, 'list_moshakhasat_fani', newItems[1], newItems[0])"
      />
      <div class="container gap-7">
        <div
          v-for="(technical, index) in product.list_moshakhasat_fani"
          :key="technical.id"
          class="flex flex-col lg:flex-row lg:items-center w-full gap-1 lg:gap-3">
          <div class="flex gap-2 md:gap-4 lg:grow">
            <CheckIcon :id="`tech${technical.id}`" />
            <div class="input_container">
              <textarea
                v-model="technical.title"
                class="input_title"
                :class="{ data_changed: checkInput(index,'list_moshakhasat_fani',technical,'title') }">
              </textarea>
              <span>:</span>
              <textarea
                v-model="technical.content"
                class="input_content h-20"
                :class="{ data_changed: checkInput(index, 'list_moshakhasat_fani', technical,'content') }">
              </textarea>
            </div>
          </div>
          <div class="flex lg:flex-col gap-2 justify-end">
            <button class="btn_disable min-w-fit">عدم نمایش</button>
            <button
              @click="deleteItem(technical.id, 'list_moshakhasat_fani')"
              class="btn_del">حذف</button>
          </div>
        </div>
      </div>
    </div>

    <!-- متعلقات -->
    <div class="container border-t-2 border-cello">
      <div class="flex items-center justify-between">
        <h2 class="header">متعلقات :</h2>
        <AddButton title="افزودن آپشن جدید" @showAddWindow="showAdd(1)" />
      </div>

      <div
        v-if="addWin[1]"
        class="flex flex-col lg:flex-row gap-3 items-end bg-yellow-400 bg-opacity-20 p-5 rounded-md">
        <div class="flex flex-col text-secondary w-full grow">
          <label class="pb-1 font-semibold text-lg">توضیحات:</label>
          <textarea
            type="text"
            v-model="newItems[2]"
            class="border-2 border-secondary w-full p-1 rounded-md bg-secondary bg-opacity-15 h-9 text-gray-800">
          </textarea>
        </div>
        <div class="flex items-center gap-3">
          <button class="text-primary hover:scale-110 delaying" @click="hideAdd(1)">
            <lucide-x />
          </button>
          <button
            class="btn_edit w-16 bg-secondary text-lg hover:bg-secondary hover:brightness-110"
            @click="confirmNew(1, 'motalaghat', newItems[2])">
            تایید
          </button>
        </div>
      </div>
      <div class="container gap-7">
        <div
          v-for="(accessory, index) in product.motalaghat"
          :key="accessory.id"
          class="flex flex-col lg:flex-row lg:gap-3 gap-1 w-full">
          <div class="flex gap-2 items-center w-full md:gap-4">
            <CheckIcon :id="`acc${accessory.id}`" />
            <div class="input_container">
              <input
                type="text"
                v-model="accessory.content"
                :class="{ data_changed: checkInput(index, 'motalaghat', accessory, 'content') }" class="input_content" />
            </div>
          </div>
          <div class="flex gap-2 justify-end">
            <button class="btn_disable min-w-fit">عدم نمایش</button>
            <button
              @click="deleteItem(accessory.id, 'motalaghat')"  
              class="btn_del">حذف</button>
          </div>
        </div>
      </div>
    </div>

    <!-- جدول ویژگی ها -->
    <div class="container border-t-2 border-cello">
      <div class="flex items-center justify-between">
        <h2 class="header">جدول ویژگی ها :</h2>
        <AddButton title="افزودن ویژگی جدید" @showAddWindow="showAdd(2)" />
      </div>
      <AddItem v-if="addWin[2]"
        @hide="hideAdd(2)"
        @title-changed="(value) => {newItems[3] = value;}"
        @content-changed="(value) => {newItems[4] = value;}"
        @confirm="confirmNew(2, 'jadval_moshakhasat_fani', newItems[4], newItems[3])"
        />
      <div class="container gap-7">
        <div
          v-for="(feature, index) in product.jadval_moshakhasat_fani"
          :key="feature.id"
          class="flex flex-col lg:flex-row gap-1 lg:gap-3 w-full">
          <div class="flex items-center gap-2 md:gap-4 w-full">
            <CheckIcon :id="`feat${feature.id}`" />
            <div class="input_container">
              <textarea
                v-model="feature.title"
                class="input_title"
                :class="{ data_changed: checkInput(index, 'jadval_moshakhasat_fani', feature, 'title') }">
              </textarea>
              <span>:</span>
              <textarea
                v-model="feature.content"
                class="input_content h-20"
                :class="{ data_changed: checkInput(index, 'jadval_moshakhasat_fani', feature, 'content') }">
              </textarea>
            </div>
          </div>
          <div class="flex gap-2 justify-end">
            <button class="btn_disable min-w-fit">عدم نمایش</button>
            <button
              @click="deleteItem(feature.id, 'jadval_moshakhasat_fani')"
              class="btn_del">حذف</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AddItem from "~/components/products/AddItem.vue";

const { id } = useRoute().params;
const url = `/api/products/${id}`;
const { data } = await useFetch(url);
const originalProduct = reactive(data.value);
const product = reactive(JSON.parse(JSON.stringify(data.value)));
const newItems = reactive([]);
for (let i = 0; i < originalProduct.length; i++) {
  newItems.push("");
}

// باز و بسته کردن پنجره اضافه کردن
const addWin = reactive([false, false, false]);
const showAdd = (index) => {
  addWin[index] = true;
};
const hideAdd = (index) => {
  addWin[index] = false;
};
const confirmNew = (index, container, newContent, newTitle) => {
  if (newTitle) {
    product[container].push({
      id: product[container].length + 100,
      title: newTitle,
      content: newContent,
    });
  } else {
    product[container].push({
      id: product[container].length + 100,
      content: newContent,
    });
  }
  newTitle = "";
  newContent = "";
  hideAdd(index);
};

// حذف آیتم
const deleteItem = (id, container) => {
  product[container] =  product[container].filter(item => item.id !== id);
}

// تغییر ظاهر موارد اضافه شده یا ویرایش شده قبل از تایید نهایی
const checkInput = (index, container, item, property) => {
  if (index >= originalProduct[container].length) {
    return true;
  } else if (item[property] !== originalProduct[container][index][property]) {
    return true;
  } else {
    return false;
  }
};

const sendData = async () => {
  const response = await fetch('url', {
    method: 'POST',
    body: JSON.stringify(product)
  });
  console.log('محصول جدید', product)
}

// watch(product, () => {
//   console.log("جدید", product, "اضافه", addWin, "قدیمی", originalProduct);
// });
</script>

<style scoped>


</style>
