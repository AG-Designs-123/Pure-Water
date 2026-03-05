import { Card, CardContent } from "./ui/card";
import { CheckCircle2 } from "lucide-react";

const services = [
  {
    id: "windows",
    title: "Pure Water Window Cleaning",
    description: "Spotless, streak-free windows using advanced pure water pole systems reaching up to 6 stories safely from the ground.",
    features: ["Frames & sills included", "Lasts longer than traditional methods", "Eco-friendly, no harsh chemicals"],
    image: "/images/solar-cleaning.png"
  },
  {
    id: "gutters",
    title: "Gutter Clearing & Cleaning",
    description: "Prevent water damage to your property with our thorough gutter clearing service, removing moss, leaves, and debris.",
    features: ["High-reach vacuum system", "Before/after inspection", "Fascia & soffit washing available"],
    image: "/images/gutter-cleaning.png"
  },
  {
    id: "solar",
    title: "Solar Panel Cleaning",
    description: "Maximize your energy efficiency by keeping your solar panels free from dust, dirt, and bird droppings.",
    features: ["Increases energy yield up to 30%", "Gentle pure water wash", "Safe non-abrasive process"],
    image: "/images/solar-cleaning.png"
  },
  {
    id: "conservatory",
    title: "Conservatory Valets",
    description: "Bring your conservatory back to life. We clean roofs, finials, frames, and glass to a brilliant shine.",
    features: ["Algae & moss removal", "Restores original brightness", "Full exterior valet"],
    image: "/images/conservatory-cleaning.png"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      <img 
        src="/images/silhouette.jpg" 
        alt="" 
        className="absolute right-0 bottom-0 h-[500px] object-contain opacity-[0.03] pointer-events-none translate-x-1/4 translate-y-1/6"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <img src="/images/silhouette.jpg" alt="" className="h-16 mx-auto mb-6 opacity-20" aria-hidden="true" />
          <h2 className="text-sm font-display font-bold tracking-[0.2em] text-[#1a1a50] uppercase mb-3">Our Services</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">Expert cleaning for your entire exterior</h3>
          <p className="text-lg text-muted-foreground">
            We provide a comprehensive range of professional exterior cleaning services for residential and commercial properties.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service) => (
            <Card key={service.id} className="overflow-hidden border-none shadow-lg group hover:shadow-xl transition-all duration-300" data-testid={`service-card-${service.id}`}>
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-[#1a1a50]/20 mix-blend-multiply z-10" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <CardContent className="p-8 bg-white">
                <h4 className="text-2xl font-display font-bold mb-3 text-[#1a1a50]">{service.title}</h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#1a1a50] shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}