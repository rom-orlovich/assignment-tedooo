import React from "react";
import { Card, SxProps } from "@mui/material";

import { PostAPI } from "../../../../redux/api/postsAPI";
import PostMain from "./PostMain/PostMain";
import PostUpper from "./PostUpper/PostUpper";

const postSX: SxProps = {
  "&": {
    ".MuiCardHeader-root, .MuiCardContent-root ": {
      padding: "0",
    },
    ".MuiCardHeader-root": {
      padding: "0.5rem 0",
      " .MuiCardHeader-avatar": {
        marginRight: "0.5rem",
      },
    },
    " .MuiCardContent-root": {
      fontSize: "0.8rem",
      "&:last-child": {
        paddingBottom: "0rem",
        padding: "0rem",
      },
    },
  },
};

function Post({ id, username, avatar, date, shopName, text, images }: PostAPI) {
  const PostUpperProps = { username, avatar, date, shopName, text };
  return (
    <Card sx={postSX} key={id}>
      <PostUpper {...PostUpperProps} />
      <PostMain images={images} />
    </Card>
  );
}

export default Post;
