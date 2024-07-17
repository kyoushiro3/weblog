import { FC } from "react";
import { cn } from "../../../../libs/utils";

interface SpinnerProps {
  className?: string;
}

const Spinner: FC<SpinnerProps> = ({ className, ...props }) => (
  <div
    className={cn(
      "h-4 w-4 animate-spin rounded-full border-2 border-white-main border-t-transparent",
      className,
    )}
    {...props}
  />
);

export default Spinner;