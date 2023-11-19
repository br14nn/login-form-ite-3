import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  // it("should render the App", () => {
  //   render(<App />);
  //   const username = screen.getByTestId("submitButton");
  //   expect(username).toBeInTheDocument();
  // });

  it("should render the username input", () => {
    render(<App />);
    const usernameInput = screen.getByTestId("username");
    expect(usernameInput).toBeInTheDocument();
  });
});
