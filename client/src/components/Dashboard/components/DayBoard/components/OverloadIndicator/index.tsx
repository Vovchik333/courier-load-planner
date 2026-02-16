type Props = {
  overload: number;
};

export const OverloadIndicator: React.FC<Props> = ({ overload }) => {
  if (overload > 0) {
    return (
      <span className="text-xs text-destructive font-medium">
        over +{overload}
      </span>
    )
  }

  return null;
}
