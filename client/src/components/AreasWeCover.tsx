import { Link } from "wouter";
import { ArrowRight, MapPin } from "lucide-react";

const areaLinks = [
  {
    title: "Window Cleaning Blandford Forum",
    href: "/window-cleaning-blandford-forum",
    text: "Pure water window cleaning for homes and businesses in Blandford Forum and nearby villages.",
  },
  {
    title: "Window Cleaning Wimborne",
    href: "/window-cleaning-wimborne",
    text: "Professional window cleaning in Wimborne, Colehill, Merley and surrounding areas.",
  },
  {
    title: "Window Cleaning Spetisbury",
    href: "/window-cleaning-spetisbury",
    text: "Reliable local window cleaning for Spetisbury, Charlton Marshall and nearby villages.",
  },
  {
    title: "Window Cleaning Charlton Marshall",
    href: "/window-cleaning-charlton-marshall",
    text: "Frames, sills and glass cleaned with pure water in Charlton Marshall and surrounding Dorset villages.",
  },
  {
    title: "Gutter Cleaning Blandford Forum",
    href: "/gutter-cleaning-blandford-forum",
    text: "Gutter clearing to remove moss, leaves and debris before blocked gutters cause problems.",
  },
  {
    title: "Solar Panel Cleaning Dorset",
    href: "/solar-panel-cleaning-dorset",
    text: "Gentle pure water solar panel cleaning across our Dorset service area.",
  },
  {
    title: "Conservatory Cleaning Dorset",
    href: "/conservatory-cleaning-dorset",
    text: "Exterior conservatory roof, frame and glass cleaning across nearby Dorset villages.",
  },
];

export function AreasWeCover() {
  return (
    <section id="areas" className="py-28 bg-[#f8f7f5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#c9a96e] text-sm font-brand tracking-[0.3em] uppercase mb-4">Areas We Cover</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">Local window cleaning and exterior cleaning across Dorset</h2>
          <div className="w-16 h-[1px] bg-[#c9a96e] mx-auto mb-6" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            We cover Blandford Forum, Spetisbury, Charlton Marshall, Wimborne and surrounding Dorset villages. These local pages help customers find the right service quickly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areaLinks.map((area) => (
            <Link key={area.href} href={area.href} className="group block bg-white border border-border/50 p-7 hover:border-[#c9a96e] hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#c9a96e] shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-display font-bold mb-3 group-hover:text-[#c9a96e] transition-colors">{area.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{area.text}</p>
                  <span className="inline-flex items-center text-sm font-brand tracking-wider uppercase text-[#0c1222] group-hover:text-[#c9a96e]">
                    View local page
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
