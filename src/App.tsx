import { useState, useEffect } from "react";

import CustomButton from "./Components/CustomButton";
import CustomInput from "./Components/CustomInput";
import CustomAlertBox from "./Components/CustomAlertBox";

import defaultUser from "./db/defaultUser";

interface ILoginDetails {
  username: string;
  password: string;
}

interface IAlertBox {
  variant: "error" | "success";
  visible: boolean;
  content: string;
}

export default function () {
  const [loginDetails, setLoginDetails] = useState<ILoginDetails>({
    username: "",
    password: "",
  });
  const [alertBox, setAlertBox] = useState<IAlertBox>({
    variant: "error",
    visible: false,
    content: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (loginDetails.username && loginDetails.password) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { username: usernameInput, password: passwordInput } = loginDetails;
    const { username: defaultUsername, password: defaultPassword } =
      defaultUser;

    if (
      usernameInput === defaultUsername &&
      passwordInput === defaultPassword
    ) {
      setAlertBox({
        variant: "success",
        content: "Login Success",
        visible: true,
      });
    } else if (
      usernameInput !== defaultUsername ||
      passwordInput !== defaultPassword
    ) {
      setAlertBox({
        variant: "error",
        content: "Incorrect username or password",
        visible: true,
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.currentTarget;

    setLoginDetails((oldVal) => ({
      ...oldVal,
      [id]: value,
    }));
  };

  return (
    <main
      className="min-h-screen w-full min-w-[300px] bg-gray-800 pt-32"
      data-testid="main"
    >
      <form
        className="mx-auto flex w-full min-w-[300px] max-w-[450px] flex-col rounded-md bg-white p-6"
        onSubmit={handleSubmit}
      >
        {alertBox.visible && (
          <CustomAlertBox
            data-testid="customAlertBox"
            className="mb-4 border-2 border-yellow-500"
            variant={alertBox.variant}
          >
            {alertBox.content}
          </CustomAlertBox>
        )}

        <CustomInput
          id="username"
          label="Username"
          data-testid="usernameInput"
          type="text"
          autoComplete="off"
          onChange={handleChange}
          value={loginDetails.username}
          labelVisible={true}
        />

        <CustomInput
          id="password"
          data-testid="passwordInput"
          type="password"
          label="Password"
          onChange={handleChange}
          value={loginDetails.password}
          labelVisible={true}
        />

        <CustomButton
          className="mt-5 disabled:cursor-not-allowed disabled:bg-black/60"
          data-testid="loginButton"
          disabled={buttonDisabled}
        >
          Login
        </CustomButton>
      </form>
    </main>
  );
}
