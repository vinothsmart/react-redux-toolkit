import React, { useCallback } from "react";
import { Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/uiSlice";

const Notification = ({ type, messgae }) => {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);
  const handleClose = useCallback(() => {
    dispatch(uiActions.showNotification({ open: false }));
  }, [dispatch]);

  return (
    <div>
      {notification.open && (
        <Alert onClose={handleClose} severity={type}>
          {messgae}
        </Alert>
      )}
    </div>
  );
};

export default Notification;
