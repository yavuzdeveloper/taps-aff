import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

beforeEach(() => {
  render(<App />);
});

test("renders headerTitle", () => {
  const headerTitle = screen.getByText(/taps aff oan/i);
  expect(headerTitle).toBeInTheDocument();
});

test("renders scotlandTitle", () => {
  const scotlandTitle = screen.getByText(/scotland/i);
  expect(scotlandTitle).toBeInTheDocument();
});

test("renders imgs without onClick", () => {
  const heading = screen.getByRole("heading", { name: /edinburgh 16 ℃ sun/i });
  within(heading).getByRole("img", { name: /sun/i });

  screen.getByRole("heading", { name: /aberdeen 10 ℃ rain/i });
  screen.getByRole("img", { name: /rain/i });

  screen.getByRole("img", {
    name: /cloudsunny/i,
  });
  screen.getByRole("img", { name: /cloudsunny/i });
});

test("renders imgs with onClick", () => {
  const tapsAffOan = screen.getByRole("button", { name: /taps aff oan/i });
  userEvent.click(tapsAffOan);

  screen.getByRole("img", { name: /clothes/i });
  screen.getByRole("img", { name: /person/i });
  screen.getByRole("img", { name: /shirt/i });
});
