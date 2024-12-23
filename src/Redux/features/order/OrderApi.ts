/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/Redux/Api/baseApi";

type TOrderData = {
    TotalPrice: string;
    userId: string;
    shopId: string;
    cardId: string;
};

type TOrderResponse = {
    id: string;
    userId: string;
    shopId: string;
    totalPrice: number;
    createdAt: string;
};

const OrdersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // Mutation to create a new order
        CreateOrder: builder.mutation<TOrderResponse, TOrderData>({
            query: (orderData) => ({
                url: `/order/create-order`,
                method: 'POST',
                body: orderData,
            }),
            invalidatesTags: ['Orders', 'Carts', 'CartItems'],
        }),

        // Query to get all orders for a user or shop
        GetOrders: builder.query<any, string>({
            query: (id) => ({
                url: `/order/user-cart/${id}`,
                method: 'GET',
            }),
            providesTags: ['Orders'],
        }),

        // Mutation to delete an order by ID
        DeleteOrder: builder.mutation<void, string>({
            query: (OrderId) => ({
                url: `/order/${OrderId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Orders'],
        }),
    }),
});

export const {
    useCreateOrderMutation,
    useGetOrdersQuery,      
    useDeleteOrderMutation, 
} = OrdersApi;

export default OrdersApi;
