import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_KEY, BASE_URL } from '../config/api'

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL
})

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery,
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: (cityName: string) => `/daily?city=${cityName},NC&key=${API_KEY}`,
    }),
  }),
})

export const { useGetWeatherQuery } = weatherApi
