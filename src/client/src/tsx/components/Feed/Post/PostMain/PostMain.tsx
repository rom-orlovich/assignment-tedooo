import { CardMedia, Stack } from "@mui/material";
import React from "react";

function PostMain({ images }: { images: string[] }) {
  return (
    <Stack direction={"row"}>
      {images.slice(0, 2).map((img) => (
        <CardMedia
          sx={{ minHeight: "20rem", flex: "50%" }}
          key={img}
          image={img}
          component="image"
        />
      ))}
    </Stack>
  );
}

export default PostMain;
