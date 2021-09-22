import { createContext } from "react";

export const NotificationsContext = createContext({
  notification: "",
  setNotification: () => {},
});
