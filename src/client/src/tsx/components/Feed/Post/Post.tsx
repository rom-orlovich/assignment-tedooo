import React from "react";
import { Card, SxProps } from "@mui/material";

import { PostAPI } from "../../../../redux/api/postsAPI";
import PostMain from "./PostMain/PostMain";
import PostUpper from "./PostUpper/PostUpper";
import PostFooter from "./PostFooter/PostFooter";

const postSX: SxProps = {
  "&": {
    ".MuiCardHeader-root, .MuiCardContent-root ": {
      padding: "0",
    },
    ".MuiCardHeader-root": {
      padding: "0.5rem 0",
      " .MuiCardHeader-avatar": {
        marginRight: 1,
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
