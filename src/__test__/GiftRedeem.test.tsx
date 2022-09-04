import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import GiftRedeem, { findStaffRecord } from "../component/GiftRedeem";

const data = [
  {
    staff_pass_id: "STAFF_H123804820G",
    team_name: "BASS",
    created_at: "1623772799000",
  },
  {
    staff_pass_id: "MANAGER_H123804820G",
    team_name: "RUST",
    created_at: "1623772799000",
  },
  {
    staff_pass_id: "BOSS_H123804820G",
    team_name: "RUST",
    created_at: "1623772799000",
  },
];
describe("<GiftRedeem />", () => {
  test("renders component", () => {
    const { container } = render(<GiftRedeem data={data} />);
    expect(container).toMatchSnapshot();
  });
  test("Should render buttons", () => {
    render(<GiftRedeem data={data} />);

    expect(
      screen.getByText(
        "Christmas season begins. Connected with us and send your representative to redeem your Team gift's. Thanks you."
      )
    ).toBeInTheDocument;

    const submitButton = expect(
      screen.findByRole("button", { name: /Verify/i })
    );
    const redeemButton = expect(
      screen.findByRole("button", { name: /Redeem Gift/i })
    );
    const serveNewButton = expect(
      screen.findByRole("button", { name: /Serve New Team/i })
    );
  });
});

describe("Find the Staff Account", () => {
  test("Find staff details", () => {
    expect(findStaffRecord(data, "STAFF_H123804820GSS")).toBeTruthy();
  });
});
