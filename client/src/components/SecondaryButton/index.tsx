import { type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const SecondaryButton: React.FC<Props> = ({
  children,
  ...props
}) => {
  const { className } = props;

  return (
    <Button 
      {...props}
      variant={'secondary'} 
      className={cn("cursor-pointer", className)}
    >
      {children}
    </Button>
  );
}
