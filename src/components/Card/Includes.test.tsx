import { render, screen, within } from "@testing-library/react";

import Includes from "./Includes";

test("renders Includes ", async () => {
  const includes = [
    "ACCOMMODATION",
    "ALL_FLIGHTS",
    "ALL_TRANSFERS",
    "SOME_MEALS",
    "ACTIVITIES",
  ];
  render(<Includes includes={includes} />);
  const list = screen.getByRole("list");
  const items = within(list).getAllByRole("listitem");
  expect(items).toHaveLength(includes.length);
});
