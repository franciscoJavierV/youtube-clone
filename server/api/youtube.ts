// youtubeService.js

import { google, youtube_v3 } from 'googleapis';
import { ERRORS, ROUTES } from '~/models/constants';

export default defineEventHandler(async(event) => {
  let youtube: youtube_v3.Youtube;

  const runtimeConfig = useRuntimeConfig();

  const urlSearchParams = new URLSearchParams(event.path);
  const searchParams = urlSearchParams.get(ROUTES.searchVideo);

  const {
     youtubeApiKey
  } = runtimeConfig.public

  youtube = google.youtube({
      version: 'v3',
      auth: youtubeApiKey as unknown as string,
    });

  try {
    const response = await youtube.search.list({
      part: ['snippet'],
      q: searchParams?._value as string ?? searchParams as string,
      maxResults: 25
    });

    return response?.data?.items;
  } catch (error) {
    console.error(ERRORS.searchError, error);
    throw error;
  }
})

