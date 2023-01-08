import { Box, Divider, SxProps } from "@mui/material";

import { grey } from "@mui/material/colors";
import { flexDir, theme } from "../../../../MUI/mui.utilities";
import { PickKey } from "../../../../types.utilities";
import { PostAPI } from "../../../../../redux/api/postsAPI";

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
        padding: "0.5rem 2rem",

        ".likes-impression": {
          ...flexDir({ AI: "center", JC: "center", gap: "0.4rem" }),
          padding: "0 0.5rem",
          fontSize: "0.9rem",
          color: grey["600"],
          i: {
            width: "1.2rem",
            height: "1.2rem",

            background:
              "linear-gradient(131.96deg, #96DCD0 -8.63%, #6CCEBD -5.56%, #2DB8A1 35.83%, #28A38F 89.48%, #208171 133.94%)",
            borderRadius: "50%",
            ...flexDir({ AI: "center", JC: "center" }),
            svg: {
              color: "white",
              fontSize: "0.7rem",
            },
          },
        },
        ".post-comments": {
          fontSize: "0.9rem",
        },
      },
      ".footer-divider": { width: "93%", margin: "0 auto" },
      ".post-buttons-container": {
        padding: "0.5rem 0",
        button: {
          flex: "50%",
          fontSize: "0.8rem",
          gap: 0.7,
          color: "grey",
          "&.like-button": {
            color: didLike ? theme.palette.primary.dark : "grey",
          },
          svg: {
            fontSize: "1.2rem",
          },
        },
      },
    },
  });

  return (
    <Box sx={footContainerSX} className="footer-container">
      <PostImpressions {...postFooterProps} />
      <Divider className="footer-divider" />
      <PostButtonsContainer />
    </Box>
  );
}

export default PostFooter;
