<script setup>
import UserLayout from '@/layouts/UserLayout.vue'
import { onMounted, ref } from 'vue'

let userProfile = localStorage.getItem('user-profile')
if (userProfile) {
  userProfile = JSON.parse(userProfile)
}
let checkoutData = localStorage.getItem('checkout-data')
if (checkoutData) {
  checkoutData = JSON.parse(checkoutData)
}
console.log('checkoutData', checkoutData)

console.log('userProfile', userProfile.name)
</script>
<template>
  <UserLayout>
    <div class="card container mx-auto shadow-md my-24">
      <div class="card-body divide-y">
        <div class="p-5">
          <h1 class="text-2xl font-bold">Your order is successful !!</h1>
          <div>Hi {{ userProfile.name }} , thank you for your order.</div>
          <div>Wait for our email confirmation.</div>
        </div>
        <div class="flex flex-row items-center justify-between p-5">
          <div>
            <h2 class="font-semibold">Order date</h2>
            <div>
              {{ new Date(checkoutData.createdAt).toLocaleDateString() }}
            </div>
          </div>
          <div>
            <h2 class="font-semibold">Order Number</h2>
            <div>
              {{ checkoutData.orderNumber }}
            </div>
          </div>
          <div>
            <h2 class="font-semibold">Payment method</h2>
            <div>
              {{ checkoutData.paymentMethod }}
            </div>
          </div>
          <div>
            <h2 class="font-semibold">Address</h2>
            <div>Address</div>
          </div>
        </div>
        <div class="flex flex-col gap-5 p-5">
          <div
            class="flex flex-row justify-between items-center"
            v-for="product in checkoutData.products"
            :key="product.name"
          >
            <div>
              <img :src="product.imageUrl" class="w-20 h-20 object-cover" />
            </div>
            <div>
              <h2>About</h2>
              <div>{{ product.about }}</div>
            </div>
            <div>
              <h2>Quantity {{ product.quantity }}</h2>
            </div>
            <div>
              <h2>Price : {{ product.price }} ฿</h2>
            </div>
          </div>
        </div>
        <div class="flex flex-col p-5 gap-5">
          <div class="flex flex-row justify-between">
            <h2 class="font-semibold">Total Price :</h2>
            <div>{{ checkoutData.totalPrice }} ฿</div>
          </div>
          <div class="flex flex-row justify-between">
            <h2 class="font-semibold">shipping :</h2>
            <div>0 ฿</div>
          </div>
        </div>
        <div class=" flex flex-row justify-between p-5">
            <h2 class=" font-semibold">
                Total Price: 
            </h2>
            <div>
                {{ checkoutData.totalPrice }} ฿
            </div>
        </div>
        <div>
            
        </div>
      </div>
    </div>
  </UserLayout>
</template>
