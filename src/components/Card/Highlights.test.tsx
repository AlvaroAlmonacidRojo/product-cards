import { render, screen, within } from "@testing-library/react";

import Highlights from "./Highlights";

beforeEach(() => {
  console.error = jest.fn();
});

test("renders Highlights ", async () => {
  const highlights = [
    {
      title: "Chobe National Park",
      url: "Test url",
    },
    {
      title: "Victoria Falls",
      url: "Test url",
    },
  ];
  render(<Highlights highlights={highlights} />);
  const list = screen.getByRole("list");
  const items = within(list).getAllByRole("listitem");
  expect(items).toHaveLength(highlights.length);
});

test("renders slice Highlights ", async () => {
  const highlights = [
    {
      title: "Chobe National Park",
      url: "Test url",
    },
    {
      title: "Victoria Falls",
      url: "Test url",
    },
    {
      title: "Deadvlei",
      url: "Test url",
    },
    {
      title: "Dune 45",
      url: "Test url",
    },
    {
      title: "Deadvlei",
      url: "Test url",
    },
    {
      title: "Deadvlei",
      url: "Test url",
    },
    {
      title: "Deadvlei",
      url: "Test url",
    },
  ];
  render(<Highlights highlights={highlights} />);
  const list = screen.getByRole("list");
  const items = within(list).getAllByRole("listitem");
  expect(items).toHaveLength(4);
});
