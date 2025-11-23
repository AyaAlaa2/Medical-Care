import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `/product`,
    }),
    addOrder: builder.mutation({
      query: (orderData) => ({
        url: "/order",
        method: "Post",
        body: {
          order: orderData,
        },
      }),
    }),
  }),
});

export const { useGetProductsQuery, useAddOrderMutation } = apiSlice;
