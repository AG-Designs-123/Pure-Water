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
    <section id="payment" className="py-28 bg-white relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#c9a96e] text-sm font-brand tracking-[0.3em] uppercase mb-4">Payments</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Pay Your Bill Online</h2>
          <div className="w-16 h-[1px] bg-[#c9a96e] mx-auto mb-6" />
          <p className="text-lg text-muted-foreground">
            Fast, secure, and convenient online payments. Enter your invoice reference to get started.
          </p>
        </div>

        <div className="bg-white border border-border/50 shadow-lg p-10 md:p-12">
          <form onSubmit={handlePayment} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="invoiceRef" className="text-xs font-brand tracking-wider uppercase text-muted-foreground">Invoice Reference</Label>
                <Input id="invoiceRef" required placeholder="e.g. INV-2023-001" className="h-12 rounded-none border-border" data-testid="input-invoice-ref"/>
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount" className="text-xs font-brand tracking-wider uppercase text-muted-foreground">Amount (£)</Label>
                <div className="relative">
                  <span className="absolute left-4 top-3.5 text-muted-foreground font-medium">£</span>
                  <Input id="amount" type="number" step="0.01" min="1" required placeholder="0.00" className="h-12 pl-8 rounded-none border-border" data-testid="input-payment-amount"/>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-brand text-xs tracking-wider uppercase text-muted-foreground">Card Details</h4>
              <div className="p-6 border border-border/50 bg-[#f8f7f5] flex flex-col gap-4">
                <div className="flex items-center gap-2 mb-2">
                  <CreditCard className="w-5 h-5 text-[#c9a96e]" />
                  <span className="text-sm text-muted-foreground">Secure payment</span>
                </div>
                <div className="space-y-2">
                  <Input disabled placeholder="**** **** **** ****" className="bg-white rounded-none border-border h-12" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input disabled placeholder="MM/YY" className="bg-white rounded-none border-border h-12" />
                  <Input disabled placeholder="CVC" className="bg-white rounded-none border-border h-12" />
                </div>
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full h-14 rounded-none text-base bg-[#0c1222] text-white hover:bg-[#1a2340] tracking-wider uppercase font-brand" data-testid="button-submit-payment">
              <Lock className="w-4 h-4 mr-2" />
              Pay Securely Now
            </Button>
            
            <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1.5">
              <Lock className="w-3 h-3" />
              Payments are secured with 256-bit encryption.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}