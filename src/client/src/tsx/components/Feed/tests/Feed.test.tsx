import { fireEvent } from "@testing-library/react";
import { renderUI } from "../../../../tests/utilites";
import App from "../../../App";
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

  test("test search autocomplete input", async () => {
    screen = renderUI(<></>);

    const searchInput = screen.getAllByPlaceholderText(/Search/i);
    fireEvent.change(searchInput[0], { target: { value: "a" } });
    const posts = await screen.findAllByTestId(/post-header/i);
    expect((posts[0].textContent?.toLowerCase() || "")[0]).toBe("a");
  });
});
