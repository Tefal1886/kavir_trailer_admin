<template>
  <client-only class="flex flex-col w-full gap-6 pb-12 items-stretch">
    <h2 class="pb-6">
      ویرایش محصول /
      <span class="font-semibold">{{ originalProduct.name }}</span>
    </h2>
    <SelectionBar title="موارد" @send="sendData" />

    <!-- معرفی محصول -->
    <div class="container border-t-2 border-cello pb-4">
      <h2 class="header">معرفی محصول :</h2>
      <div class="input_container">
        <p class="input_subject">نام محصول:</p>
        <input type="text" v-model="product.name" placeholder="نام محصول نمی تواند خالی باشد!" class="input_content"
          :class="{
            data_changed: !product.name,
          }" />
      </div>
      <div class="input_container">
        <p class="input_subject">متن معرفی:</p>
        <textarea v-model="product.sharh_kotah" placeholder="متن معرفی نمی تواند خالی باشد!" class="input_content h-20"
          :class="{
            data_changed: !product.sharh_kotah
          }"></textarea>
      </div>
      <div class="input_container">
        <p class="input_subject">توضیحات:</p>
        <textarea v-model="product.tozihat" placeholder="توضیحات نمی تواند خالی باشد!" class="input_content h-20"
          :class="{ data_changed: !product.tozihat }"></textarea>
      </div>
    </div>

    <!-- تصاویر -->
    <div class="container gap-0 border-t-2 border-cello">
      <h2 class="header">تصاویر :</h2>
      <div class="py-6 flex flex-col gap-4 w-full">
        <div class="flex w-60 justify-between">
          <p>تصویر مدل تریلر :</p>
          <input type="file" id="asliButton" @change="handleAksAsli" accept="image/*" class="hidden" />
          <label for="asliButton" class="btn_disable text-center cursor-pointer">آپلود فایل</label>
        </div>
        <div class="w-full md:w-[calc(100%-270px)]">
          <img :src="previewAksAsli
            ? previewAksAsli
            : `https://kavirtrailer.com/images/products/${product.aks_asli}`
            " alt="مدل" title="مدل تریلر" class="w-full max-h-52 object-cover" />
        </div>
      </div>
      <div class="flex flex-col gap-4 py-6 border-y-[1px] border-cello">
        <div class="flex w-60 justify-between">
          <p class="pb-4">تصویر آیکون تریلر :</p>
          <input type="file" id="labelButton" @change="handleAksLabel" accept="image/*" class="hidden" />
          <label for="labelButton" class="btn_disable text-center cursor-pointer">آپلود فایل</label>
        </div>
        <img :src="previewAksLabel
          ? previewAksLabel
          : `https://kavirtrailer.com/images/products/${product.aks_label}`
          " alt="آیکون" class="w-32 h-20 object-cover rounded-md" />
      </div>
      <div class="flex flex-col gap-4 py-6">
        <div class="flex w-60 justify-between">
          <p class="pb-4">تصاویر تریلر :</p>
          <input type="file" id="aksKalaButton" @change="addAksKala" accept="image/*" class="hidden" />
          <label for="aksKalaButton" class="btn_disable text-center cursor-pointer">آپلود فایل</label>
        </div>
        <div class="flex flex-wrap gap-2">
          <div v-for="image in product.aks_kala" :key="image.id" class="relative">
            <lucide-x @click="deleteItem(image.id, 'aks_kala')"
              class="cursor-pointer absolute w-4 h-4 top-0 right-0 z-20 bg-sidecar text-primary border-[1px] border-primary rounded-tr-md hover:bg-red-200 late" />
            <img :src="`https://kavirtrailer.com/images/products/${image.address}`"
              class="w-28 h-16 object-cover rounded-md" />
          </div>
          <div v-for="image in preview_new_aks_kala" :key="image.id" class="relative">
            <lucide-x @click="deleteAksKala(image.id)"
              class="cursor-pointer absolute w-4 h-4 top-0 right-0 z-20 bg-sidecar text-primary border-[1px] border-primary rounded-tr-md hover:bg-red-200 late" />
            <img :src="image.address" class="w-28 h-16 object-cover rounded-md" />
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
      <AddItem v-if="addWin[0]" @hide="hideAdd(0)" @title-changed="(value) => {
        newItems.techTitle = value;
      }
        " @content-changed="(value) => {
          newItems.techContent = value;
        }
          " @confirm="
            confirmNew(
              0,
              'list_moshakhasat_fani',
              newItems.techContent,
              newItems.techTitle
            )
            " />
      <div class="container gap-7">
        <div v-for="technical in product.list_moshakhasat_fani" :key="technical.id"
          class="flex flex-col lg:flex-row lg:items-center w-full gap-1 lg:gap-3">
          <div class="flex gap-2 md:gap-4 lg:grow">
            <!-- <CheckIcon :id="`tech${technical.id}`" /> -->
            <div class="input_container">
              <textarea v-model="technical.title" class="input_title" placeholder="عنوان مشخصات فنی نمی تواند خال باشد!"
                title="عنوان مشخصات فنی">
              </textarea>
              <span>:</span>
              <textarea v-model="technical.content" placeholder="توضیحات مشخصات فنی نمی تواند خالی باشد!"
                title="توضیحات مشخصات فنی" class="input_content h-20">
              </textarea>
            </div>
          </div>
          <div class="flex lg:flex-col gap-2 justify-end">
            <button class="btn_disable min-w-fit">عدم نمایش</button>
            <button @click="deleteItem(technical.id, 'list_moshakhasat_fani')" class="btn_del">
              حذف
            </button>
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

      <div v-if="addWin[1]"
        class="flex flex-col lg:flex-row gap-3 items-end bg-yellow-400 bg-opacity-20 p-5 rounded-md">
        <div class="flex flex-col text-secondary w-full grow">
          <label class="pb-1 font-semibold text-lg">توضیحات:</label>
          <textarea type="text" v-model="newItems.accContent"
            class="border-2 border-secondary w-full p-1 rounded-md bg-secondary bg-opacity-15 h-9 text-gray-800">
          </textarea>
        </div>
        <div class="flex items-center gap-3">
          <button class="text-primary hover:scale-110 delaying" @click="hideAdd(1)">
            <lucide-x />
          </button>
          <button class="btn_edit w-16 bg-secondary text-lg hover:bg-secondary hover:brightness-110"
            @click="confirmNew(1, 'motalaghat', newItems.accContent)">
            تایید
          </button>
        </div>
      </div>
      <div class="container gap-7">
        <div v-for="accessory in product.motalaghat" :key="accessory.id"
          class="flex flex-col lg:flex-row lg:gap-3 gap-1 w-full">
          <div class="flex gap-2 items-center w-full md:gap-4">
            <!-- <CheckIcon :id="`acc${accessory.id}`" /> -->
            <div class="input_container">
              <input type="text" placeholder="عنوان متعلقات نمی تواند خالی باشد!" title="عنوان متعلقات"
                v-model="accessory.content" class="input_content" />
            </div>
          </div>
          <div class="flex gap-2 justify-end">
            <button class="btn_disable min-w-fit">عدم نمایش</button>
            <button @click="deleteItem(accessory.id, 'motalaghat')" class="btn_del">
              حذف
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- جدول ویژگی ها -->
    <div class="container border-t-2 border-cello pb-6">
      <div class="flex items-center justify-between">
        <h2 class="header">جدول ویژگی ها :</h2>
        <AddButton title="افزودن ویژگی جدید" @showAddWindow="showAdd(2)" />
      </div>
      <AddItem v-if="addWin[2]" @hide="hideAdd(2)" @title-changed="(value) => {
        featTitle = value;
      }
        " @content-changed="(value) => {
          featContent = value;
        }
          " @confirm="
            confirmNew(2, 'jadval_moshakhasat_fani', featContent, featTitle)
            " />
      <div class="container gap-7">
        <div v-for="feature in product.jadval_moshakhasat_fani" :key="feature.id"
          class="flex flex-col lg:flex-row gap-1 lg:gap-3 w-full">
          <div class="flex items-center gap-2 md:gap-4 w-full">
            <!-- <CheckIcon :id="`feat${feature.id}`" /> -->
            <div class="input_container">
              <textarea v-model="feature.title" placeholder="عنوان ویژگی نمی تواند خالی باشد!" title="عنوان ویژگی"
                class="input_title">
              </textarea>
              <span>:</span>
              <textarea v-model="feature.content" placeholder="توضیحات ویژگی نمی تواند خالی باشد!" title="توضیحات ویژگی"
                class="input_content h-20">
              </textarea>
            </div>
          </div>
          <div class="flex gap-2 justify-end">
            <button class="btn_disable min-w-fit">عدم نمایش</button>
            <button @click="deleteItem(feature.id, 'jadval_moshakhasat_fani')" class="btn_del">
              حذف
            </button>
          </div>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script setup>
