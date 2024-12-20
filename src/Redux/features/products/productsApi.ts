/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "@/Redux/Api/baseApi";
import { TQueryParams } from "@/types/types";


const ProductsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        UpdateProduct: builder.mutation({
            query: ({ id, userInfo }: { id: string, userInfo: any }) => {
                return {
                    url: `/products/update-product/${id}`,
                    method: "PATCH",
                    body: userInfo,
                }
            },
            invalidatesTags: ['Products'],
        }),

        GetAllProducts: builder.query({
            query: (args?: TQueryParams[]) => {
                const params = new URLSearchParams();

                if (args) {
                    args.forEach((item) => {
                        params.append(item.name, item.value as string);
                    });
                }
                return {
                    url: `/products/all-products?${params.toString()}`,
                    method: "GET"
                }
            },
            providesTags: ['Products']
        }),
        GetAllProductsWithVendor: builder.query({
            query: (id: string, args: TQueryParams[] = []) => {
                const params = new URLSearchParams();
                args.forEach((item) => {
                    params.append(item.name, item.value as string);
                });
                return {
                    url: `/products/all-products-with-vendor/${id}?${params.toString()}`,
                    method: "GET"
                };
            }
        }),

        GetByIdProducts: builder.query({
            query: (id: string) => ({
                url: `/products/${id}`,
                method: 'GET',
            }),
        }),
        DeleteProduct: builder.mutation({
            query: (id: string) => {
                return {
                    url: `/products/delete-product/${id}`,
                    method: 'DELETE',
                };
            },
            invalidatesTags: ['Products'],
        }),

        createProduct: builder.mutation({
            query: (data) => {
                return {
                    url: '/products/create-product',
                    method: "POST",
                    body: data,
                };
            },
            invalidatesTags: ["Products"],
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

