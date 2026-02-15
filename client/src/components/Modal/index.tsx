import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FieldGroup } from "@/components/ui/field"
import type { ReactNode } from "react"

type Props = {
  triggerElement: ReactNode;
  title: string;
  submitButtonText?: string;
  cancelButtonText?: string;
  children: ReactNode;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void | Promise<void>;
}

export const Modal: React.FC<Props> = ({
  triggerElement,
  title,
  submitButtonText='Save',
  cancelButtonText='Cancel',
  children,
  onSubmit
}) => {
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit) {
      await onSubmit(e);
      // Закриваємо модалку після успішного submit
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {triggerElement}
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <FieldGroup>
            {children}
          </FieldGroup>
          <DialogFooter>
            <Button type="submit">{submitButtonText}</Button>
            <DialogClose asChild>
              <Button 
                variant="outline" 
                type="button"
              >{cancelButtonText}</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}