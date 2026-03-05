import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin } from "lucide-react";

export function Enquiry() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Sent!",
      description: "We'll get back to you within 24 hours with your free quotation.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="enquiry" className="py-24 bg-muted/50 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <div>
            <h2 className="text-sm font-bold tracking-wider text-primary uppercase mb-3">Get a Quote</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">Ready for a clearer view?</h3>
            <p className="text-lg text-muted-foreground mb-10">
              Fill out the form to request a free, no-obligation quotation. We price every job individually based on your specific requirements.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Call Us</p>
                  <p className="text-lg font-bold text-foreground">0800 123 4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Email Us</p>
                  <p className="text-lg font-bold text-foreground">hello@purewaterwindows.co.uk</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Service Area</p>
                  <p className="text-lg font-bold text-foreground">Greater London & Surrounding Counties</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-border/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" required className="bg-muted/30 border-muted" placeholder="John" data-testid="input-firstname" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" required className="bg-muted/30 border-muted" placeholder="Doe" data-testid="input-lastname" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required className="bg-muted/30 border-muted" placeholder="john@example.com" data-testid="input-email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" required className="bg-muted/30 border-muted" placeholder="07123 456789" data-testid="input-phone" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Service Required</Label>
                <Select defaultValue="windows">
                  <SelectTrigger id="service" className="bg-muted/30 border-muted" data-testid="select-service">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="windows">Window Cleaning</SelectItem>
                    <SelectItem value="gutters">Gutter Clearing</SelectItem>
                    <SelectItem value="solar">Solar Panel Cleaning</SelectItem>
                    <SelectItem value="conservatory">Conservatory Valet</SelectItem>
                    <SelectItem value="multiple">Multiple Services</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="postcode">Postcode</Label>
                <Input id="postcode" required className="bg-muted/30 border-muted" placeholder="AB12 3CD" data-testid="input-postcode" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Property Details</Label>
                <Textarea 
                  id="message" 
                  className="min-h-[120px] bg-muted/30 border-muted" 
                  placeholder="Tell us about your property (e.g. 4 bed detached house, easy access to rear...)"
                  data-testid="input-message"
                />
              </div>

              <Button type="submit" size="lg" className="w-full text-base h-14 rounded-xl shadow-md hover:shadow-lg transition-all" data-testid="button-submit-quote">
                Request Free Quote
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}