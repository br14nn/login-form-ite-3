import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

const customInputVariants = cva(
  "h-10 rounded-md outline outline-2 outline-black/60 border-black/50 px-2 font-normal transition-all duration-300 focus:outline-black/100",
);

interface ICustomInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function CustomInput({
  className,
  ...props
}: ICustomInputProps) {
  return (
    <input
      className={twMerge(clsx(customInputVariants({ className })))}
      {...props}
    />
  );
}
