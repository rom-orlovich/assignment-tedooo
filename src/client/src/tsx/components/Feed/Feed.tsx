import React from "react";
import { postsAPI } from "../../../redux/api/postsAPI";

function Feed() {
  const { isLoading, isError, isFetching, data, isSuccess } =
    postsAPI.useGetPostsQuery({});
  // fetch("https://dev.tedooo.com/feed.json")
  //   .then((res) => res.json())
  //   .then(console.log);

  if (isLoading || isFetching) return <>loading</>;

  return (
    <div>
      {data?.data.slice(0, 6)?.map((el) => (
        <li key={el.id}>likes{el.likes}</li>
      ))}
    </div>
  );
}

export default Feed;
