/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/Redux/Api/baseApi";
import { TQueryParams } from "@/types/types";


const ShopsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        GetAllShops: builder.query({
            query: (args?: TQueryParams[]) => {
                const params = new URLSearchParams();

                if (args) {
                    args.forEach((item) => {
                        params.append(item.name, item.value as string);
                    });
                }

                return {
                    url: `/shops/all-shops?${params.toString()}`,
                    method: "GET",
                };
            },
            providesTags: ['Shops'],
        }),
        GetByIdShops: builder.query({
            query: (id: string) => ({
                url: `/shops/${id}`,
                method: 'GET',
            }),
        }),

        GetAllShopsNameandId: builder.query({
            query: () => ({
                url: `/shops/all-shops-create-carts`,
                method: 'GET',
            }),
        }),

    }),
});

export const {
    useGetAllShopsQuery,
    useGetByIdShopsQuery,
    useGetAllShopsNameandIdQuery
} = ShopsApi;
