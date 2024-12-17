/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/Redux/Api/baseApi";
import { TQueryParams } from "@/types/types";



const CustomerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    GetAllCustomer: builder.query({
      query: (args?: TQueryParams[]) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: `/customer/all-customer?${params.toString()}`,
          method: "GET"
        }
      }
    }),
    GetByIdCustomer: builder.query({
      query: (id: string) => {
        return {
          url: `/customer/${id}`,
          method: "GET"
        }
      }
    }),
    createCustomer: builder.mutation({
      query: (userInfo) => ({
        url: "/user/create-customer",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const { useCreateCustomerMutation, useGetAllCustomerQuery, useGetByIdCustomerQuery }: any = CustomerApi; 
