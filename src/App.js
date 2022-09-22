import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { uiActions } from "./store/uiSlice";

let isFirstRender = true;

function App() {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);
  const cart = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    const sendRquest = async () => {
      // Send state as Sending Request
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sending Request",
          type: "warning",
        })
      );
      const res = await fetch(
        "https://redux-http-bc782-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      await res.json();
      // Send state as Request is Successful
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sent Request To Database Successfully",
          type: "success",
        })
      );
    };
    sendRquest().catch((_err) => {
      // Send state as Request Failed
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sending Request Failed",
          type: "error",
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <div className="App">
      {notification && (
        <Notification type={notification.type} messgae={notification.message} />
      )}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
