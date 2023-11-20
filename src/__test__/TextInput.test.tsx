import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CustomInput from "../Components/CustomInput";

describe("TextInput", () => {
  it("should be rendered", () => {
    render(
      <CustomInput
        id="username"
        data-testid="usernameInput"
        type="text"
        label="username"
        labelVisible={true}
      />,
    );

    const customInput = screen.getByTestId("usernameInput");

    expect(customInput).toBeInTheDocument();

    cleanup();
  });

  it("should be able to type", async () => {
    render(
      <CustomInput
        id="username"
        data-testid="usernameInput"
        type="text"
        label="username"
        labelVisible={true}
      />,
    );

    const customInput = screen.getByTestId("usernameInput");

    await userEvent.type(customInput, "username");

    expect(customInput).toHaveValue("username");

    cleanup();
  });

  it("should render the label", () => {
    render(
      <CustomInput
        id="username"
        data-testid="usernameInput"
        type="text"
        label="Username"
        labelVisible={true}
      />,
    );

    const customInputLabel = screen.getByLabelText("Username");

    expect(customInputLabel).toBeInTheDocument();

    cleanup();
  });
});
