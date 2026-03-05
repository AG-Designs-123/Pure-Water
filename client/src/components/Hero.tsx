import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-[#1a1a1a] z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <img 
          src="/images/logo-light.png" 
          alt="Pure Water - Professional Window Cleaning Service" 
          className="w-full max-w-2xl mb-10 animate-in slide-in-from-bottom-8 duration-700"
        />
        
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-12 font-light tracking-wide text-shadow animate-in slide-in-from-bottom-10 duration-1000">
          State-of-the-art pure water technology for streak-free windows, gutters, and solar panels that stay cleaner for longer.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-bottom-12 duration-1000 delay-150">
          <Button asChild size="lg" className="rounded-full text-base h-14 px-8 shadow-lg hover:shadow-xl transition-all bg-white text-[#333] hover:bg-white/90">
            <a href="#enquiry" data-testid="hero-button-quote">
              Request a Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full text-base h-14 px-8 bg-white/5 backdrop-blur-md border-white/20 text-white hover:bg-white/15 hover:text-white transition-all">
            <a href="#services" data-testid="hero-button-services">
              View Services
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}