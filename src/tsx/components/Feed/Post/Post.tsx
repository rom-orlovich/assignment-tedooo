import { Card, SxProps } from "@mui/material";

import { useInView } from "react-intersection-observer";
import { useSearchParams } from "react-router-dom";
import { PostAPI } from "../../../redux/api/postsAPI";
import PostMain from "./PostMain/PostMain";
import PostUpper from "./PostUpper/PostUpper";
import PostFooter from "./PostFooter/PostFooter";

const postSX: SxProps = {
  "&": {
    ".post-upper": {
      "*": {
        padding: 0,
      },
      padding: "0.5rem 0",
      paddingLeft: 2,

      ".MuiCardHeader-avatar": {
        marginRight: 1,
      },
    },
    ".post-text": {
      fontSize: "0.8rem",
      ":last-child": {
        padding: 0,
      },
    },
  },
};

function Post({
  id,
  username,
  avatar,
  date,
  shopName,
  text,
  images,
  likes,
  comments,
  didLike,
  index,
  el,
  userId,
}: PostAPI & { index?: number } & { el: HTMLElement | null }) {
  const PostUpperProps = { username, avatar, date, shopName, text };
  const PostFooterProps = { likes, comments, didLike };
  const [searchParams, setSearchParams] = useSearchParams();

  const { ref: cardRef } = useInView({
    root: el,
    threshold: 0.8,
    onChange: (inView) => {
      /**
   - Change the URL's queries parameters if the user has already watched the post.
   - Save the indicator if the user watched the post in the local storage.
   - When the user will watch the post again, the URL won't change.
   - Clean the local storage to recreate the above effect again.
       */
      const viewItemLocalStorage = localStorage.getItem(id);
      if (inView) {
        if (viewItemLocalStorage) setSearchParams({});
        else {
          localStorage.setItem(id, JSON.stringify(true));
          setSearchParams({ userId, itemId: id });
        }
      }
    },
  });

  return (
    <Card data-testid={`${index}-element`} sx={postSX} key={id}>
      <PostUpper {...PostUpperProps} />
      <PostMain images={images} />
      <PostFooter {...PostFooterProps} />
    </Card>
  );
}

export default Post;
