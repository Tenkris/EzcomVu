<script setup>
import UserLayout from '@/layouts/UserLayout.vue'
import ProductList from '@/components/productList.vue'
import { useUserProductStore } from '@/stores/product'
import { useUserCartStore } from '@/stores/cart'
const userProductStore = useUserProductStore()
const userCartStore = useUserCartStore()
console.log(userProductStore.list)

const addToCart = product => {
  console.log('add to cart')
  console.log('product', product)
  userCartStore.addToCart(product)
  console.log(userCartStore.items)
}
</script>

<template>
  <UserLayout>
    <div
      class="hero min-h-screen"
      style="
        background-image: url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg);
      "
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Welcome to our Online Store</h1>
          <p class="mb-5">
            Discover a wide range of products for all your needs.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>

    <ProductList :products="userProductStore.list" :addToCart="addToCart" />
  </UserLayout>
</template>
