import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducePath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
    }),
    // or
    // getPosts: builder.query({
    //   query: () => ({
    //     url: "/posts",
    //   }),
    // }),
    getUsers: builder.query({
      query: () => "/users",
    }),
    getPostById: builder.query({
      // here you can only accept a sigle parameter
      query: (id) => `/posts/${id}`,
    }),
    setPost: builder.mutation({
      query: (post) => ({
        url: "/posts",
        method: "POST",
        body: post,
      }),
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useGetUsers,
  useSetPostMutation,
} = baseApi;
export default baseApi;
