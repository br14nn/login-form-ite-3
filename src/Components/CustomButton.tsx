import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

const customButtonVariants = cva(
  "h-10 rounded-md bg-stone-900/90 text-white transition-all duration-300 hover:bg-stone-900/100",
);

interface ICustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof customButtonVariants> {
  disabled?: boolean;
  children?: React.ReactNode;
}

export default function CustomButton({
  children,
  disabled,
  className,
  ...props
}: ICustomButtonProps) {
  return (
    <button
      className={twMerge(clsx(customButtonVariants({ className })))}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