import AddItem from "~/components/products/AddItem.vue";

const { id } = useRoute().params;
// دریافت اطلاعات محصول از دیتابیس
const url = `/api/products/${id}`;
const { data } = await useFetch(url);
const originalProduct = reactive(data.value);
const product = reactive(JSON.parse(JSON.stringify(data.value)));

// باز و بسته کردن پنجره اضافه کردن
const newItems = reactive({
  techTitle: "",
  techContent: "",
  accContent: "",
  featTitle: "",
  featContent: "",
});
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
  product[container] = product[container].filter((item) => item.id !== id);
};

// آپلود عکس
const {
  preview: previewAksAsli,
  handle: handleAksAsli,
  newImg: newAsli,
} = uploadImage();
const {
  preview: previewAksLabel,
  handle: handleAksLabel,
  newImg: newLabel,
} = uploadImage();
const {
  preview: previewAksKala,
  handle: handleAksKala,
  newImg: newAksKala,
} = uploadImage();
const preview_new_aks_kala = reactive([]);
const new_aks_kala = reactive([]);
const i = ref(1);
const addAksKala = async (event) => {
  await handleAksKala(event);
  new_aks_kala.push({ id: i.value, image: newAksKala.value });
  preview_new_aks_kala.push({ id: i.value, address: previewAksKala.value });
  i.value++;
};
const deleteAksKala = (id) => {
  new_aks_kala = new_aks_kala.filter((item) => item.id !== id);
  preview_new_aks_kala = preview_new_aks_kala.filter((item) => item.id !== id);
};

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


// ارسال محصول جدید به دیتابیس
const sendData = async () => {
  if (newAsli.value) {
    product.aks_asli = newAsli.value;
  }
  if (newLabel.value) {
    product.aks_label = newLabel.value;
  }
  if (new_aks_kala) {
    product.new_aks_kala = new_aks_kala;
  }
  const response = await fetch("https://api.kavirtrailer.com/product/edit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // تنظیم هدر برای ارسال JSON
    },
    body: JSON.stringify({ data: product }),
  });
  console.log("محصول جدید", product);
};

// watch(product, () => {
//   console.log("جدید", product, "اضافه", addWin, "قدیمی", originalProduct);
// });
</script>

<style scoped>
.data_changed {
  @apply text-primary bg-primary bg-opacity-30;
}
</style>
