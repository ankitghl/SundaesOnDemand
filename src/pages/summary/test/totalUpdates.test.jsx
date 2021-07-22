import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Options from "../entry/Options";
import { OrderDetailsProvider } from "../../../context/OrderDetails";

test("update scoop subtotal when scoop changes", async () => {
  render(<Options optionType="scoops" />, { wrapper: OrderDetailsProvider });

  const scoopSubTotal = screen.getByText("Scoops total: $", { exact: false });
  expect(scoopSubTotal).toHaveTextContent("0.00");

  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, "1");
  expect(scoopSubTotal).toHaveTextContent("2.00");

  const choclateInput = await screen.findByRole("spinbutton", {
    name: "Choclate",
  });
  userEvent.clear(choclateInput);
  userEvent.type(choclateInput, "2");
  expect(scoopSubTotal).toHaveTextContent("6.00");
});
