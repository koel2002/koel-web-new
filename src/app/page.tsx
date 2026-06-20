import React from 'react';
import { Mail, Phone, MapPin, Globe, ChevronRight } from 'lucide-react';

// Custom lightweight inline UI Components to prevent import resolution errors
const Button = ({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button className={`px-4 py-2 rounded font-medium transition-all ${className}`} {...props}>{children}</button>
);

const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-[#0A1414] border border-white/10 rounded-xl p-6 ${className}`}>{children}</div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050B0B] text-white font-sans selection:bg-[#D4AF37] selection:text-[#050B0B]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-white/5 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#0B2121] via-transparent to-transparent opacity-70" />
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <span className="inline-block text-[#D4AF37] text-xs font-semibold tracking-[0.2em] uppercase mb-4 bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/20">
            Welcome to Excellence
          </span>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-6">
            KOEL GROUP
          </h1>
          <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Leading the ready-made garments, textiles, and accessories manufacturing landscape with premium quality, absolute facial consistency, and sustainable innovation since 2016.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-[#D4AF37] text-[#050B0B] hover:bg-[#c4a030] font-bold px-8 py-3.5 shadow-lg shadow-[#D4AF37]/10 flex items-center justify-center gap-2">
                Contact Corporate Office <ChevronRight className="w-4 h-4" />
              </Button>
            </a>
            <a href="#businesses" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-transparent border border-white/20 text-white hover:bg-white/5 px-8 py-3.5">
                Our Portfolio
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Strategic Businesses */}
      <section id="businesses" className="py-24 max-w-7xl mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">Strategic Business Units</h2>
          <div className="w-12 h-1 bg-[#D4AF37] mx-auto rounded" />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <span className="text-[#D4AF37] text-xs font-mono tracking-wider uppercase">Apparel Division</span>
            <h3 className="text-2xl font-bold mt-2 mb-4 text-white">Koel Modish Apparels</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A premier manufacturing unit specializing in top-tier knitwear, structured jackets, high-density hoodies, and fashion-forward menswear exported globally with strict compliance.
            </p>
            <div className="h-[2px] bg-gradient-to-r from-[#D4AF37]/50 to-transparent w-24" />
          </Card>

          <Card>
            <span className="text-[#D4AF37] text-xs font-mono tracking-wider uppercase">Textile Division</span>
            <h3 className="text-2xl font-bold mt-2 mb-4 text-white">JAYQO Textile & Accessories Com. BD Ltd.</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Pioneering supply chains and industrial fabric production, focused on integrating eco-friendly processes and cutting-edge accessories manufacturing for modern dynamic brands.
            </p>
            <div className="h-[2px] bg-gradient-to-r from-[#D4AF37]/50 to-transparent w-24" />
          </Card>
        </div>
      </section>

      {/* Contact & Corporate Info Section */}
      <section id="contact" className="py-24 border-t border-white/5 bg-[#030707] relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">Let's Connect</h2>
              <p className="text-gray-400 text-sm md:text-base mb-8 max-w-md leading-relaxed">
                Reach out to our administrative headquarters or schedule a direct inspection at our production floor.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-[#0A1414] border border-white/10 rounded-lg text-[#D4AF37] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">Corporate Office</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">Uttara, Dhaka, Bangladesh</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-[#0A1414] border border-white/10 rounded-lg text-[#D4AF37] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">Manufacturing Factory</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">Gazipur, Bangladesh</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-[#0A1414] border border-white/10 rounded-lg text-[#D4AF37] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">Email Correspondence</h4>
                    <p className="text-xs text-gray-400">info@koelgroupbd.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-0 flex justify-end">
              <form className="w-full max-w-md space-y-4 bg-[#0A1414] p-6 rounded-xl border border-white/10" onSubmit={(e) => e.preventDefault()}>
                <h3 className="text-lg font-bold text-white mb-2">Request Corporate Presentation</h3>
                <input type="email" placeholder="Enter your business email" className="w-full bg-[#122828] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]/50 transition-colors" required />
                <Button type="submit" className="w-full bg-[#D4AF37] text-[#050B0B] font-bold text-sm py-3 rounded-lg hover:bg-[#c4a030] tracking-wide uppercase">
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#020505] text-xs text-gray-500 py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Koel Group. All Rights Reserved.</p>
          <p className="font-mono text-[10px] tracking-widest text-[#D4AF37]/50 uppercase">
            DESIGNED FOR MAJDI BRAND PREFERENCE
          </p>
        </div>
      </footer>
    </div>
  );
}// force rebuild
