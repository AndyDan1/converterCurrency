import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const apiSliceCurrent = createApi({
  reducerPath: 'currentAPI',
  tagTypes: ['Current'],
  baseQuery: fetchBaseQuery({baseUrl: 'https://bank.gov.ua'}),
  endpoints: (build) => ({
    getCurrent: build.query({
      query: () => '/NBUStatService/v1/statdirectory/exchange?json',
      providesTags: () => ['Current']
    }),

  })
})
export const {useGetCurrentQuery} = apiSliceCurrent