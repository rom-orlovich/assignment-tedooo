import { fireEvent } from "@testing-library/react";
import { mockIntersectionObserver } from "jsdom-testing-mocks";
import { renderUI } from "../../../../../tests/utilities";
import App from "../../../../App";

describe("Tests search autocomplete and the results feed", () => {
  mockIntersectionObserver();
  let screen: ReturnType<typeof renderUI>;

  beforeEach(() => {
    screen = renderUI(<App />);
  });
  const fireInputChange = (inputValue: string, container = screen) => {
    const searchInput = container.getAllByPlaceholderText(/Search/i);
    fireEvent.change(searchInput[0], { target: { value: inputValue } });
  };

  const checkInputSearchIsMatchPostsTitle = async (searchQuery: string) => {
    fireInputChange(searchQuery);
    try {
      const titles = await screen.findAllByTestId(/post-header/i);
      const checkTitleStartWith = titles.every((title) =>
        title.textContent?.toLowerCase().startsWith(searchQuery)
      );
      return { titles, checkTitleStartWith };
    } catch (error) {
      return { titles: [], checkTitleStartWith: false };
    }
  };

  test("Tests search autocomplete input that the value is start with abc and there are not results", async () => {
    const matchResult = await checkInputSearchIsMatchPostsTitle("abc");
    expect(matchResult.checkTitleStartWith).toBeFalsy();
    expect(matchResult.titles.length).toBe(0);
  });

  test("Tests that all the posts' title start with a", async () => {
    const matchResult = await checkInputSearchIsMatchPostsTitle("a");
    expect(matchResult.checkTitleStartWith).toBeTruthy();
    expect(matchResult.titles.length).toBeLessThan(6);
  });
  test("Tests after clean the search input that the results are change", async () => {
    const matchResult = await checkInputSearchIsMatchPostsTitle("n");
    const matchResult2 = await checkInputSearchIsMatchPostsTitle("");
    expect(matchResult.titles).not.toEqual(matchResult2.titles);
  });
  test("Tests that the max num results is lower than 6", async () => {
    const matchResult = await checkInputSearchIsMatchPostsTitle("n");
    expect(matchResult.checkTitleStartWith).toBeTruthy();
    expect(matchResult.titles.length).toBeLessThan(6);
  });
});
