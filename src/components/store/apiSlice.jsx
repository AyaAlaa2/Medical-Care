import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `/product`,
    }),
  }),
});

export const { useGetProductsQuery } = apiSlice;
