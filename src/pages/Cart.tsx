import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/contexts/CartContext";
import BitcoinPayment from "@/components/BitcoinPayment";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { state, dispatch } = useCart();

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity } });
  };

  const handleRemoveItem = (productId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { productId } });
  };

  if (state.items.length === 0) {
    return (
      <main className="container mx-auto py-10">
        <SEO title="Shopping Cart — Pills4Sale UK" description="Review your selected pharmaceutical products before checkout." />
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
        <div className="mt-8 text-center">
          <p className="text-muted-foreground mb-4">Your cart is empty</p>
          <Button asChild>
            <Link to="/products">Continue Shopping</Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto py-10">
      <SEO title="Shopping Cart — Pills4Sale UK" description="Review your selected pharmaceutical products before checkout." />
      <h1 className="text-3xl font-bold">Shopping Cart</h1>
      
      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Cart Items</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {state.items.map((item) => (
                <div key={item.product.slug} className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-2">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name}
                      className="w-full h-16 object-cover rounded"
                    />
                  </div>
                  <div className="col-span-4">
                    <h3 className="font-semibold">{item.product.name}</h3>
                    <p className="text-sm text-muted-foreground">£{item.product.price} each</p>
                  </div>
                  <div className="col-span-3 flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => handleUpdateQuantity(item.product.slug, item.quantity - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => handleUpdateQuantity(item.product.slug, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="col-span-2 text-right">
                    <span className="font-semibold">£{(item.product.price * item.quantity).toFixed(2)}</span>
                  </div>
                  <div className="col-span-1 text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-destructive hover:text-destructive"
                      onClick={() => handleRemoveItem(item.product.slug)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Items ({state.totalItems})</span>
                <span>£{state.totalPrice.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>£{state.totalPrice.toFixed(2)}</span>
              </div>
              
              <div className="mt-6">
                <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 mb-4">
                  <h3 className="font-semibold text-amber-800">Payment Method</h3>
                  <p className="mt-1 text-sm text-amber-700">
                    We accept Bitcoin payments. The payment details will be generated below.
                  </p>
                </div>
                
                <BitcoinPayment cartItems={state.items} />
              </div>
              
              <Button asChild variant="outline" className="w-full">
                <Link to="/products">Continue Shopping</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Cart;