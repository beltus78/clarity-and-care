import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Copy, Check, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Product } from "@/data/products";

interface BitcoinPaymentProps {
  product: Product;
}

const BitcoinPayment = ({ product }: BitcoinPaymentProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  
  // Bitcoin wallet address - replace with your actual address
  const bitcoinAddress = "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh";
  
  // Calculate Bitcoin amount (simplified - in real implementation, use live BTC/GBP rates)
  const btcPrice = 45000; // GBP per BTC (should be fetched from API)
  const btcAmount = (product.price / btcPrice).toFixed(8);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast({ title: "Copied to clipboard" });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({ title: "Failed to copy", variant: "destructive" });
    }
  };

  const openBlockchainExplorer = () => {
    window.open(`https://blockstream.info/address/${bitcoinAddress}`, '_blank');
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="hero" className="flex-1">
          Pay with Bitcoin
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Bitcoin Payment</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="text-center">
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-2xl font-bold text-primary">£{product.price}</p>
            <p className="text-sm text-muted-foreground">≈ {btcAmount} BTC</p>
          </div>
          
          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium">Bitcoin Address:</label>
              <div className="mt-1 flex items-center gap-2 p-2 bg-muted rounded-md">
                <code className="text-xs flex-1 break-all">{bitcoinAddress}</code>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(bitcoinAddress)}
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium">Amount:</label>
              <div className="mt-1 flex items-center gap-2 p-2 bg-muted rounded-md">
                <code className="text-sm flex-1">{btcAmount} BTC</code>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(btcAmount)}
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Button 
              variant="outline" 
              className="w-full"
              onClick={openBlockchainExplorer}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              View on Blockchain Explorer
            </Button>
            
            <div className="text-xs text-muted-foreground space-y-1">
              <p>• Send exactly {btcAmount} BTC to the address above</p>
              <p>• Payment will be confirmed within 10-60 minutes</p>
              <p>• Contact us after payment for order tracking</p>
              <p>• Network fees apply (usually 0.0001-0.001 BTC)</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BitcoinPayment;