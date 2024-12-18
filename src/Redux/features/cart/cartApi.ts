/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/Redux/Api/baseApi";

const CartApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        GetAllCarts: builder.query({
            query: () => {
                return {
                    url: `/carts/all-carts`,
                    method: "GET",
                };
            },
            providesTags: ['Carts'], 
        }),
        CreateCart: builder.mutation({
            query: (CartData: {userId: string, shopId: string}) => ({
                url: `/carts/create-cart`,
                method: 'POST',
                body: CartData,
            }),
        }),
    }),
});

export const {
    useGetAllCartsQuery,  
    useCreateCartMutation 
} = CartApi;

