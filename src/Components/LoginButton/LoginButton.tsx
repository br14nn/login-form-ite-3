type TLoginButtonProps = {
  buttonDisabled: boolean;
};

export default function LoginButton({ buttonDisabled }: TLoginButtonProps) {
  return (
    <button
      className="h-8 rounded-md bg-green-500 hover:bg-green-700 disabled:bg-green-800"
      data-testid="submitButton"
      role="button"
      type="submit"
      disabled={buttonDisabled}
    >
      Login
    </button>
  );
}
