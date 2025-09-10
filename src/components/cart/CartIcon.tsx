import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";

const CartIcon = () => {
  const { state } = useCart();

  return (
    <Button asChild variant="ghost" className="relative">
      <Link to="/cart">
        <ShoppingCart className="h-5 w-5" />
        {state.totalItems > 0 && (
          <Badge 
            variant="destructive" 
            className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
          >
            {state.totalItems}
          </Badge>
        )}
      </Link>
    </Button>
  );
};

export default CartIcon;