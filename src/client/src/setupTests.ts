import { setupServer } from "msw/node";

import "@testing-library/jest-dom";
import { handlers } from "./mocks/handlers";

export const server = setupServer(...handlers);

beforeEach(() => {
  server.listen();
});
afterEach(() => server.resetHandlers());
afterAll(() => {
  server.close();
});
