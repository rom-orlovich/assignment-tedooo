import { Box, SxProps } from "@mui/material";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { PostAPI, postsAPI } from "../../../redux/api/postsAPI";
import { useAppSelector } from "../../../redux/hooks";
import { getFeedFilters } from "../../../redux/slices/feedFiltersSlice";
import Post from "./Post/Post";

export const titleFilterMatch = (title: string, searchQuery: string) =>
  title.toLowerCase()?.startsWith(searchQuery.toLowerCase());

const feedSX: SxProps = {
  "&": {
    width: "75%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    pt: "5rem",
  },
};
function Feed() {
  const { isLoading, isFetching, data } = postsAPI.useGetPostsQuery({});
  const [page, setPage] = useState(0);
  const { searchQuery } = useAppSelector(getFeedFilters);
  if (isLoading || isFetching) return <>loading</>;

  const handlePostsLoader = () => {
    setPage((page) => page + 1);
  };

  const postsList = data?.data
    .filter((post) =>
      searchQuery
        ? titleFilterMatch(post.shopName || post.username, searchQuery)
        : true
    )
    .slice(0, 6 * (page + 1))
    ?.map((post, index) => <Post key={post.id} {...post} index={index} />);

  return (
    <InfiniteScroll
      pageStart={page}
      hasMore={page * 6 < (data?.data?.length || 0)}
      loadMore={handlePostsLoader}
    >
      <Box sx={feedSX}>{postsList}</Box>
    </InfiniteScroll>
  );
}

export default Feed;
