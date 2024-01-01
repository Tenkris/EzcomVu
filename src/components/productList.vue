<script setup>
import { defineProps } from 'vue'
defineProps({
  products: Array,
  addToCart: Function
})
</script>

<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-10 p-10"
  >
    <div v-for="(product, index) in products" :key="index">
      <div class="card card-compact bg-base-100 shadow-xl w-5/6">
        <figure>
          <img
            :src="product.imageUrl"
            alt="Product Image"
            class="w-full h-1/3 md:h-2/3"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ product.name }}</h2>
          <p>{{ product.about }}</p>
          <div class="card-actions justify-end">
            <button @click="addToCart(product)" class="btn btn-primary">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
