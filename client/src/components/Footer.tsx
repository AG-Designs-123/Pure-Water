import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#0d0d2b] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/images/silhouette.jpg" alt="Pure Water" className="h-16 object-contain invert brightness-200" />
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-2xl tracking-[0.15em] text-white uppercase">Pure</span>
                <span className="font-display font-light text-2xl tracking-[0.15em] text-white/50 uppercase">Water</span>
              </div>
            </div>
            <p className="text-white/40 max-w-sm leading-relaxed mb-6">
              Professional window cleaning service using advanced pure water technology for streak-free, lasting results.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1a1a50] transition-colors text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1a1a50] transition-colors text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1a1a50] transition-colors text-white">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 tracking-wide uppercase text-white/70">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-white/40 hover:text-white transition-colors">Services</a></li>
              <li><a href="#enquiry" className="text-white/40 hover:text-white transition-colors">Get a Quote</a></li>
              <li><a href="#payment" className="text-white/40 hover:text-white transition-colors">Pay Bill Online</a></li>
              <li><a href="#" className="text-white/40 hover:text-white transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 tracking-wide uppercase text-white/70">Contact</h4>
            <ul className="space-y-4 text-white/40">
              <li>07551 017095</li>
              <li>pure.water@hotmail.co.uk</li>
              <li>www.purewaterinfo.co.uk</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-white/25 text-sm">
          <p>&copy; {new Date().getFullYear()} Pure Water Window Cleaning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}