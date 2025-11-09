import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }), // same origin as your Vite dev server
  endpoints: (builder) => ({
    getProducts: builder.query({
      // fetch directly from the public folder
      query: () => "/data.json",
      // unwrap from { "product": [...] }
      transformResponse: (response) => {
        if (Array.isArray(response)) return response;
        if (Array.isArray(response?.product)) return response.product;
        console.error("Unexpected data.json shape", response);
        return [];
      },
    }),
  }),
});

export const { useGetProductsQuery } = apiSlice;
