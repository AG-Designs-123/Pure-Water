import { Button } from "./ui/button";
import { CreditCard, ExternalLink, Lock } from "lucide-react";

const SUMUP_PAYMENT_LINK = "https://pay.sumup.com/b2c/QDWZPDI3";

export function Payment() {
  return (
    <section id="payment" className="py-28 bg-white relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#c9a96e] text-sm font-brand tracking-[0.3em] uppercase mb-4">Payments</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Pay Your Bill Online</h2>
          <div className="w-16 h-[1px] bg-[#c9a96e] mx-auto mb-6" />
          <p className="text-lg text-muted-foreground">
            Pay securely through SumUp using your invoice reference and the amount shown on your bill.
          </p>
        </div>

        <div className="bg-white border border-border/50 shadow-lg p-10 md:p-12">
          <div className="space-y-8">
            <div className="p-6 border border-border/50 bg-[#f8f7f5] flex items-start gap-4">
              <CreditCard className="w-6 h-6 text-[#c9a96e] shrink-0 mt-1" />
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">Secure Card Payment via SumUp</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Click the button below to open our secure SumUp payment page. Please enter the amount from your invoice and include your invoice reference where prompted, so we can match your payment correctly.
                </p>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="w-full h-14 rounded-none text-base bg-[#0c1222] text-white hover:bg-[#1a2340] tracking-wider uppercase font-brand"
              data-testid="link-sumup-payment"
            >
              <a href={SUMUP_PAYMENT_LINK} target="_blank" rel="noopener noreferrer">
                <Lock className="w-4 h-4 mr-2" />
                Pay Securely with SumUp
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>

            <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1.5">
              <Lock className="w-3 h-3" />
              Payments are processed securely by SumUp. We never store your card details.
            </p>
            <p className="text-xs text-center text-muted-foreground leading-relaxed">
              By paying online, you confirm the invoice details are correct and agree to the{" "}
              <a href="/terms-and-conditions" className="text-[#c9a96e] hover:underline">Terms & Conditions</a>{" "}
              and <a href="/refund-policy" className="text-[#c9a96e] hover:underline">Refund Policy</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
