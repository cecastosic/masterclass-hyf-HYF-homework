import { useState } from "react";
import Products from "./components/Products";
import Header from "./components/Header";
import { NotificationsContext } from "./context/notifications";

function App() {
  const [notification, setNotification] = useState("");

  return (
    <NotificationsContext.Provider value={{ notification, setNotification }}>
      <div className="container">
        <Header />
        {notification && notification.length && (
          <div className="alert alert-primary" role="alert">
            {notification}
          </div>
        )}
        <Products />
      </div>
    </NotificationsContext.Provider>
  );
}

export default App;
