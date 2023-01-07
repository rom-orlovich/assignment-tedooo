import { Property } from "csstype/index";
import { SxProps } from "@mui/material";
import { SystemStyleObject } from "@mui/system";

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
  flex: "flex",
  flexDirection: flexDir || "row",
  justifyContent: JC,
  alignItems: AI,
  gap,
});
