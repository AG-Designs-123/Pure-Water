import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useToast } from "@/hooks/use-toast";
import { CreditCard, Lock, CheckCircle2, XCircle, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";

export function Payment() {
  const { toast } = useToast();
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "success" | "cancelled">("idle");
  const [successRef, setSuccessRef] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const payment = params.get("payment");
    const ref = params.get("ref");
    if (payment === "success") {
      setPaymentStatus("success");
      setSuccessRef(ref || "");
      window.history.replaceState({}, "", "/");
    } else if (payment === "cancelled") {
      setPaymentStatus("cancelled");
      window.history.replaceState({}, "", "/");
    }
  }, []);

  const mutation = useMutation({
    mutationFn: async (data: { invoiceRef: string; amount: string; customerName: string; customerEmail: string }) => {
      const res = await fetch("/api/payment/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Payment initiation failed");
      }
      return res.json();
    },
    onSuccess: (data) => {
      if (data.url) {
        window.location.href = data.url;
      }
    },
    onError: (error: Error) => {
      toast({
        title: "Payment Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    mutation.mutate({
      invoiceRef: formData.get("invoiceRef") as string,
      amount: formData.get("amount") as string,
      customerName: formData.get("customerName") as string,
      customerEmail: formData.get("customerEmail") as string,
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

        {paymentStatus === "success" && (
          <div className="mb-10 p-8 border border-green-200 bg-green-50 flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-display font-bold text-lg text-green-800 mb-1">Payment Received — Thank You!</p>
              <p className="text-green-700 text-sm">
                Your payment{successRef ? ` for invoice ${successRef}` : ""} has been processed successfully. You'll receive a confirmation email shortly.
              </p>
            </div>
          </div>
        )}

        {paymentStatus === "cancelled" && (
          <div className="mb-10 p-8 border border-amber-200 bg-amber-50 flex items-start gap-4">
            <XCircle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-display font-bold text-lg text-amber-800 mb-1">Payment Cancelled</p>
              <p className="text-amber-700 text-sm">Your payment was not completed. Please try again below or contact us if you need help.</p>
            </div>
          </div>
        )}

        <div className="bg-white border border-border/50 shadow-lg p-10 md:p-12">
          <form onSubmit={handlePayment} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="invoiceRef" className="text-xs font-brand tracking-wider uppercase text-muted-foreground">Invoice Reference</Label>
                <Input id="invoiceRef" name="invoiceRef" required placeholder="e.g. INV-2024-001" className="h-12 rounded-none border-border" data-testid="input-invoice-ref" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount" className="text-xs font-brand tracking-wider uppercase text-muted-foreground">Amount (£)</Label>
                <div className="relative">
                  <span className="absolute left-4 top-3.5 text-muted-foreground font-medium">£</span>
                  <Input id="amount" name="amount" type="number" step="0.01" min="1" required placeholder="0.00" className="h-12 pl-8 rounded-none border-border" data-testid="input-payment-amount" />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="customerName" className="text-xs font-brand tracking-wider uppercase text-muted-foreground">Your Name</Label>
                <Input id="customerName" name="customerName" placeholder="John Smith" className="h-12 rounded-none border-border" data-testid="input-customer-name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="customerEmail" className="text-xs font-brand tracking-wider uppercase text-muted-foreground">Email (for receipt)</Label>
                <Input id="customerEmail" name="customerEmail" type="email" placeholder="john@example.com" className="h-12 rounded-none border-border" data-testid="input-customer-email" />
              </div>
            </div>

            <div className="p-6 border border-border/50 bg-[#f8f7f5] flex items-center gap-4">
              <CreditCard className="w-6 h-6 text-[#c9a96e] shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground mb-0.5">Secure Card Payment via Stripe</p>
                <p className="text-xs text-muted-foreground">You'll be taken to Stripe's secure checkout page to enter your card details. We never store your card information.</p>
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={mutation.isPending}
              className="w-full h-14 rounded-none text-base bg-[#0c1222] text-white hover:bg-[#1a2340] tracking-wider uppercase font-brand"
              data-testid="button-submit-payment"
            >
              {mutation.isPending ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Redirecting to Checkout...
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4 mr-2" />
                  Pay Securely Now
                </>
              )}
            </Button>

            <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1.5">
              <Lock className="w-3 h-3" />
              Payments are processed securely by Stripe with 256-bit encryption.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
