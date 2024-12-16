/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/Redux/Api/baseApi";
import { TQueryParams } from "@/types/types";



const VendorsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        GetAllVendors: builder.query({
            query: (args?: TQueryParams[]) => {
                const params = new URLSearchParams();

                if (args) {
                    args.forEach((item) => {
                        params.append(item.name, item.value as string);
                    });
                }

                return {
                    url: `/vendors/all-vendors?${params.toString()}`,
                    method: "GET",
                };
            },
            providesTags: ['Vendors'],
        }),
        GetByIdVendors: builder.query({
            query: (id: string) => ({
                url: `/vendors/${id}`,
                method: 'GET',
            }),
        }),

    }),
});

export const { useGetAllVendorsQuery, useGetByIdVendorsQuery } = VendorsApi;
