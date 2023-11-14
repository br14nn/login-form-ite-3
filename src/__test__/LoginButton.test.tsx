import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import LoginButton from "../Components/LoginButton/LoginButton";

describe("Button", () => {
  it("should render the login button", () => {
    render(<LoginButton buttonDisabled={true} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("should render the Disabled Button", () => {
    render(<LoginButton buttonDisabled={true} />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });
});
