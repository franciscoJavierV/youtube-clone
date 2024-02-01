

<template>
    <h2>{{ title }}</h2>
    <div class="my-list">
      <VideoItem v-for="item in itemList" :key="item.id" :item="item" @click="navigate(item)" />
    </div>
  </template>
  
  <script setup>
  import VideoItem from '~/components/Video-cart.vue';
  
  const { itemList , title, navigate } = defineProps(['itemList' , 'title', 'navigate']);
  </script>
  
  <style scoped>
  .my-list {
    display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
    gap: 16px;
  }
  </style>
