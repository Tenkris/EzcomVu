<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useEventStore } from '@/stores/event'
const eventStore = useEventStore()
import Toast from '@/components/Toast.vue'
</script>

<template>
  <Toast
      v-if="eventStore.alert"
      :status="eventStore.data.status"
      :message="eventStore.data.message"
    >
    </Toast>
  <RouterView />
</template>
