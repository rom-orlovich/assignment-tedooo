import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { grey } from "@mui/material/colors/";
import { formatDistanceToNowStrict } from "date-fns";

import { PickKey } from "../../../../types.utilities";
import { PostUpperProps } from "./PostUpper";

type SubHeaderProps = PickKey<PostUpperProps, "shopName" | "username" | "date">;
function SubHeaders({ username, date, shopName }: SubHeaderProps) {
  return (
    <Stack direction={"column"} spacing={0}>
      <Typography color={"black"} fontWeight={500}>
        {shopName || username}
      </Typography>
      <Typography color={"primary"} fontWeight={600} fontSize={"0.8rem"}>
        {username}
        <Typography fontSize={"0.7rem"} component={"span"} color={grey[500]}>
          {` · ${formatDistanceToNowStrict(new Date(date))}`}
        </Typography>
      </Typography>
    </Stack>
  );
}

export default SubHeaders;
