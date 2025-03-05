import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = 'https://api.jamendo.com/v3.0/';


interface TopTracksResponse {
  tracks: {
    track: Array<{
      artist: {
        name: string;
        url: string
      };
      image: {
        size:string;
        text: string
      }
      listeners: string;
      playcount: string;
      url: string; 
      name :string;
    }>;
  };
}

export const lastFmApi = createApi({
  reducerPath: 'lastFmApi',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: builder => ({
    getTopTracks: builder.query({
      query: () => ({
        url: '/artists',
        params: {
          client_id: '5c62f651',
          format: 'json',
          limit: 12
        }
      }),
    }),
  })
});

export const { useGetTopTracksQuery } = lastFmApi;