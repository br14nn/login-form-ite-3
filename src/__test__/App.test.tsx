import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("App", () => {
  it("should render the App", () => {
    render(<App />);

    const main = screen.getByTestId("main");

    expect(main).toBeInTheDocument();

    cleanup();
  });

  it("should enable the button if two textboxes were typed", async () => {
    render(<App />);

    const usernameInput = screen.getByTestId("usernameInput");
    const passwordInput = screen.getByTestId("passwordInput");
    const loginButton = screen.getByTestId("loginButton");

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();

    await userEvent.type(usernameInput, "test");
    await userEvent.type(passwordInput, "test");

    expect(loginButton).toBeEnabled();

    cleanup();
  });
});
