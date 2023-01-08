import { renderUI } from "../../../tests/utilities";

import Feed from "./Feed";

describe("Tests the Feed component", () => {
  let screen: ReturnType<typeof renderUI>;
  beforeEach(() => {
    screen = renderUI(<Feed />, ["/"]);
  });

  test("Tests that the Feed component loads only the first 6 posts", async () => {
    const posts = await screen.findAllByText(/likes/i);
    expect(posts.length).toBe(6);
  });

  test.todo(
    "Tests that the Feed component loads the next 6 posts- to do it with Cypress"
  );
});
