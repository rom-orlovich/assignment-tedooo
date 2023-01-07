import App from "../App";

export enum APP_ROUTES {
  MESSAGES_ROUTE = "messages",
  NOTIFICATION_ROUTE = "notifications",
}
export const appRouter = {
  path: "/",
  element: <App />,
  children: [
    { path: APP_ROUTES.MESSAGES_ROUTE, element: <App /> },
    { path: APP_ROUTES.NOTIFICATION_ROUTE, element: <App /> },
  ],
};
