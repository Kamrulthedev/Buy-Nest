import { baseApi } from "@/Redux/Api/baseApi";

const CartItemApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        CreateCartItem: builder.mutation({
            query: (CartItemData: { productId: string; cartId: string }) => ({
                url: `/cart/create-cart-item`,
                method: 'POST',
                body: CartItemData,
            }),
            invalidatesTags: ['CartItems'], 
        }),

        // Query to get cart items
        GetCartItems: builder.query({
            query: (cartId: string) => ({
                url: `/cart/get-cart-items/${cartId}`,
                method: 'GET',
            }),
            providesTags: ['CartItems'],
        }),

        // Mutation to delete a cart item
        DeleteCartItem: builder.mutation({
            query: (cartItemId: string) => ({
                url: `/cart/delete-cart-item/${cartItemId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['CartItems'],
        }),
    }),
});

export const {
    useCreateCartItemMutation,
    useGetCartItemsQuery,
    useDeleteCartItemMutation,
} = CartItemApi;
