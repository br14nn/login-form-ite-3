import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CustomButton from "../Components/CustomButton";

describe("Button", () => {
  it("should render the button", () => {
    render(<CustomButton>Button</CustomButton>);

    const customButton = screen.getByRole("button");

    expect(customButton).toBeInTheDocument();

    cleanup();
  });

  it("should be clicked", async () => {
    const handleClick = jest.fn();
    render(
      <CustomButton onClick={handleClick} data-testid="testButton">
        Button
      </CustomButton>,
    );

    const customButton = screen.getByTestId("testButton");

    await userEvent.click(customButton);

    expect(handleClick).toHaveBeenCalled();

    cleanup();
  });

  it("should be disabled", () => {
    render(
      <CustomButton data-testid="testButton" disabled={true}>
        Button
      </CustomButton>,
    );

    const customButton = screen.getByTestId("testButton");

    expect(customButton).toBeDisabled();
  });

  it("should render the text inside correctly", () => {
    render(<CustomButton>Button</CustomButton>);

    const customButton = screen.getByRole("button");

    expect(customButton).toHaveTextContent("Button");
  });
});
