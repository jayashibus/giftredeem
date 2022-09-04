import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import Form from "../component/Form";

const props = {
  validStaff: true,
  staffId: "STAFF_H123804820G",
  team_name: "RUST",
  error: "",
  onSubmit: () => {},
  onChange: () => {},
};
describe("<Form />", () => {
  test("renders component", () => {
    const { container } = render(<Form {...props} />);
    expect(container).toMatchSnapshot();
  });
});
