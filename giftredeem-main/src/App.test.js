import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { rest } from "msw";
import { server } from "./../mocks/server";

import { getStaffDetails } from "./http/HttpService";

test("renders react app", async () => {
  // server.resetHandlers(
  //   rest.get("http://localhost:3000/api/getStaffDetails", (req, res, ctx) =>
  //     res(ctx.status(500))
  //   ),
  //   rest.get("http://localhost:3030/api/getRedemption", (req, res, ctx) =>
  //     res(ctx.status(500))
  //   )
  // );
  // jest.spyOn(React, "useEffect").mockImplementation((f) => f());
  // jest.spyOn(getStaffDetails);
  // render(<App />);
  // // const linkElement = screen.getByText(/gift's redemption counter/i);
  // // expect(linkElement).toBeInTheDocument();
  // await waitFor(async () => {
  //   const linkElement = screen.getByText(/gift's redemption counter/i);
  //   expect(linkElement).toBeInTheDocument();
  // });
});
