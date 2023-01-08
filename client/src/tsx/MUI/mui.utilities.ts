/* eslint-disable import/no-extraneous-dependencies */
import { Property } from "csstype/index";

import { SystemStyleObject } from "@mui/system";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: { fontFamily: "DM Sans" },
  spacing: 8,
});
export const flexDir = ({
  flexDir,
  JC,
  AI,
  gap,
}: {
  flexDir?: Property.FlexDirection;
  JC?: Property.JustifyContent;
  AI?: Property.AlignItems;
  gap?: Property.Gap;
}): SystemStyleObject => ({
  display: "flex",
  flexDirection: flexDir || "row",
  justifyContent: JC,
  alignItems: AI,
  gap,
});
