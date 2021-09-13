import Products from "./components/Products";
import Header from "./components/Header";
import useNotifications from "./hooks/useNotification";

function App() {
  const { notification } = useNotifications();

  console.log(notification);
  return (
    <div className="container">
      <Header />
      {notification && notification.length && (
        <div className="alert alert-primary" role="alert">
          {notification}
        </div>
      )}
      <Products />
    </div>
  );
}

export default App;
