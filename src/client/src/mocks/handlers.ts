import { rest } from "msw";

export const handlers = [rest.get("*/", (req, res, ctx) => {})];
