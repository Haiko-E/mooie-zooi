<script setup>
import { computed, onMounted, ref } from 'vue';
import { Dropdown, Ripple, initTE } from 'tw-elements';
import ProductVue from './ProductVue.vue';

onMounted(() => {
  initTE({ Dropdown, Ripple });
});

const { products } = defineProps({ products: Array });
const selected = ref('Sorteer op');
const sortedBy = ref(products);

const priceLowHigh = computed(() => products.sort((a, b) => a.price - b.price));
const priceHighLow = computed(() => products.sort((a, b) => b.price - a.price));
const createdAt = computed(() =>
  products.sort((a, b) => new Date(b._createdAt) - new Date(a._createdAt))
);

function handleClick(index) {
  switch (index) {
    case 0:
      selected.value = 'Prijs laag-hoog';
      sortedBy.value = priceLowHigh.value;
      break;
    case 1:
      selected.value = 'Prijs hoog-laag';
      sortedBy.value = priceHighLow.value;
      break;
    case 2:
      selected.value = 'Verschijningsdatum';
      sortedBy.value = createdAt.value;
      break;
    default:
      selected.value = 'Sorteer op';
      sortedBy.value = products;
      break;
  }
}
</script>

<template>
  <hr class="my-8 h-0.5 border-t-0 bg-neutral-200 opacity-100" />
  <div class="mx-auto sm:w-full relative flex" data-te-dropdown-ref>
    <button
      class="flex mr-auto border border-neutral-200 items-center whitespace-nowrap rounded bg-transparent px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-amber-950 transition duration-150 ease-in-out hover:bg-amber-950 hover:bg-opacity-5 focus:bg-amber-950 focus:bg-opacity-5 focus:outline-none focus:ring-0 active:bg-amber-950 active:bg-opacity-30 motion-reduce:transition-none"
      type="button"
      id="dropdownMenuButton1"
      data-te-dropdown-toggle-ref
      aria-expanded="false"
      data-te-ripple-init
      data-te-ripple-color="light"
    >
      {{ selected }}
      <span class="ml-2 w-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="h-5 w-5"
        >
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </button>
    <ul
      class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
      aria-labelledby="dropdownMenuButton1"
      data-te-dropdown-menu-ref
    >
      <li>
        <a
          @click="handleClick(0)"
          class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
          href="#"
          data-te-dropdown-item-ref
          >Prijs laag-hoog</a
        >
      </li>
      <li>
        <a
          @click="handleClick(1)"
          class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
          href="#"
          data-te-dropdown-item-ref
          >Prijs hoog-laag</a
        >
      </li>
      <li>
        <a
          @click="handleClick(2)"
          class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
          href="#"
          data-te-dropdown-item-ref
          >Verschijningsdatum</a
        >
      </li>
    </ul>
    <p class="self-center">{{ products.length }} resultaten</p>
  </div>
  <hr class="my-8 h-0.5 border-t-0 bg-neutral-200 opacity-100" />
  <div class="flex flex-col sm:grid gap-5 sm:grid-cols-2 grid-rows-1 md:grid-cols-3">
    <ProductVue v-for="product in sortedBy" :key="product._id" :product="product" />
  </div>
</template>
