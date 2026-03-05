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
            <div className="flex items-center gap-1 cursor-pointer" data-testid="nav-logo">
              <span className="font-display font-bold text-2xl tracking-wider text-[#4a4a4a] uppercase">Pure</span>
              <span className="font-display font-light text-2xl tracking-wider text-[#8a8a8a] uppercase">Water</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors" data-testid="link-services">Services</a>
            <a href="#enquiry" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors" data-testid="link-enquiry">Get Quote</a>
            <a href="#payment" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors" data-testid="link-payment">Pay Bill</a>
            <Button asChild size="sm" className="rounded-full px-6 shadow-sm hover:shadow-md transition-all">
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
            <a href="#services" onClick={() => setIsOpen(false)} className="block text-base font-medium text-foreground hover:text-primary">Services</a>
            <a href="#enquiry" onClick={() => setIsOpen(false)} className="block text-base font-medium text-foreground hover:text-primary">Get Quote</a>
            <a href="#payment" onClick={() => setIsOpen(false)} className="block text-base font-medium text-foreground hover:text-primary">Pay Bill</a>
            <Button asChild className="w-full justify-center mt-4" size="lg">
              <a href="#contact" onClick={() => setIsOpen(false)}>Contact Us</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}