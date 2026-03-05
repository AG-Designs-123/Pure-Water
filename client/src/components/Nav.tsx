import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer" data-testid="nav-logo">
              <img src="/images/silhouette.jpg" alt="Pure Water" className="h-14 object-contain" />
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-xl tracking-[0.15em] text-[#1a1a50] uppercase">Pure</span>
                <span className="font-display font-light text-xl tracking-[0.15em] text-[#6a6a8a] uppercase">Water</span>
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-foreground/80 hover:text-[#1a1a50] transition-colors" data-testid="link-services">Services</a>
            <a href="#enquiry" className="text-sm font-medium text-foreground/80 hover:text-[#1a1a50] transition-colors" data-testid="link-enquiry">Get Quote</a>
            <a href="#payment" className="text-sm font-medium text-foreground/80 hover:text-[#1a1a50] transition-colors" data-testid="link-payment">Pay Bill</a>
            <Button asChild size="sm" className="rounded-full px-6 shadow-sm hover:shadow-md transition-all bg-[#1a1a50] hover:bg-[#2a2a60]">
              <a href="#contact" data-testid="button-contact-nav">Contact Us</a>
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2"
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
            <a href="#services" onClick={() => setIsOpen(false)} className="block text-base font-medium text-foreground hover:text-[#1a1a50]">Services</a>
            <a href="#enquiry" onClick={() => setIsOpen(false)} className="block text-base font-medium text-foreground hover:text-[#1a1a50]">Get Quote</a>
            <a href="#payment" onClick={() => setIsOpen(false)} className="block text-base font-medium text-foreground hover:text-[#1a1a50]">Pay Bill</a>
            <Button asChild className="w-full justify-center mt-4 bg-[#1a1a50] hover:bg-[#2a2a60]" size="lg">
              <a href="#contact" onClick={() => setIsOpen(false)}>Contact Us</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}