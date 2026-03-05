import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-black/40 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-8 animate-in slide-in-from-bottom-4 duration-500">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium">Professional & Reliable Cleaning</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight max-w-4xl text-shadow-lg animate-in slide-in-from-bottom-8 duration-700">
          Crystal Clear Windows, <br className="hidden md:block"/>
          <span className="text-primary">Pure Water</span> Perfection
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-10 font-medium text-shadow animate-in slide-in-from-bottom-10 duration-1000">
          We use state-of-the-art pure water technology to ensure your windows, gutters, and solar panels stay cleaner for longer.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-bottom-12 duration-1000 delay-150">
          <Button asChild size="lg" className="rounded-full text-base h-14 px-8 shadow-lg hover:shadow-xl transition-all">
            <a href="#enquiry" data-testid="hero-button-quote">
              Request a Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full text-base h-14 px-8 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 hover:text-white transition-all">
            <a href="#services" data-testid="hero-button-services">
              View Services
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}