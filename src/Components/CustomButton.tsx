import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

const customButtonVariants = cva(
  "h-10 rounded-md bg-stone-900/90 text-white transition-all duration-300 hover:bg-stone-900/100",
);

interface ICustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof customButtonVariants> {
  children?: React.ReactNode;
}

export default function CustomButton({
  children,
  className,
  ...props
}: ICustomButtonProps) {
  return (
    <button
      className={twMerge(clsx(customButtonVariants({ className })))}
      {
        ...props
        // data-testid="submitButton"
        // role="button"
      }
    >
      {children}
    </button>
  );
}
