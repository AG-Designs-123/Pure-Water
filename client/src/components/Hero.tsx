import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-[#0d0d2b] z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d2b] via-[#0d0d2b]/30 to-[#0d0d2b]/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <img 
          src="/images/silhouette.jpg" 
          alt="Pure Water Window Cleaning" 
          className="h-48 md:h-64 object-contain mb-8 drop-shadow-2xl animate-in slide-in-from-bottom-6 duration-700 invert brightness-200"
          data-testid="hero-logo"
        />
        
        <h1 className="font-display font-bold tracking-[0.2em] uppercase max-w-5xl text-shadow-lg animate-in slide-in-from-bottom-8 duration-700">
          <span className="block text-6xl md:text-8xl leading-none text-white">Pure</span>
          <span className="block text-6xl md:text-8xl leading-none text-white/60 font-light">Water</span>
        </h1>
        
        <p className="text-sm md:text-base text-white/50 font-display tracking-[0.3em] uppercase mt-4 mb-10 animate-in slide-in-from-bottom-10 duration-1000">
          Professional Window Cleaning Service
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-bottom-12 duration-1000 delay-150">
          <Button asChild size="lg" className="rounded-full text-base h-14 px-8 shadow-lg hover:shadow-xl transition-all bg-white text-[#1a1a50] hover:bg-white/90">
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