/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "@/Redux/Api/baseApi";
import { TQueryParams } from "@/types/types";


const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        UpdateMe: builder.mutation({
            query: (userInfo) => ({
                url: "/user/update-me",
                method: "PATCH",
                body: userInfo,
            }),
            invalidatesTags: ['Users'],
        }),
        GetAllUsers: builder.query({
            query: (args?: TQueryParams[]) => {
                const params = new URLSearchParams();

                if (args) {
                    args.forEach((item) => {
                        params.append(item.name, item.value as string);
                    });
                }
                return {
                    url: `/user/all-users?${params.toString()}`,
                    method: "GET"
                }
            },
            providesTags: ['Users']
        })
    }),
});

export const { useUpdateMeMutation, useGetAllUsersQuery }: any = userApi; 
