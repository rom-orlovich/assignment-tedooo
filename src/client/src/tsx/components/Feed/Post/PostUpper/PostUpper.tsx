import {
  Avatar,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from "@mui/material";
import { PostAPI } from "../../../../../redux/api/postsAPI";
import { PickKey } from "../../../../types.utilities";
import SubHeaders from "./SubHeaders";

export type PostUpperProps = PickKey<
  PostAPI,
  "avatar" | "username" | "date" | "text" | "shopName"
>;

function PostUpper({ avatar, shopName, username, date, text }: PostUpperProps) {
  const SubHeaderProps = { shopName, username, date };
  const avatarEl = (
    <Avatar src={avatar} alt={"user avatar"} aria-label="user-avatar" />
  );
  const cardContent = (
    <CardContent>
      <Typography fontSize={"0.9rem"} fontWeight={400}>
        {text}
      </Typography>
    </CardContent>
  );

  return (
    <Stack
      direction={"column"}
      justifyContent="center"
      spacing={1}
      paddingLeft={2}
    >
      <CardHeader
        avatar={avatarEl}
        subheader={<SubHeaders {...SubHeaderProps} />}
      />
      {text && cardContent}
    </Stack>
  );
}

export default PostUpper;
