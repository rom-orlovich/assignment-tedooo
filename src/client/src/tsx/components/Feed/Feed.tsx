import { Box, SxProps } from "@mui/material";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { postsAPI } from "../../../redux/api/postsAPI";
import { useAppSelector } from "../../../redux/hooks";
import { getFeedFilters } from "../../../redux/slices/feedFiltersSlice";
import Post from "./Post/Post";

function Feed() {
  const { isLoading, isFetching, data } = postsAPI.useGetPostsQuery({});
  const [page, setPage] = useState(0);
  const { searchValue } = useAppSelector(getFeedFilters);
  if (isLoading || isFetching) return <>loading</>;
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

  return (
    <InfiniteScroll
      pageStart={page}
      hasMore={page * 6 < (data?.data?.length || 0)}
      loadMore={() => {
        setPage((page) => page + 1);
      }}
    >
      <Box sx={feedSX}>
        {data?.data
          .filter((post) =>
            searchValue
              ? (post.shopName || post.username)
                  .toLowerCase()
                  ?.startsWith(searchValue.toLowerCase())
              : true
          )
          .slice(0, 6 * (page + 1))
          ?.map((post, index) => (
            <Post key={post.id} {...post} index={index} />
          ))}
      </Box>
    </InfiniteScroll>
  );
}

export default Feed;
