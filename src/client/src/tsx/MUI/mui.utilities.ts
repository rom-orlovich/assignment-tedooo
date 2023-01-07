import { Property } from "csstype/index";

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
  display: "flex",
  flexDirection: flexDir || "row",
  justifyContent: JC,
  alignItems: AI,
  gap,
});
