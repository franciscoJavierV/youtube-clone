// youtubeService.js

import { google, youtube_v3 } from 'googleapis';
import { ERRORS } from '~/models/constants';

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
    return response?.data.items;
  } catch (error) {
    console.error(ERRORS.searchError, error);
    throw error;
  }
})

