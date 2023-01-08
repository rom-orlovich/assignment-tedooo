import App from "../App";
import { APP_ROUTES } from "./appRoutes";

export const appRouter = {
  path: "/",
  element: <App />,
  children: [
    { path: APP_ROUTES.MESSAGES_ROUTE, element: <App /> },
    { path: APP_ROUTES.NOTIFICATION_ROUTE, element: <App /> },
  ],
};
