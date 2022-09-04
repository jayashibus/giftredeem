import React from "react";

type IMessageBox = {
  title: string;
  message: string;
};

const MessageBox = ({ title, message }: IMessageBox) => {
  return (
    <>
      <h1>Welcome, {title} </h1>
      <p>{message}</p>
    </>
  );
};

export default MessageBox;
