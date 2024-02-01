<template>
  <div class="details-page">
    <UButton @click="goBack" class="back-button">Volver</UButton>
    <h1> {{ videos.title }}</h1>
    <br>
    <div class="video-container">
      <iframe
        :src="youtubeEmbedUrl"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
    <div class="video-info">
      <br>
      <p> {{ videos.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const goBack = () => {
  navigateTo("/feed");
};

const videos = ref([]);
const route = useRoute();
const videoId = route.params.id;

const youtubeEmbedUrl = ref("");
onMounted(() => {
  youtubeEmbedUrl.value = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=${window.location.origin}&controls=1&fs=1`;
});

const getVideoData = async () => {
  const { data , error} = await useFetch("/api/byId", {
    params: { id: videoId },
  });

    videos.value = data.value[0].snippet;
};

getVideoData();

</script>

<style scoped>
.details-page {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}

.back-button {
  margin-bottom: 20px;
}

.video-container {
  margin-bottom: 20px;
}

.video-container iframe {
  width: 100%;
  height: 400px;
}

.video-info {
  background-color: #f8f8f8;
  padding: 15px;
  border-radius: 8px;
}
</style>
