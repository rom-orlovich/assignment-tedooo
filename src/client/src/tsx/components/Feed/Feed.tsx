import { Box, SxProps } from "@mui/material";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { postsAPI } from "../../../redux/api/postsAPI";
import Post from "./Post/Post";

function Feed() {
  const { isLoading, isFetching, data } = postsAPI.useGetPostsQuery({});
  const [page, setPage] = useState(0);
  if (isLoading || isFetching) return <>loading</>;
  const feedSX: SxProps = {
    "&": {
      width: "75%",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
    },
  };

  return (
    <InfiniteScroll
      pageStart={0}
      hasMore={page * 6 < (data?.data?.length || 0)}
      loadMore={(page) => {
        setPage((prePage) => prePage + 1);
      }}
    >
      <Box sx={feedSX}>
        {data?.data.slice(0 * page, 6 * page + 1)?.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </Box>
    </InfiniteScroll>
  );
}

export default Feed;
