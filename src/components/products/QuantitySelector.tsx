import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  min?: number;
  max?: number;
}

const QuantitySelector = ({ 
  quantity, 
  onQuantityChange, 
  min = 1, 
  max = 99 
}: QuantitySelectorProps) => {
  const handleDecrease = () => {
    if (quantity > min) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium">Quantity:</span>
      <div className="flex items-center border rounded-md">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleDecrease}
          disabled={quantity <= min}
          className="h-9 w-9 p-0 hover:bg-muted"
        >
          <Minus className="h-4 w-4" />
        </Button>
        <div className="flex h-9 w-12 items-center justify-center border-x text-sm font-medium">
          {quantity}
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleIncrease}
          disabled={quantity >= max}
          className="h-9 w-9 p-0 hover:bg-muted"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default QuantitySelector;