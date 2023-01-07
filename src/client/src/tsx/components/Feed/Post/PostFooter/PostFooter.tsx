import { Button, Stack, SxProps, Typography } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

import ThumbUpOffAltRoundedIcon from "@mui/icons-material/ThumbUpOffAltRounded";

function PostFooter() {
  const buttonContainerSX: SxProps = {
    "&": {
      ".MuiButtonBase-root": {
        flex: "50%",
        fontSize: "0.8rem",
        gap: 0.5,
        color: "grey",
        ".MuiSvgIcon-root": {
          fontSize: "0.8rem",
        },
      },
    },
  };
  return (
    <>
      <Stack direction={"row"} justifyContent="space-between">
        <Typography component={"span"}>
          <ThumbUpOffAltRoundedIcon
            sx={{ backgroundColor: "green", color: "white" }}
          />{" "}
          500 Likes
        </Typography>
        <Typography component={"span"}> 6 Comments </Typography>
      </Stack>
      <Stack direction={"row"} sx={buttonContainerSX}>
        <Button>
          <ThumbUpOffAltIcon /> Like
        </Button>

        <Button>
          <ChatBubbleOutlineIcon /> Comment
        </Button>
      </Stack>
    </>
  );
}

export default PostFooter;
