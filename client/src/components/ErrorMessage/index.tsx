type Props = {
  isError?: boolean;
  error?: Error | { message?: string } | null;
  className?: string;
};

export const ErrorMessage: React.FC<Props> = ({
  isError,
  error,
  className,
}) => {
  return (
    <>
      {isError && error && (
        <div className={`text-sm text-destructive ${className || ''}`}>
          Error: {error.message || 'An error occurred'}
        </div>
      )}
    </>
  );
};

