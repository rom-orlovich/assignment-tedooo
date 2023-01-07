import React from "react";
import { Card, SxProps } from "@mui/material";

import { PostAPI } from "../../../../redux/api/postsAPI";
import PostMain from "./PostMain/PostMain";
import PostUpper from "./PostUpper/PostUpper";
import PostFooter from "./PostFooter/PostFooter";

const postSX: SxProps = {
  "&": {
    ".post-upper": {
      "*": {
        padding: 0,
      },
      p: "0.5rem 0",
      pl: 2,

      ".MuiCardHeader-avatar": {
        marginRight: 1,
      },
    },
    ".post-text": {
      fontSize: "0.8rem",
      "*": {
        p: 0,
      },
    },
  },
};

function Post({
  id,
  username,
  avatar,
  date,
  shopName,
  text,
  images,
  likes,
  comments,
  didLike,
}: PostAPI) {
  const PostUpperProps = { username, avatar, date, shopName, text };
  const PostFooterProps = { likes, comments, didLike };
  return (
    <Card sx={postSX} key={id}>
      <PostUpper {...PostUpperProps} />
      <PostMain images={images} />
      <PostFooter {...PostFooterProps} />
    </Card>
  );
}

export default Post;
