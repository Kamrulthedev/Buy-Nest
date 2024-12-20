/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "@/Redux/Api/baseApi";
import { TQueryParams } from "@/types/types";


const ProductsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        UpdateProduct: builder.mutation<void, { id: string; userInfo: any }>({
            query: ({ id, userInfo }) => ({
                url: `/products/update-product/${id}`,
                method: "PATCH",
                body: userInfo,
            }),
            invalidatesTags: ['VendorsProducts', 'Products'],
        }),

        GetAllProducts: builder.query<any, TQueryParams[]>({
            query: (args = []) => {
                const params = new URLSearchParams();
                args.forEach((item) => {
                    params.append(item.name, item.value as string);
                });
                return {
                    url: `/products/all-products?${params.toString()}`,
                    method: "GET",
                };
            },
            providesTags: ['Products'],
        }),

        GetAllProductsWithVendor: builder.query<any[], { id: string; args?: TQueryParams[] }>({
            query: ({ id, args = [] }) => {
                const params = new URLSearchParams();
                args.forEach((item) => {
                    params.append(item.name, item.value as string);
                });
                return {
                    url: `/products/all-products-with-vendor/${id}?${params.toString()}`,
                    method: "GET",
                };
            },
            providesTags: ["VendorsProducts"],
        }),

        GetByIdProducts: builder.query<any, string>({
            query: (id) => ({
                url: `/products/${id}`,
                method: "GET",
            }),
            providesTags: ['VendorsProducts'],
        }),

        DeleteProduct: builder.mutation<void, string>({
            query: (id) => ({
                url: `/products/delete-product/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['VendorsProducts', 'Products'],
        }),

        CreateProduct: builder.mutation<void, any>({
            query: (data) => ({
                url: '/products/create-product',
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["VendorsProducts", "Products"],
        }),
    }),
});
export const {
    useGetAllProductsQuery,
    useCreateProductMutation,
    useGetByIdProductsQuery,
    useGetAllProductsWithVendorQuery,
    useUpdateProductMutation,
    useDeleteProductMutation
}: any = ProductsApi;

