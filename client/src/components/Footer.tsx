import { Droplet, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#0f172a] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src="/images/logo.png" alt="Pure Water Window Cleaning" className="h-16" />
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed mb-6">
              Providing professional, reliable, and streak-free window cleaning services across the region using advanced pure water technology.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-slate-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#enquiry" className="text-slate-400 hover:text-white transition-colors">Get a Quote</a></li>
              <li><a href="#payment" className="text-slate-400 hover:text-white transition-colors">Pay Bill Online</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-400">
              <li>07551 017095</li>
              <li>pure.water@hotmail.co.uk</li>
              <li>www.purewaterinfo.co.uk</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Pure Water Window Cleaning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}