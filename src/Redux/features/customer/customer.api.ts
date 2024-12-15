/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/Redux/Api/baseApi";



const CustomerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCustomer: builder.mutation({ 
      query: (userInfo) => ({
        url: "/user/create-customer",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const { useCreateCustomerMutation }: any = CustomerApi; 
