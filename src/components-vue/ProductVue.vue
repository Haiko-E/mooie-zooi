<script setup>
import { urlForImage } from '../utils/sanity';
import { PortableText } from '@portabletext/vue';

const { product } = defineProps({ product: Object });
</script>

<template>
  <article
    class="w-full mx-auto sm:mx-0 block rounded-lg bg-white text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
  >
    <div
      class="relative overflow-hidden bg-cover bg-no-repeat"
      data-te-ripple-init
      data-te-ripple-color="light"
    >
      <img
        class="rounded-t-lg aspect-square object-cover"
        :src="urlForImage(product.image).width(600).height(600).format('webp').url()"
        :alt="product.image.asset.altText || product.title"
      />
      <a :href="`/products/${product._id}`">
        <div
          class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
        ></div>

        <div
          v-if="product.sold"
          class="text-white text-[3rem] sm:text-6xl absolute inset-0 flex justify-center items-center -rotate-45"
        >
          Verkocht
        </div>
      </a>
    </div>
    <div
      class="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50"
    >
      <span
        v-if="product.tags"
        v-for="tag in product.tags"
        class="inline-block whitespace-nowrap mr-2 rounded-[0.27rem] bg-info-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-info-800"
      >
        {{ tag }}
      </span>
    </div>
    <div class="p-6">
      <div class="prose prose-a:text-blue-600 prose-p:truncate rte">
        <PortableText class="truncate" :value="product.description" />
      </div>
    </div>
    <div
      class="border-t-2 flex border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50"
    >
      <span class="flex-1 font-semibold">Totaalprijs:</span>
      <span>€{{ product.price }}</span>
    </div>
  </article>
</template>
