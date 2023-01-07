import { Box, SxProps } from "@mui/material";

import { flexDir } from "../../../../MUI/mui.utilities";
import { PickKey } from "../../../../types.utilities";
import { PostAPI } from "../../../../../redux/api/postsAPI";
import { theme } from "../../../../..";
import PostButtonsContainer from "./PostButtonsContainer";
import PostImpressions from "./PostImpressions";

export type PostFooterProps = PickKey<
  PostAPI,
  "likes" | "comments" | "didLike"
>;

function PostFooter({ didLike, ...postFooterProps }: PostFooterProps) {
  const footContainerSX: SxProps<typeof theme> = (theme) => ({
    "&.footer-container": {
      ".post-impressions": {
        ".likes-impression": {
          ...flexDir({ AI: "center", JC: "center", gap: "0.2rem" }),
          padding: "0 0.5rem",
          i: {
            width: "1rem",
            height: "1rem",
            background:
              "linear-gradient(131.96deg, #96DCD0 -8.63%, #6CCEBD -5.56%, #2DB8A1 35.83%, #28A38F 89.48%, #208171 133.94%)",
            borderRadius: "50%",
            ...flexDir({ AI: "center", JC: "center" }),
            svg: {
              color: "white",
              fontSize: "0.6rem",
            },
          },
        },
      },
      ".post-buttons-container": {
        button: {
          flex: "50%",
          fontSize: "0.8rem",
          gap: 0.5,
          color: "grey",
          "&.like-button": {
            color: didLike ? theme.palette.primary.main : "grey",
          },
          svg: {
            fontSize: "0.8rem",
          },
        },
      },
    },
  });

  return (
    <Box sx={footContainerSX} className="footer-container">
      <PostImpressions {...postFooterProps} />
      <PostButtonsContainer />
    </Box>
  );
}

export default PostFooter;
