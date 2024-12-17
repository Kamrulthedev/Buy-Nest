/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "@/Redux/Api/baseApi";
import { TQueryParams } from "@/types/types";


const ProductsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // UpdateMe: builder.mutation({
        //     query: (userInfo) => ({
        //         url: "/user/update-me",
        //         method: "PATCH",
        //         body: userInfo,
        //     }),
        //     invalidatesTags: ['Users'],
        // }),
        // GetAllUsers: builder.query({
        //     query: (args?: TQueryParams[]) => {
        //         const params = new URLSearchParams();

        //         if (args) {
        //             args.forEach((item) => {
        //                 params.append(item.name, item.value as string);
        //             });
        //         }
        //         return {
        //             url: `/user/all-users?${params.toString()}`,
        //             method: "GET"
        //         }
        //     },
        //     providesTags: ['Users']
        // }),
        // ChangeStatus: builder.mutation({
        //     query: (statusInfo) => {
        //         return {
        //             url: '/user/change-status',
        //             method: 'PATCH',
        //             body: statusInfo
        //         }
        //     },
        //     invalidatesTags: ['Users'],
        // }),
        // DeleteUser: builder.mutation({
        //     query: (data) => {
        //         console.log(data)
        //         return {
        //             url: '/user/delete-user',
        //             method: 'DELETE',
        //             body: data
        //         }
        //     },
        //     invalidatesTags: ['Users'],
        // }),
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
    useCreateProductMutation
}: any = ProductsApi; 
