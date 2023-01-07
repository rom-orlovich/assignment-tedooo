import { CardMedia, Stack, SxProps } from "@mui/material";
import React from "react";

function PostMain({ images }: { images: string[] }) {
  const imagesSX: SxProps = {
    "&.images-container": {
      backgroundColor: "green",
      padding: "0.5rem",
      ".image": {
        minHeight: {
          lg: "15rem",
        },
        maxHeight: {
          lg: "30rem",
        },
        flex: "48%",
        maxWidth: "75%",
      },
    },
  };
  return (
    <Stack
      direction={"row"}
      justifyContent={"center"}
      gap={1}
      sx={imagesSX}
      className={"images-container"}
    >
      {images.slice(0, 2).map((img) => (
        <CardMedia key={img} src={img} component="img" className={"image"} />
      ))}
    </Stack>
  );
}

export default PostMain;
