import React from "react";
import { Alert } from "@mui/material";

const Notification = ({ type, messgae }) => {
  return (
    <div>
      <Alert severity={type}>{messgae}</Alert>
    </div>
  );
};

export default Notification;
