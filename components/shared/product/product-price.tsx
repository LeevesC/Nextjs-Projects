import { cn } from "@/lib/utils";

const ProductPrice = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  const stringValue = value.toFixed(2);
  const [intValue, decimalValue] = stringValue.split(".");

  return (
    <p className={cn("text-2xl", className)}>
      <span className="text-xs align-supere">$</span>
      {intValue}
      <span className="text-xs align-supere">.{decimalValue}</span>
    </p>
  );
};

export default ProductPrice;
