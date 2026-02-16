import { cn } from "@/lib/utils"

export type SelectOption = {
  value: string;
  label: string;
};

type CustomSelectProps = {
  name: string;
  options: SelectOption[];
  defaultValue?: string | null;
  required?: boolean;
  isLoading?: boolean;
  isError?: boolean;
  errorMessage?: string;
  loadingMessage?: string;
  disabled?: boolean;
  className?: string;
};

export const CustomSelect: React.FC<CustomSelectProps> = ({
  name,
  options,
  defaultValue,
  required = false,
  isLoading = false,
  isError = false,
  errorMessage = "Failed to load data",
  loadingMessage = "Loading...",
  disabled = false,
  className,
}) => {
  if (isLoading) {
    return (
      <div className="h-9 flex items-center text-sm text-muted-foreground">
        {loadingMessage}
      </div>
    );
  }

  return (
    <>
      <select
        id={name}
        name={name}
        defaultValue={defaultValue ?? ""}
        required={required}
        disabled={disabled || isError}
        className={cn(
          "h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] md:text-sm",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {isError && (
        <div className="text-xs text-destructive mt-1">{errorMessage}</div>
      )}
    </>
  );
};
