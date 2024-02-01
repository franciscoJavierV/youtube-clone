<template>
  <div class="my-list-item">
    <div class="image-container">
        <img class="thumbnail" :src="item?.snippet?.thumbnails?.default.url" alt="Thumbnail" />
    </div>
    <p class="title">{{ item.snippet.title }}</p>
    <p class="description">{{ item.snippet.description }}</p>
   <span class="channel">Channel:  {{ item.snippet.channelTitle }}</span>
  </div>
</template>

<script setup>
const { item } = defineProps(["item"]);
</script>

<style scoped>
.my-list-item {
  border: 1px solid #ccc;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer
}

.thumbnail {
  width: 100%;
  height: auto;
  transition: filter 0.3s ease;
}
.my-list-item:hover .thumbnail {
  filter: brightness(70%);
} 
.title {
  font-weight: bold;
  font-size: 12px;
}

.description {
  font-size: 12px;
}

.channel {
  font-weight: bold;
  font-size: 10px;
}
</style>
