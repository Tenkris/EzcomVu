<script setup>
import UserLayout from '@/layouts/UserLayout.vue'
import { reactive, onMounted, watch ,ref} from 'vue'
import {useEventStore} from '@/stores/event'
const eventStore = useEventStore()
const userForm = [
  { name: 'Email', field: 'email' },
  { name: 'Name', field: 'name' }
]
const userData = reactive({
  imageUrl: '',
  email: '',
  name: ''
})
const Isvalid = ref(false)
onMounted(() => {
  if (localStorage.getItem('showToastAfterReload') === 'true') {
        // Show toast message
        // Replace with your method to show toast
        eventStore.popupMessage(
          'success',
          'Profile updated successfully'
        )

        // Clear the flag
        localStorage.removeItem('showToastAfterReload');
  }
  const userProfile = localStorage.getItem('user-profile')
  if (userProfile) {
    const userProfileJson = JSON.parse(userProfile)
    userData.imageUrl = userProfileJson.imageUrl
    userData.email = userProfileJson.email
    userData.name = userProfileJson.name
  }
})
watch(
  () => userData,
  () => {
    console.log('userData', userData)
  },
  { deep: true }
)

const handleFileChange = (e) => {
  const file = e.target.files[0]

  if(file) {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      userData.imageUrl = reader.result
    }
    
  }
}
const updateProfile = () => {
  localStorage.setItem('user-profile', JSON.stringify(userData))
  console.log('userData', userData)
  // show toast 
  localStorage.setItem('showToastAfterReload', 'true');
  window.location.reload() 

}
</script>
<template>
  <UserLayout>
    <div
      class="container mx-auto max-w-2xl p-4 bg-base-100 my-4 border border-base-200 shadow-md"
    >
      <h1 class="text-2xl">Your profile</h1>
      <div class="flex flex-col items-center">
        <div class="avatar">
          <div class="w-24 rounded-full">
            <img :src="userData.imageUrl" />
          </div>
        </div>
        <input
          type="file"
          class="file-input file-input-bordered file-input-xs w-full max-w-xs mt-5"
          @change="handleFileChange" 
        />
        <div>
          <div v-for="item in userForm" class="form-control w-full">
            <label class="label">
              <span class="label-text">{{ item.name }}</span>
              <span class="label-text-alt"></span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full"
              v-model="userData[item.field]" 
            />
          </div>
        </div>
        <button class="btn btn-accent mt-5 w-full" @click=" updateProfile">UpdateProfile</button>
      </div>
    </div>
  </UserLayout>
</template>
