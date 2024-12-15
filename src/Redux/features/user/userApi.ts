/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "@/Redux/Api/baseApi";


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
        GetAllUsers : builder.query({
            query: ()=>({
                url: "/user/all-users",
                method: "GET"
            }),
         providesTags: ['Users']
        })
    }),
});

export const { useUpdateMeMutation, useGetAllUsersQuery  }: any = userApi; 
