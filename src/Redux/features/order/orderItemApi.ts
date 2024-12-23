/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/Redux/Api/baseApi";

type TOrderItemData = {
    orderId: string;
    productId: string;
    quantity: number;
    price: number;
};

const OrderItemApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        CreateOrderItem: builder.mutation<void, TOrderItemData>({
            query: (item) => ({
                url: `/order-item/create-order-item`,
                method: 'POST',
                body: item,
            }),
            invalidatesTags: ['OrderItem'],
        }),

        GetAllOrderItems: builder.query<any, string>({
            query: (id: string) => ({
                url: `/order-item/user-cart-items/${id}`,
                method: 'GET',
            }),
            providesTags: ['OrderItem'], 
        }),

        DeleteOrderItem: builder.mutation<void, { itemId: string }>({
            query: ({ itemId }) => ({
                url: `/order/delete-order-item/${itemId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['OrderItem'], 
        }),
    }),
});

// Export hooks for usage in components
export const {
    useCreateOrderItemMutation,
    useGetAllOrderItemsQuery,
    useDeleteOrderItemMutation,
} = OrderItemApi;

export default OrderItemApi;

