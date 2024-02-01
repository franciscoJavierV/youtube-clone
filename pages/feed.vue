<script setup lang="ts">

definePageMeta({
  middleware: "auth",
  layout:"session"
})

const searchValue = ref('')
const {logout, infoUser} = useFirebaseAuth()
const handleSearch = async()=> {
  const { data, pending, error, refresh } = await useFetch('/api/youtube', {
  params: { search :searchValue  },
})
console.log(data)
}
</script>

<template lang="">
  <div>
    <h1>videos para {{ infoUser?.email }}</h1>
    <UFormGroup >
            <UInput class="block mb-2 text-sm font-medium text-gray-900 dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300" type="text" placeholder="busca" v-model="searchValue" />
        </UFormGroup>
        <UButton @click="handleSearch"  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Buscar
        </UButton>
    <UButton @click="logout">Salir</UButton>
  </div>
  <div></div>
</template>
<style lang=""></style>
