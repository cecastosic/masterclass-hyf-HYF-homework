import { useContext } from "react";
import { NotificationsContext } from "../context/notifications";

function useNotifications() {
  const { notification, setNotification } = useContext(NotificationsContext);

  const createNotification = (text, sum) => {
    sum > 0
      ? setTimeout(() => {
          setNotification(
            `Your order with the total sum of ${sum} DKK has been made. The invoice will be sent to ${text}.`
          );
        }, 500)
      : setNotification("Your cart is empty");
    setTimeout(() => {
      setNotification("");
    }, 10000);
  };

  return { notification, createNotification };
}

export default useNotifications;
