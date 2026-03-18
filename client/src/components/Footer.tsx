import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#0c1222] text-white pt-24 pb-10 relative overflow-hidden">
      <img 
        src="/images/figure.png?v=2" 
        alt="" 
        className="absolute right-0 bottom-0 h-[70%] object-contain opacity-[0.03] pointer-events-none translate-x-1/4"
        style={{ filter: "brightness(0) invert(1)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/images/figure.png?v=2" alt="" className="h-14 object-contain" style={{ filter: "brightness(0) invert(1) opacity(0.8)" }} />
              <div className="flex items-baseline gap-1.5">
                <span className="font-brand font-bold text-xl tracking-[0.15em] uppercase text-white">Pure</span>
                <span className="font-brand font-light text-xl tracking-[0.15em] uppercase text-[#c9a96e]">Water</span>
              </div>
            </div>
            <p className="text-white/35 max-w-sm leading-relaxed mb-8">
              Professional window cleaning service using advanced pure water technology for streak-free, lasting results that protect and enhance your property.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-[#c9a96e] hover:border-[#c9a96e] transition-all text-white/60 hover:text-[#0c1222]">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-[#c9a96e] hover:border-[#c9a96e] transition-all text-white/60 hover:text-[#0c1222]">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-[#c9a96e] hover:border-[#c9a96e] transition-all text-white/60 hover:text-[#0c1222]">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg text-white/80 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-white/40 hover:text-white transition-colors text-sm">Services</a></li>
              <li><a href="#enquiry" className="text-white/40 hover:text-white transition-colors text-sm">Get a Quote</a></li>
              <li><a href="#payment" className="text-white/40 hover:text-white transition-colors text-sm">Pay Bill Online</a></li>
              <li><a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Terms & Conditions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg text-white/80 mb-6">Contact</h4>
            <ul className="space-y-4 text-white/40 text-sm">
              <li><a href="tel:07551017095" className="hover:text-white transition-colors">07551 017095</a></li>
              <li><a href="mailto:pure.water@hotmail.co.uk" className="hover:text-white transition-colors">pure.water@hotmail.co.uk</a></li>
              <li><a href="https://www.purewaterinfo.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">www.purewaterinfo.co.uk</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-white/20 text-xs tracking-wider">
          <p>&copy; {new Date().getFullYear()} Pure Water Window Cleaning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}