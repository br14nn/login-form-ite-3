import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import CustomButton from "../Components/CustomButton";

describe("Button", () => {
  it("should render the button", () => {
    render(<CustomButton>Button</CustomButton>);

    const customButton = screen.getByRole("button");

    expect(customButton).toBeInTheDocument();

    cleanup();
  });

  it("should be clicked", async () => {
    render(<App />);

    const loginButton = screen.getByTestId("loginButton");
    const usernameInput = screen.getByTestId("usernameInput");
    const passwordInput = screen.getByTestId("passwordInput");

    await userEvent.type(usernameInput, "test");
    await userEvent.type(passwordInput, "test");
    await userEvent.click(loginButton);

    const customAlertBox = screen.getByTestId("customAlertBox");
    expect(customAlertBox).toBeInTheDocument();

    cleanup();
  });

  it("should be disabled", () => {
    render(<App />);

    const loginButton = screen.getByTestId("loginButton");

    expect(loginButton).toBeDisabled();
  });

  it("should render the text inside correctly", () => {
    render(<CustomButton>Button</CustomButton>);

    const customButton = screen.getByRole("button");

    expect(customButton).toHaveTextContent("Button");
  });
});
