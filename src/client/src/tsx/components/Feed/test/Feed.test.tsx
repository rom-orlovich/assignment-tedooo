import { findByText, findByTitle } from "@testing-library/react";
import { renderUI } from "../../../../test/utilites";
import Feed from "../Feed";

describe("test the Feed component", () => {
  let screen: ReturnType<typeof renderUI>;
  beforeEach(() => {
    screen = renderUI(<Feed />);
  });

  test("test that the Feed component loads only the first 6 posts", async () => {
    const posts = await screen.findAllByText("likes");
    expect(posts.length).toBe(6);
  });

  test.todo(
    "test that the Feed component load more the next 6 posts",
    async () => {}
  );
});
