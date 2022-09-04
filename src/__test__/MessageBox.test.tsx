import React from "react";
import { render, screen } from "@testing-library/react";
import MessageBox from "../component/MessageBox";
import { CONSTANTS } from "../constants";

test("Renders the MessageBox component", () => {
  const teamName = "RUST";
  const message =
    "You are Successfully redeem your team Gift. Thank you. Happy Christmas..!";

  render(
    <MessageBox
      title={`Welcome,  ${teamName}`}
      message={CONSTANTS.giftRedeemScreen.message.success}
    />
  );
  expect(screen.getByRole("heading")).toHaveTextContent("Welcome, RUST");
  expect(screen.getByText(message)).toBeInTheDocument;
});
