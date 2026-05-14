import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer" data-testid="nav-logo">
              <img src="/images/figure.png?v=2" alt="" className="h-10 object-contain" style={{ filter: scrolled ? "none" : "brightness(0) invert(1)" }} />
              <div className="flex items-baseline gap-1.5">
                <span className={`font-brand font-bold text-lg tracking-[0.15em] uppercase transition-colors duration-500 ${scrolled ? "text-[#1a2340]" : "text-white"}`}>Pure</span>
                <span className={`font-brand font-light text-lg tracking-[0.15em] uppercase transition-colors duration-500 ${scrolled ? "text-[#c9a96e]" : "text-[#c9a96e]"}`}>Water</span>
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className={`text-sm font-medium tracking-wider uppercase transition-colors ${scrolled ? "text-foreground/70 hover:text-[#1a2340]" : "text-white/70 hover:text-white"}`} data-testid="link-services">Services</a>
            <a href="#enquiry" className={`text-sm font-medium tracking-wider uppercase transition-colors ${scrolled ? "text-foreground/70 hover:text-[#1a2340]" : "text-white/70 hover:text-white"}`} data-testid="link-enquiry">Quote</a>
            <a href="#payment" className={`text-sm font-medium tracking-wider uppercase transition-colors ${scrolled ? "text-foreground/70 hover:text-[#1a2340]" : "text-white/70 hover:text-white"}`} data-testid="link-payment">Pay Bill</a>
            <Button asChild size="sm" className="rounded-none px-6 bg-[#c9a96e] text-[#0c1222] hover:bg-[#d4b87d] border-none tracking-wider uppercase font-brand text-xs">
              <a href="#contact" data-testid="button-contact-nav">Contact Us</a>
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors ${scrolled ? "text-foreground" : "text-white"}`}
              data-testid="button-mobile-menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-border animate-in slide-in-from-top-2">
          <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
            <a href="#services" onClick={() => setIsOpen(false)} className="block text-base font-medium text-foreground hover:text-[#c9a96e] tracking-wider uppercase">Services</a>
            <a href="#enquiry" onClick={() => setIsOpen(false)} className="block text-base font-medium text-foreground hover:text-[#c9a96e] tracking-wider uppercase">Quote</a>
            <a href="#payment" onClick={() => setIsOpen(false)} className="block text-base font-medium text-foreground hover:text-[#c9a96e] tracking-wider uppercase">Pay Bill</a>
            <Button asChild className="w-full justify-center mt-4 bg-[#c9a96e] text-[#0c1222] hover:bg-[#d4b87d] rounded-none tracking-wider uppercase font-brand" size="lg">
              <a href="#contact" onClick={() => setIsOpen(false)}>Contact Us</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}