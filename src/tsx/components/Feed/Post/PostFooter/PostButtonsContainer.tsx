import { Button, Stack } from "@mui/material";
import React from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

function PostButtonsContainer() {
  return (
    <Stack direction={"row"} className="post-buttons-container">
      <Button sx={{ color: "blue" }} className="like-button">
        <ThumbUpOffAltIcon /> Like
      </Button>

      <Button>
        <ChatBubbleOutlineIcon /> Comment
      </Button>
    </Stack>
  );
}

export default PostButtonsContainer;
