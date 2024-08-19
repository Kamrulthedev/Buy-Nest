import { baseApi } from "@/Redux/Api/baseApi";

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      providesTags: ["Products"],
    }),
    crateProducts: builder.mutation({
      query: (newData) => {
        return {
          url: "products/create-products",
          method: "POST",
          body: newData,
        };
      },
      invalidatesTags: ["Products"],
    }),
  }),
});

export const { useGetAllProductsQuery, useCrateProductsMutation } = productsApi;
