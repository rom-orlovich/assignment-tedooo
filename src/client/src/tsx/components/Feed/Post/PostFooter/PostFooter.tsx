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
import { green } from "@mui/material/colors";
import { flexDir } from "../../../../MUI/mui.utilites";
/* Vector */

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
      <Stack direction={"row"} justifyContent="space-between" padding={1}>
        <Typography
          component={"span"}
          sx={{ ...flexDir({ AI: "center", JC: "center", gap: "0.2rem" }) }}
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
