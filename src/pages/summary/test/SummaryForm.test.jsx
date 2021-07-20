import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";
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

  userEvent.click(checkbox);
  expect(continueButton).toBeEnabled();

  userEvent.click(checkbox);
  expect(continueButton).toBeDisabled();
});

test("Pop over response to hover", async () => {
  render(<SummaryForm />);

  const nullPopOver = screen.queryByText(
    /no ice cream be actually be delivered/i
  );
  expect(nullPopOver).not.toBeInTheDocument();

  const tnc = screen.getByText(/terms and conditions/i);
  userEvent.hover(tnc);

  const popOver = screen.getByText(/no ice cream be actually be delivered/i);
  expect(popOver).toBeInTheDocument();

  userEvent.unhover(tnc);
  await waitForElementToBeRemoved(() =>
    screen.queryByText(/no ice cream be actually be delivered/i)
  );
});
