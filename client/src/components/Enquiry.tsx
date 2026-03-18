import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Globe, Loader2 } from "lucide-react";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

export function Enquiry() {
  const { toast } = useToast();
  const [service, setService] = useState("windows");

  const mutation = useMutation({
    mutationFn: async (data: Record<string, string>) => {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Failed to submit enquiry");
      }
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Quote Request Sent!",
        description: "We'll get back to you within 24 hours with your free quotation.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Something went wrong",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    mutation.mutate({
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      service,
      postcode: formData.get("postcode") as string,
      message: (formData.get("message") as string) || "",
    });
    form.reset();
    setService("windows");
  };

  return (
    <section id="enquiry" className="py-28 bg-[#f8f7f5] relative overflow-hidden">
      <img 
        src="/images/figure.png?v=2" 
        alt="" 
        className="absolute left-0 top-1/2 -translate-y-1/2 h-[80%] object-contain opacity-[0.03] pointer-events-none -translate-x-1/4"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          <div>
            <p className="text-[#c9a96e] text-sm font-brand tracking-[0.3em] uppercase mb-4">Get in Touch</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">Request a Quotation</h2>
            <div className="w-16 h-[1px] bg-[#c9a96e] mb-8" />
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Fill out the form to request a free, no-obligation quotation. We price every job individually based on your specific requirements.
            </p>

            <div className="space-y-5">
              <a href="tel:07551017095" className="flex items-center gap-4 p-5 border border-border/50 bg-white hover:border-[#c9a96e] hover:bg-[#faf9f7] transition-all duration-300 group" data-testid="link-call-us">
                <div className="w-12 h-12 bg-[#0c1222] flex items-center justify-center group-hover:bg-[#c9a96e] transition-colors duration-300">
                  <Phone className="w-5 h-5 text-[#c9a96e] group-hover:text-[#0c1222] transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-brand tracking-wider uppercase">Call Us</p>
                  <p className="text-base font-semibold text-foreground group-hover:text-[#c9a96e] transition-colors" data-testid="text-phone">07551 017095</p>
                </div>
              </a>
              
              <a href="mailto:pure.water@hotmail.co.uk?subject=Enquiry%20from%20website&body=Hello%2C%0A%0AI%20would%20like%20to%20enquire%20about%20your%20window%20cleaning%20services.%0A%0A" className="flex items-center gap-4 p-5 border border-border/50 bg-white hover:border-[#c9a96e] hover:bg-[#faf9f7] transition-all duration-300 group" data-testid="link-email-us">
                <div className="w-12 h-12 bg-[#0c1222] flex items-center justify-center group-hover:bg-[#c9a96e] transition-colors duration-300">
                  <Mail className="w-5 h-5 text-[#c9a96e] group-hover:text-[#0c1222] transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-brand tracking-wider uppercase">Email Us</p>
                  <p className="text-base font-semibold text-foreground group-hover:text-[#c9a96e] transition-colors" data-testid="text-email">pure.water@hotmail.co.uk</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 border border-border/50 bg-white">
                <div className="w-12 h-12 bg-[#0c1222] flex items-center justify-center">
                  <Globe className="w-5 h-5 text-[#c9a96e]" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-brand tracking-wider uppercase">Website</p>
                  <p className="text-base font-semibold text-foreground" data-testid="text-website">www.purewaterinfo.co.uk</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 md:p-12 shadow-lg border border-border/30">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-xs font-brand tracking-wider uppercase text-muted-foreground">First Name</Label>
                  <Input id="firstName" name="firstName" required className="rounded-none border-border h-12 focus:border-[#c9a96e] focus:ring-[#c9a96e]" placeholder="John" data-testid="input-firstname" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-xs font-brand tracking-wider uppercase text-muted-foreground">Last Name</Label>
                  <Input id="lastName" name="lastName" required className="rounded-none border-border h-12" placeholder="Doe" data-testid="input-lastname" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs font-brand tracking-wider uppercase text-muted-foreground">Email</Label>
                  <Input id="email" name="email" type="email" required className="rounded-none border-border h-12" placeholder="john@example.com" data-testid="input-email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-xs font-brand tracking-wider uppercase text-muted-foreground">Phone</Label>
                  <Input id="phone" name="phone" type="tel" required className="rounded-none border-border h-12" placeholder="07123 456789" data-testid="input-phone" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="service" className="text-xs font-brand tracking-wider uppercase text-muted-foreground">Service Required</Label>
                <Select value={service} onValueChange={setService}>
                  <SelectTrigger id="service" className="rounded-none border-border h-12" data-testid="select-service">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="windows">Window Cleaning</SelectItem>
                    <SelectItem value="gutters">Gutter Clearing</SelectItem>
                    <SelectItem value="solar">Solar Panel Cleaning</SelectItem>
                    <SelectItem value="conservatory">Conservatory Valet</SelectItem>
                    <SelectItem value="fascia">Fascia & Soffit Cleaning</SelectItem>
                    <SelectItem value="multiple">Multiple Services</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="postcode" className="text-xs font-brand tracking-wider uppercase text-muted-foreground">Postcode</Label>
                <Input id="postcode" name="postcode" required className="rounded-none border-border h-12" placeholder="AB12 3CD" data-testid="input-postcode" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs font-brand tracking-wider uppercase text-muted-foreground">Property Details</Label>
                <Textarea 
                  id="message" 
                  name="message"
                  className="min-h-[120px] rounded-none border-border" 
                  placeholder="Tell us about your property (e.g. 4 bed detached house, easy access to rear...)"
                  data-testid="input-message"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full text-base h-14 rounded-none bg-[#c9a96e] text-[#0c1222] hover:bg-[#d4b87d] border-none tracking-wider uppercase font-brand shadow-none" 
                data-testid="button-submit-quote"
                disabled={mutation.isPending}
              >
                {mutation.isPending ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Request Free Quote"
                )}
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}