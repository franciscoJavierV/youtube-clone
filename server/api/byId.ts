// youtubeService.js

import { google, youtube_v3 } from 'googleapis';

export default defineEventHandler(async(event) => {
  let youtube: youtube_v3.Youtube;

  const runtimeConfig = useRuntimeConfig();

  const urlSearchParams = new URLSearchParams(event.path);
  const videoId = urlSearchParams.get('/api/byId?id');
  
  const {
     youtubeApiKey
  } = runtimeConfig.public

  youtube = google.youtube({
      version: 'v3',
      auth: youtubeApiKey as unknown as string,
    });
  
  try {
    const response = await youtube.videos.list({
        part: ['snippet'],
        id: videoId
    });
    console.log("response", response?.data.items)
    return response?.data.items;
  } catch (error) {
    console.error('Error al realizar la búsqueda:', error);
    throw error;
  }
})

