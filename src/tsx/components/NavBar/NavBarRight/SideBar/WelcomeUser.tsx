import { Typography } from "@mui/material";
import { Stack, SxProps } from "@mui/system";
import React from "react";
import { theme } from "../../../../MUI/mui.utilities";
import UserAvatar from "../UserAvatar";

const WelcomeUserSX = {
  "&": {
    ".user-avatar": {
      ml: 0,
      width: "5rem",
      height: "5rem",
    },
  },
};
function WelcomeUser() {
  return (
    <Stack gap={1} alignItems={"center"} sx={WelcomeUserSX}>
      <UserAvatar />
      <Typography fontWeight={500}>Welcome, User123! </Typography>
    </Stack>
  );
}

export default WelcomeUser;
