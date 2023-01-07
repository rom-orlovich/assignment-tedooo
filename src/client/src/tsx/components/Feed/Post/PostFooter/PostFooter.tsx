import {
  Box,
  Button,
  IconButton,
  Stack,
  SxProps,
  Typography,
} from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";

import { grey } from "@mui/material/colors";
import { flexDir } from "../../../../MUI/mui.utilities";
import { PickKey } from "../../../../types.utilities";
import { PostAPI } from "../../../../../redux/api/postsAPI";
import { theme } from "../../../../..";

export type PostFooterProps = PickKey<
  PostAPI,
  "likes" | "comments" | "didLike"
>;

function PostFooter({ comments, didLike, likes }: PostFooterProps) {
  const buttonContainerSX: SxProps<typeof theme> = (theme) => ({
    "&": {
      ".MuiButtonBase-root": {
        flex: "50%",
        fontSize: "0.8rem",
        gap: 0.5,
        color: "grey",
        "&.like-button": {
          color: didLike ? theme.palette.primary.main : "grey",
        },
        ".MuiSvgIcon-root": {
          fontSize: "0.8rem",
        },
      },
    },
  });
  return (
    <>
      <Stack direction={"row"} justifyContent="space-between" padding={1}>
        <Typography
          component={"span"}
          sx={{
            ...flexDir({ AI: "center", JC: "center", gap: "0.2rem" }),
            padding: "0 0.5rem",
          }}
        >
          <Box
            component={"i"}
            sx={{
              width: "1rem",
              height: "1rem",
              background:
                "linear-gradient(131.96deg, #96DCD0 -8.63%, #6CCEBD -5.56%, #2DB8A1 35.83%, #28A38F 89.48%, #208171 133.94%)",
              borderRadius: "50%",
              ...flexDir({ AI: "center", JC: "center" }),
            }}
          >
            <ThumbUpIcon
              sx={{
                color: "white",
                fontSize: "0.6rem",
              }}
            />
          </Box>
          {likes} Likes
        </Typography>
        <Typography component={"span"} color={grey["600"]}>
          {comments} Comments
        </Typography>
      </Stack>
      <Stack direction={"row"} sx={buttonContainerSX}>
        <Button sx={{ color: "blue" }} className={"like-button"}>
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
