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
        }),
        ChangeStatus: builder.mutation({
            query: (statusInfo) => {
                return {
                    url: '/user/change-status',
                    method: 'PATCH',
                    body: statusInfo
                }
            },
            invalidatesTags: ['Users'],
        }),
        DeleteUser: builder.mutation({
            query: (data) => {
                console.log(data)
                return {
                    url: '/user/delete-user',
                    method: 'DELETE',
                    body: data
                }
            },
            invalidatesTags: ['Users'],
        }),
        createvendor: builder.mutation({
            query: (data) => {
                console.log(data)
                return {
                    url: '/user/create-vendor',
                    method: "POST",
                    body: data
                }
            },
            invalidatesTags: ["Users"]
        })
    }),
});

export const {
    useUpdateMeMutation,
    useGetAllUsersQuery,
    useChangeStatusMutation,
    useDeleteUserMutation,
    useCreatevendorMutation
}: any = userApi; 
