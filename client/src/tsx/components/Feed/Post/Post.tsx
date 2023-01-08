import { Card, SxProps } from "@mui/material";

import { useInView } from "react-intersection-observer";
import { useSearchParams } from "react-router-dom";
import { PostAPI } from "../../../../redux/api/postsAPI";
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
      // If the post hasn't watched yet by the user, the url's queries params change to
      // ?userId={userId}&itemId={id}.
      // The data if the user has watched the post is saved in the local storage
      // and the next time the user will enter the page again, the url's queries will be empty
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
    <Card ref={cardRef} data-testid={`${index}-element`} sx={postSX} key={id}>
      <PostUpper {...PostUpperProps} />
      <PostMain images={images} />
      <PostFooter {...PostFooterProps} />
    </Card>
  );
}

export default Post;
