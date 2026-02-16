import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const PrimaryButton: React.FC<Props> = ({
  children,
  ...props
}) => {
  const { className } = props;

  return (
    <Button 
      {...props}
      variant={'default'}
      className={cn("cursor-pointer", className)}
    >
      {children}
    </Button>
  );
}