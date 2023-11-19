import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

const customAlertBoxVariants = cva(
  "flex items-center justify-center p-2 font-bold rounded-md text-white",
  {
    variants: {
      variant: {
        error: "bg-red-500",
        success: "bg-green-500",
      },
      visibility: {
        hidden: "hidden",
        show: "flex",
      },
    },
    defaultVariants: {
      variant: "error",
      visibility: "hidden",
    },
  },
);

interface ICustomAlertBox
  extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof customAlertBoxVariants> {
  children?: React.ReactNode;
}

export default function CustomAlertBox({
  className,
  variant,
  visibility,
  children,
  ...props
}: ICustomAlertBox) {
  return (
    <div
      className={twMerge(
        clsx(customAlertBoxVariants({ variant, visibility, className })),
      )}
      {...props}
    >
      {children}
    </div>
  );
}
