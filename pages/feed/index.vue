<script setup lang="ts">
import { ROUTES, placeholder } from '../../models/constants';
import VideoList from '~/components/Video-list.vue';
definePageMeta({
  middleware: "auth",
  layout:"session"
})

const searchValue = ref('')
const searchData = ref([]);
const {logout, infoUser} = useFirebaseAuth()

const { data:featuredVideos, pending, error, refresh } = await useFetch('/api/youtube', {
  params: { search : placeholder  },
})

const navigateToDetails = (data: any) => {
 navigateTo(`./feed/${data.id.videoId}`)   
};

const handleSearch = async()=> {
  const response = await $fetch(ROUTES.searchVideo, {
  params: { search :searchValue.value  },
}) 
  searchData.value = response

}
</script>

<template lang="">
  <div>
    <div class="flex justify-between items-center">
    <h1 class="text-2xl font-bold mb-4"> {{ $t("video.welcome" , { name: nfoUser?.email  }) }}</h1>
  <UButton @click="logout" class="text-white mb-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-8 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 h-8">
    {{ $t("video.goBack")}}
  </UButton>
    </div>

    <UFormGroup>
    <div class="flex items-center">
  <UInput class="w-5/6 text-sm font-medium text-gray-900 dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300" type="text" placeholder="Buscar" v-model="searchValue" />
  <UButton @click="handleSearch" class="ml-4  h-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-8 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    {{ $t("video.search")}}
  </UButton>
</div>
      </UFormGroup>
      <div class="flex justify-between items-center">
    </div>
    <div>
    </div>
    <div :key="searchData" v-if="searchData && searchData.length">
      <VideoList :navigate="navigateToDetails" title="Searched videos" :itemList="searchData"/>
    </div>
    <div v-if="featuredVideos && featuredVideos.length">
      <VideoList :navigate="navigateToDetails" title="Featured videos" :itemList="featuredVideos"/>
    </div>
  </div>
</template>


<style lang=""></style>
