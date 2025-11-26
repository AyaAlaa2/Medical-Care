import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const apiSlice = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${SUPABASE_URL}/rest/v1/`,
    prepareHeaders: (headers) => {
      headers.set("apikey", SUPABASE_KEY);
      headers.set("Authorization", `Bearer ${SUPABASE_KEY}`);
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `product?select=*`,
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
