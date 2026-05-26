import { Card, CardContent } from "./ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    id: "windows",
    title: "Window Cleaning",
    description: "Spotless, streak-free windows using advanced pure water pole systems reaching up to 6 stories safely from the ground.",
    features: ["Frames & sills included", "Lasts longer than traditional methods", "Eco-friendly, no harsh chemicals"],
    image: "/images/window-cleaning.png",
    href: "/window-cleaning-blandford-forum"
  },
  {
    id: "gutters",
    title: "Gutter Clearing",
    description: "Prevent water damage to your property with our thorough gutter clearing service, removing moss, leaves, and debris.",
    features: ["High-reach vacuum system", "Before/after inspection", "Fascia & soffit washing available"],
    image: "/images/gutter-cleaning.png",
    href: "/gutter-cleaning-blandford-forum"
  },
  {
    id: "solar",
    title: "Solar Panel Cleaning",
    description: "Maximize your energy efficiency by keeping your solar panels free from dust, dirt, and bird droppings.",
    features: ["Increases energy yield up to 30%", "Gentle pure water wash", "Safe non-abrasive process"],
    image: "/images/solar-cleaning.png",
    href: "/solar-panel-cleaning-dorset"
  },
  {
    id: "conservatory",
    title: "Conservatory Valets",
    description: "Bring your conservatory back to life. We clean roofs, finials, frames, and glass to a brilliant shine.",
    features: ["Algae & moss removal", "Restores original brightness", "Full exterior valet"],
    image: "/images/conservatory-cleaning.png",
    href: "/conservatory-cleaning-dorset"
  }
];

export function Services() {
  return (
    <section id="services" className="py-28 bg-white relative overflow-hidden">
      <img 
        src="/images/figure.png?v=2" 
        alt="" 
        className="absolute right-0 top-1/2 -translate-y-1/2 h-full object-contain opacity-[0.03] pointer-events-none translate-x-1/3"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-[#c9a96e] text-sm font-brand tracking-[0.3em] uppercase mb-4">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">Our Services</h2>
          <div className="w-16 h-[1px] bg-[#c9a96e] mx-auto mb-6" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            A comprehensive range of professional exterior cleaning services for residential and commercial properties.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service) => (
            <Card key={service.id} className="overflow-hidden border border-border/50 shadow-none group hover:shadow-xl transition-all duration-500 rounded-none" data-testid={`service-card-${service.id}`}>
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-[#0c1222]/30 group-hover:bg-[#0c1222]/20 transition-all duration-500 z-10" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <CardContent className="p-8 bg-white">
                <h4 className="text-2xl font-display font-bold mb-3 text-foreground">{service.title}</h4>
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>
                <ul className="space-y-2.5">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#c9a96e] shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/70">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={service.href} className="inline-flex items-center mt-6 text-sm font-brand tracking-wider uppercase text-[#0c1222] hover:text-[#c9a96e] transition-colors">
                  Learn more locally
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}