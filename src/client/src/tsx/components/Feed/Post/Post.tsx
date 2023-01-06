import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Stack,
  SxProps,
  Typography,
} from "@mui/material";

import { formatDistanceToNowStrict } from "date-fns";
import { grey } from "@mui/material/colors";

import { PostAPI } from "../../../../redux/api/postsAPI";

const cardSX: SxProps = {
  "&": {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",

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

function Post({ id, username, avatar, date, shopName, images, text }: PostAPI) {
  return (
    <Card sx={cardSX} key={id}>
      <Stack
        direction={"column"}
        justifyContent="center"
        spacing={1}
        paddingLeft={5}
      >
        <CardHeader
          avatar={
            <Avatar src={avatar} alt={"user avatar"} aria-label="user-avatar" />
          }
          subheader={
            <Stack direction={"column"} spacing={0}>
              <Typography color={"black"} fontWeight={500}>
                {shopName || username}
              </Typography>
              <Typography
                color={"primary"}
                fontWeight={600}
                fontSize={"0.8rem"}
              >
                {username}
                <Typography
                  fontSize={"0.7rem"}
                  component={"span"}
                  color={grey[500]}
                >
                  {` · ${formatDistanceToNowStrict(new Date(date))}`}
                </Typography>
              </Typography>
            </Stack>
          }
        />
        {text && (
          <CardContent>
            <Typography fontSize={"0.9rem"} fontWeight={400}>
              {text}
            </Typography>
          </CardContent>
        )}
      </Stack>
      <Stack direction={"row"}>
        {images.slice(0, 2).map((img) => (
          <CardMedia
            sx={{ minHeight: "20rem", flex: "50%" }}
            key={img}
            image={img}
            component={"image"}
          />
        ))}
      </Stack>
    </Card>
  );
}

export default Post;
