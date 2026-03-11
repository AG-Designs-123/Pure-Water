import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0c1222]">
      <div className="absolute inset-0 w-full h-full z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c1222] via-[#0c1222]/80 to-[#0c1222]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1222] via-transparent to-[#0c1222]/50" />
      </div>

      <img 
        src="/images/figure.png" 
        alt="" 
        className="absolute right-0 top-0 h-full object-contain opacity-[0.08] pointer-events-none z-[1]"
        style={{ filter: "brightness(0) invert(1)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 items-center pt-24 pb-16">
        <div className="text-left">
          <div className="inline-block border-l-2 border-[#c9a96e] pl-4 mb-8 animate-in slide-in-from-left-8 duration-700">
            <p className="text-[#c9a96e] text-sm font-brand tracking-[0.3em] uppercase">Professional Service</p>
          </div>
          
          <h1 className="animate-in slide-in-from-left-10 duration-700">
            <span className="block text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-2">Pure Water</span>
            <span className="block text-5xl md:text-7xl font-display italic font-normal text-white/40 leading-[1.1]">Window Cleaning</span>
          </h1>
          
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#c9a96e] to-transparent my-8 animate-in slide-in-from-left-12 duration-1000" />
          
          <p className="text-lg text-white/50 max-w-md mb-10 leading-relaxed animate-in slide-in-from-left-12 duration-1000">
            State-of-the-art pure water technology delivering streak-free, crystal-clear results for discerning property owners.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-left-14 duration-1000 delay-150">
            <Button asChild size="lg" className="h-14 px-8 text-base bg-[#c9a96e] text-[#0c1222] hover:bg-[#d4b87d] border-none rounded-none tracking-wider uppercase font-brand shadow-lg">
              <a href="#enquiry" data-testid="hero-button-quote">
                Request a Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base bg-transparent border border-white/20 text-white hover:bg-white/5 hover:text-white rounded-none tracking-wider uppercase font-brand">
              <a href="#services" data-testid="hero-button-services">
                Our Services
              </a>
            </Button>
          </div>
        </div>

        <div className="hidden lg:flex justify-center items-end relative">
          <img 
            src="/images/figure.png" 
            alt="Pure Water Window Cleaning" 
            className="h-[75vh] max-h-[700px] object-contain drop-shadow-[0_0_60px_rgba(201,169,110,0.15)] animate-in slide-in-from-bottom-16 duration-1000 relative z-10"
            style={{ filter: "brightness(0) invert(1) opacity(0.85)" }}
            data-testid="hero-logo"
          />
        </div>
      </div>
    </section>
  );
}