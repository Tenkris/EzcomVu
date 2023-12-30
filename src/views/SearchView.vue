<script setup>
import UserLayout from '@/layouts/UserLayout.vue'
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUserProductStore } from '@/stores/product'
import ProductList from '@/components/productList.vue'
const userProductStore = useUserProductStore()
const route = useRoute()
const searchText = ref('')
const filterProducts = computed(() => {
  console.log('filterProducts', filterProducts.value)
  return userProductStore.filterProduct(searchText.value)
})
const updateSearchText = () => {
  const newSearchText = route.query.q
  searchText.value = newSearchText || ''
}

watch(() => route.query.q, updateSearchText, { immediate: true })
onMounted(() => {
  updateSearchText()
})
</script>

<template>
  <UserLayout>
    <div class="m-10">
      <h1 class="text-3xl">
        Search: <span class="font-bold">{{ searchText }}</span>
      </h1>
    </div>
    <div v-if="filterProducts.length > 0">
      <ProductList :products="filterProducts"> </ProductList>
    </div>
    <div class="m-10" v-else>
      <div class="text-center text-3xl">Product not found</div>
    </div>
  </UserLayout>
</template>
