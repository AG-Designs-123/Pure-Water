import { BadgeCheck, Home, ShieldCheck, Sparkles } from "lucide-react";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Fully Insured",
    text: "Professional service with care for your home and property.",
  },
  {
    icon: BadgeCheck,
    title: "Free Quotes",
    text: "No-obligation quotations tailored to your property.",
  },
  {
    icon: Home,
    title: "Local Dorset Service",
    text: "Covering Blandford Forum, Spetisbury, Charlton Marshall, Wimborne and nearby villages.",
  },
  {
    icon: Sparkles,
    title: "Streak-Free Results",
    text: "Pure water technology for frames, sills, glass and exterior surfaces.",
  },
];

export function TrustBar() {
  return (
    <section className="bg-white border-y border-border/50" aria-label="Why choose Pure Water Window Cleaning">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex gap-4 items-start">
                <div className="w-11 h-11 shrink-0 bg-[#0c1222] flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#c9a96e]" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-[#0c1222]">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-1">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
