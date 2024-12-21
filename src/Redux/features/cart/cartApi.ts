/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/Redux/Api/baseApi";

const CartApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        GetAllCarts: builder.query({
            query: () => ({
                url: `/carts/all-carts`,
                method: "GET",
            }),
            providesTags: ['Carts'], 
        }),
        CreateCart: builder.mutation({
            query: (CartData: { userId: string; shopId: string }) => ({
                url: `/carts/create-cart`,
                method: 'POST',
                body: CartData,
            }),
            invalidatesTags: ['Carts'],
        }),
        DeleteCart: builder.mutation({
            query: (id: string) => ({
                url: `/carts/delete-cart/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Carts'],
        }),
        UserCars: builder.query({
            query: (id: string) => ({
                url: `/carts/user-carts/${id}`,
                method: "GET",
            }),
            providesTags: ['Carts'],
        }),
    }),
});


export const {
    useGetAllCartsQuery,  
    useCreateCartMutation,
    useDeleteCartMutation ,
    useUserCarsQuery 
} = CartApi;

