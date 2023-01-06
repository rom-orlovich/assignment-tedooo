import { Box, SxProps } from "@mui/material";
import React from "react";
import { postsAPI } from "../../../redux/api/postsAPI";
import Post from "./Post/Post";

function Feed() {
  const { isLoading, isFetching, data } = postsAPI.useGetPostsQuery({});

  if (isLoading || isFetching) return <>loading</>;
  const feedSX: SxProps = {
    "&": {
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
    },
  };
  return (
    <Box width={"75%"} sx={feedSX}>
      {data?.data.slice(0, 6)?.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </Box>
  );
}

export default Feed;
