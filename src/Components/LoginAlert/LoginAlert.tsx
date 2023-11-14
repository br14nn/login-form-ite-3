import { twMerge } from "tailwind-merge";

type TLoginAlert = {
  className: string;
  children: React.ReactNode;
};

export default function LoginAlert({ children, className }: TLoginAlert) {
  return (
    <div
      className={twMerge(
        "flex justify-center bg-gray-400 py-2 font-bold",
        className,
      )}
    >
      <p>{children}</p>
    </div>
  );
}
