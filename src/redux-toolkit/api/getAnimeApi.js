import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const getAnimeApi = createApi({
  reducerPath: 'getAnimeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.jikan.moe/v4/' }), // error moe
  endpoints: (builder) => ({

    // - GET HOME ANIME API

    getTopAnime: builder.query({
      query: () => `/top/anime`,
      
    }),

    getOngoingAnime: builder.query({
        query: () => `/seasons/now`,
        
    }),

    getUpcomingAnime: builder.query({
        query: () => `seasons/upcoming`,
        
    }),

    getTopAiringAnime: builder.query({
        query: () => `/top/anime?filter=airing`,
        
    }),

    // - GET ANIME GENRES

    getAnimeGenres: builder.query({
      query: () => `/genres/anime`,
      
    }),

    // - SEARCH ANIME API 

    getAnimeType: builder.query({
      query: (param) => `/anime?type=${param.selectedType}&sort=desc&order_by=members&limit=24&page=${param.pageNumber}`,
      
    }),

    getAnimeByTitle: builder.query({
      query: (param) => `/anime?letter=${param.searchAnimeName}&limit=24&page=${param.pageNumber}`,
      
    }),

    getAnimeByGenres: builder.query({
      query: (param) => `/anime?genres=${param.slecGenres}&sort=desc&order_by=members&limit=24&page=${param.pageNumber}`,
      
    }),



  }),
})

export const { 
    useGetTopAnimeQuery,
    useGetOngoingAnimeQuery,
    useGetUpcomingAnimeQuery,
    useGetTopAiringAnimeQuery,

    useGetAnimeGenresQuery,
    useGetAnimeTypeQuery,
    useGetAnimeByTitleQuery,
    useGetAnimeByGenresQuery
 } = getAnimeApi