import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { grey } from "@mui/material/colors";
import { PostFooterProps } from "./PostFooter";
import { OmitKey } from "../../../../types.utilities";

function PostImpressions({
  comments,
  likes,
}: OmitKey<PostFooterProps, "didLike">) {
  return (
    <Stack
      direction={"row"}
      justifyContent="space-between"
      padding={1}
      className="post-impressions"
    >
      <Typography component={"span"} className="likes-impression">
        <Box component={"i"}>
          <ThumbUpIcon />
        </Box>
        {likes} Likes
      </Typography>
      <Typography component={"span"} color={grey["600"]}>
        {comments} Comments
      </Typography>
    </Stack>
  );
}

export default PostImpressions;
