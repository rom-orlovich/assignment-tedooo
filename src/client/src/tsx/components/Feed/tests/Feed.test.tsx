import { renderUI } from "../../../../tests/utilites";
import Feed from "../Feed";

describe("test the Feed component", () => {
  let screen: ReturnType<typeof renderUI>;
  beforeEach(() => {
    screen = renderUI(<Feed />);
  });

  test("test that the Feed component loads only the first 6 posts", async () => {
    const posts = await screen.findAllByText(/likes/i);
    expect(posts.length).toBe(6);
  });

  test.todo("test search autocomplete input");
});
