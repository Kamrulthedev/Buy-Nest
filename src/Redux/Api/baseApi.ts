import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://keyboard-shop-server-chi.vercel.app/",
  // baseUrl: "http://localhost:5000/",
  //   credentials: "include",
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ["Products"],
  baseQuery: baseQuery,
  endpoints: () => ({}),
});


