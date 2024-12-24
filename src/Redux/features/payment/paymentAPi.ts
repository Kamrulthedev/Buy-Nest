import { baseApi } from "@/Redux/Api/baseApi";

const PaymentApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
      InitalePayment: builder.mutation({
        query: (data) => {
          return {
            url: "/payment/initiale",
            method: "POST",
            body: data,
          };
        },
      }),
    }),
    overrideExisting: false,
  });
  
  export const { useInitalePaymentMutation } = PaymentApi;