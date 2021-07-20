import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test("Initial conditions", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  expect(checkbox).not.toBeChecked();

  const continueButton = screen.getByRole("button", { name: /confirm order/i });
  expect(continueButton).toBeDisabled();
});

test("Checkbox enables button on first click and disable on second click", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const continueButton = screen.getByRole("button", { name: /confirm order/i });

  fireEvent.click(checkbox);
  expect(continueButton).toBeEnabled();

  fireEvent.click(checkbox);
  expect(continueButton).toBeDisabled();
});
