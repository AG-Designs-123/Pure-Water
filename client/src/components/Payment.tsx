import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useToast } from "@/hooks/use-toast";
import { CreditCard, Lock } from "lucide-react";

export function Payment() {
  const { toast } = useToast();

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Payment Processing",
      description: "This is a mockup. In a real app, this would integrate with Stripe or another payment provider.",
    });
  };

  return (
    <section id="payment" className="py-24 bg-white border-y border-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <CreditCard className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Pay Your Bill Online</h2>
          <p className="text-lg text-muted-foreground">
            Fast, secure, and convenient online payments. Enter your invoice reference to get started.
          </p>
        </div>

        <div className="bg-card border border-border shadow-sm rounded-3xl p-8 md:p-10">
          <form onSubmit={handlePayment} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="invoiceRef">Invoice Reference</Label>
                <Input id="invoiceRef" required placeholder="e.g. INV-2023-001" className="h-12" data-testid="input-invoice-ref"/>
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount">Amount (£)</Label>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-muted-foreground font-medium">£</span>
                  <Input id="amount" type="number" step="0.01" min="1" required placeholder="0.00" className="h-12 pl-8" data-testid="input-payment-amount"/>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Card Details (Mockup)</h4>
              <div className="p-4 border rounded-xl bg-muted/20 flex flex-col gap-4">
                <div className="space-y-2">
                  <Label className="text-xs text-muted-foreground">Card Number</Label>
                  <Input disabled placeholder="**** **** **** ****" className="bg-white/50" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-xs text-muted-foreground">Expiry Date</Label>
                    <Input disabled placeholder="MM/YY" className="bg-white/50" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs text-muted-foreground">CVC</Label>
                    <Input disabled placeholder="123" className="bg-white/50" />
                  </div>
                </div>
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full h-14 rounded-xl text-base shadow-md" data-testid="button-submit-payment">
              <Lock className="w-4 h-4 mr-2" />
              Pay Securely Now
            </Button>
            
            <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1">
              <Lock className="w-3 h-3" />
              Payments are secured with 256-bit encryption.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}