import { useEffect, useState } from "react";

function useNotifications(text) {
  const [notification, setNotification] = useState("");

  const createNotification = (text, sum) => {
    // hint: use setTimeout
    sum > 0 ? setNotification(text) : setNotification("Your cart is empty");
    // setTimeout(() => {
    //   if (text !== "") {
    //     //alert(text);
    //     setNotifications(text);
    //   }
    //   }, 500)
  };

  return { notification, createNotification };
}

export default useNotifications;
