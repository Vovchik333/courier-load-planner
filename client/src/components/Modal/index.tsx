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
}

export const Modal: React.FC<Props> = ({
  triggerElement,
  title,
  submitButtonText='Save',
  cancelButtonText='Cancel',
  children
}) => {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          {triggerElement}
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <FieldGroup>
            {children}
          </FieldGroup>
          <DialogFooter>
            <Button type="submit">{submitButtonText}</Button>
            <DialogClose asChild>
              <Button variant="outline">{cancelButtonText}</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}