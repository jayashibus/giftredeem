import React from "react";
import { render } from "@testing-library/react";
import App from "../App";
// import { rest } from "msw";
// import { server } from "./../mocks/server";

// import { getStaffDetails } from "./http/HttpService";

test("renders react app", async () => {
  render(<App />);
});
