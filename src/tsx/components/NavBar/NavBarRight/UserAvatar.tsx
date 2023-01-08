import { Avatar } from "@mui/material";

function UserAvatar() {
  return (
    <Avatar
      className="user-avatar"
      sx={{ ml: 1 }}
      src={
        "https://images.tedooo.com/biz/62e984eca4ff286b57699578/01fda2c9-85c8-44f8-a1c7-f20a628c9dfb.jpg"
      }
    />
  );
}

export default UserAvatar;
