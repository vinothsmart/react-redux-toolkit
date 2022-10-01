export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        open: true,
        message: "Sending Request",
        type: "warning",
      })
    );
    const sendRequest = async () => {
      // Send state as Sending Request
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
    try {
      await sendRequest();
    } catch (err) {
      // Send state as Request Failed
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sending Request Failed",
          type: "error",
        })
      );
    }
  };
};
