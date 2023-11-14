import { useState, useEffect } from "react";
import defaultUser from "../../utils/defaultUser";

import CustomInput from "../CustomInput/CustomInput";
import LoginAlert from "../LoginAlert/LoginAlert";
import LoginButton from "../LoginButton/LoginButton";

type TLoginDetails = {
  username: string;
  password: string;
};

export default function LoginForm() {
  const [loginDetails, setLoginDetails] = useState<TLoginDetails>({
    username: "",
    password: "",
  });
  const [buttonState, setbuttonState] = useState<boolean>(true);
  const [loginSuccess, setLoginSuccess] = useState<boolean | null>(null);

  useEffect(() => {
    if (loginDetails.username && loginDetails.password) {
      setbuttonState(false);
    } else if (!loginDetails.username || !loginDetails.password) {
      setbuttonState(true);
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setLoginDetails((oldVal) => ({
      ...oldVal,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      loginDetails.username === defaultUser.username &&
      loginDetails.password === defaultUser.password
    ) {
      setLoginSuccess(true);
    } else {
      setLoginSuccess(false);
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="mx-auto flex w-[30%] min-w-[350px] flex-col gap-4 rounded-md bg-white p-6"
    >
      {loginSuccess && (
        <LoginAlert className="bg-green-500">Login Success</LoginAlert>
      )}
      {loginSuccess === false && (
        <LoginAlert className="bg-red-500">Login Failed</LoginAlert>
      )}

      <div className="flex flex-col gap-2">
        <CustomInput
          id="username"
          label="Username"
          type="text"
          onChange={handleChange}
          value={loginDetails.username}
        />
        <CustomInput
          id="password"
          label="Password"
          type="password"
          onChange={handleChange}
          value={loginDetails.password}
        />
      </div>

      <LoginButton buttonDisabled={buttonState} />
    </form>
  );
}
