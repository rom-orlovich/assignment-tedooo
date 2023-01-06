import {
  findByText,
  findByTitle,
  queryByText,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { renderUI } from "../../../../tests/utilites";
import Feed from "../Feed";

describe("test the Feed component", () => {
  let screen: ReturnType<typeof renderUI>;
  beforeEach(() => {
    screen = renderUI(<Feed />);
  });

  test("test that the Feed component loads only the first 6 posts", async () => {
    screen.debug();
    // const loading = await screen.findByText("loading");
    // expect(loading).toBeInTheDocument();
    // await waitForElementToBeRemoved(() => screen.queryByText("loading"));
    screen.debug();
    const posts = await screen.findAllByText(/likes/i);
    expect(posts.length).toBe(6);
  });

  test.todo("test that the Feed component load more the next 6 posts");
});
