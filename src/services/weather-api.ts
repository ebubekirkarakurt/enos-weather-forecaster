import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_KEY, BASE_URL } from '../config/api'

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}/daily?city=Raleigh,NC&key=${API_KEY}` }),
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: () => ``,
    }),
  }),
})

export const { useGetWeatherQuery } = weatherApi 