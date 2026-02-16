import { useState } from "react"
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
import { PrimaryButton } from "../PrimaryButton"
import { SecondaryButton } from "../SecondaryButton"

type Props = {
  triggerElement: ReactNode;
  title: string;
  submitButtonText?: string;
  cancelButtonText?: string;
  children: ReactNode;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void | Promise<void>;
}

export const FormModal: React.FC<Props> = ({
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
      try {
        await onSubmit(e);
        setOpen(false);
      } catch {}
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {triggerElement}
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-4">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <FieldGroup>
            {children}
          </FieldGroup>
          <DialogFooter>
            <PrimaryButton 
              type="submit"
            >
              {submitButtonText}
            </PrimaryButton>
            <DialogClose asChild>
              <SecondaryButton 
                type="button"
              >
                {cancelButtonText}
              </SecondaryButton>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}