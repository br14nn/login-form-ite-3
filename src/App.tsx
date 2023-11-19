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
  visibility: "hidden" | "show";
  content: string;
}

export default function () {
  const [loginDetails, setLoginDetails] = useState<ILoginDetails>({
    username: "",
    password: "",
  });
  const [alertBox, setAlertBox] = useState<IAlertBox>({
    variant: "error",
    visibility: "hidden",
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
        visibility: "show",
      });
    } else if (
      usernameInput !== defaultUsername ||
      passwordInput !== defaultPassword
    ) {
      setAlertBox({
        variant: "error",
        content: "Incorrect username or password",
        visibility: "show",
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
    <main className="min-h-screen w-full min-w-[300px] bg-gray-800 pt-32">
      <form
        className="mx-auto flex w-full min-w-[300px] max-w-[450px] flex-col rounded-md bg-white p-6"
        onSubmit={handleSubmit}
      >
        <CustomAlertBox
          className="mb-4 border-2 border-yellow-500"
          variant={alertBox.variant}
          visibility={alertBox.visibility}
        >
          {alertBox.content}
        </CustomAlertBox>

        <div className="flex flex-col text-lg font-semibold">
          <label htmlFor="username ">Username</label>
          <CustomInput
            id="username"
            data-testid="usernameInput"
            type="text"
            autoComplete="off"
            onChange={handleChange}
            value={loginDetails.username}
          />
        </div>

        <div className="mt-2 flex flex-col text-lg font-semibold">
          <label htmlFor="password">Password</label>
          <CustomInput
            id="password"
            data-testid="passwordInput"
            type="password"
            onChange={handleChange}
            value={loginDetails.password}
          />
        </div>

        <CustomButton
          className="mt-5 disabled:cursor-not-allowed disabled:bg-black/60"
          disabled={buttonDisabled}
        >
          Login
        </CustomButton>
      </form>
    </main>
  );
}
