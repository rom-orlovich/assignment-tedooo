import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

interface Post {
  id: string;
  userId: string;
  username: string;
  avatar: string;
  shopName?: string;
  shopId?: string;
  images: string[];
  comments: number;
  date: string;
  text: string;
  likes: number;
  didLike: boolean;
  premium: boolean;
}
type ResultAPI<T> = { data: T };

export const postsAPI = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://dev.tedooo.com/feed.json" }),
  tagTypes: ["post"],
  endpoints: (builder) => ({
    getPosts: builder.query<ResultAPI<Post[]>, unknown>({
      providesTags: (result) =>
        result
          ? [
              ...result.data.map((post) => ({
                id: post.id,
                type: "post" as const,
              })),
              { id: "posts_list", type: "post" },
            ]
          : [{ id: "posts_list", type: "post" }],
      query: () => ({ url: "/" }),
    }),
  }),
});
