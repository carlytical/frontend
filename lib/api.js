import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the base URL for your API
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

// Create the API slice
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      // Add auth token if available
      const token = getState().auth?.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Cars', 'User', 'Wishlist', 'Compare', 'Auth'],
  endpoints: (builder) => ({
    // Auth endpoints
    signup: builder.mutation({
      query: (userData) => ({
        url: '/users',
        method: 'POST',
        body: userData,
      }),
      invalidatesTags: ['Auth'],
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['Auth'],
    }),

    // Cars endpoints
    getCars: builder.query({
      query: (params) => ({
        url: '/cars',
        params,
      }),
      providesTags: ['Cars'],
    }),
    getCarById: builder.query({
      query: (id) => `/cars/${id}`,
      providesTags: (result, error, id) => [{ type: 'Cars', id }],
    }),

    // Wishlist endpoints
    getWishlist: builder.query({
      query: () => '/wishlist',
      providesTags: ['Wishlist'],
    }),
    addToWishlist: builder.mutation({
      query: (carId) => ({
        url: '/wishlist',
        method: 'POST',
        body: { carId },
      }),
      invalidatesTags: ['Wishlist'],
    }),
    removeFromWishlist: builder.mutation({
      query: (carId) => ({
        url: `/wishlist/${carId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Wishlist'],
    }),

    // Compare endpoints
    getCompareList: builder.query({
      query: () => '/compare',
      providesTags: ['Compare'],
    }),
    addToCompare: builder.mutation({
      query: (carId) => ({
        url: '/compare',
        method: 'POST',
        body: { carId },
      }),
      invalidatesTags: ['Compare'],
    }),
    removeFromCompare: builder.mutation({
      query: (carId) => ({
        url: `/compare/${carId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Compare'],
    }),
  }),
});

// Export hooks for usage in components
export const {
  useSignupMutation,
  useLoginMutation,
  useGetCarsQuery,
  useGetCarByIdQuery,
  useGetWishlistQuery,
  useAddToWishlistMutation,
  useRemoveFromWishlistMutation,
  useGetCompareListQuery,
  useAddToCompareMutation,
  useRemoveFromCompareMutation,
} = api;
