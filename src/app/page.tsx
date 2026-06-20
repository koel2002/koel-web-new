import React from 'react';
import { ArrowRight, Shirt, Cpu, Sun, Recycle, ShieldCheck, Mail, MapPin, Phone } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B1A14] text-white font-sans antialiased selection:bg-[#D4AF37] selection:text-[#0B1A14]">
      {/* Glow Effect Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#1E3F2F]/40 rounded-full blur-[120px] pointer-events-none" />

      {/* Header / Navbar */}
      <header className="border-b border-[#D4AF37]/20 backdrop-blur-md sticky top-0 z-50 bg-[#0B1A14]/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-wider text-[#D4AF37]">KOEL GROUP</span>
            <span className="text-[10px] tracking-widest text-gray-400 uppercase">Excellence in Apparel & Textiles</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
            <a href="#about" className="hover:text-[#D4AF37] transition">About Us</a>
            <a href="#companies" className="hover:text-[#D4AF37] transition">Our Business</a>
            <a href="#sustainability" className="hover:text-[#D4AF37] transition">Sustainability</a>
            <a href="#contact" className="hover:text-[#D4AF37] transition">Contact</a>
          </nav>
          <a href="#contact" className="border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B1A14] px-5 py-2 rounded-md text-sm font-semibold transition duration-300">
            Get In Touch
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 text-center md:text-left md:flex items-center justify-between min-h-[calc(100vh-80px)]">
        <div className="md:w-1/2 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-[#1E3F2F] border border-[#D4AF37]/30 px-3 py-1 rounded-full text-xs text-[#D4AF37]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Leading RMG Manufacturer & Exporter Since 2016</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Redefining <span className="text-[#D4AF37]">Textile & Apparel</span> Supply Chain Globally
          </h1>
          <p className="text-gray-400 text-lg max-w-xl">
            Koel Group is a premier name in Bangladesh's ready-made garments industry, delivering high-end knitwear, jackets, and outerwear with a strict commitment to quality and carbon-neutral industrial operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
            <a href="#companies" className="w-full sm:w-auto bg-[#D4AF37] text-[#0B1A14] font-bold px-8 py-3.5 rounded-md hover:bg-[#c4a030] transition flex items-center justify-center space-x-2 shadow-lg shadow-[#D4AF37]/20">
              <span>Explore Businesses</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#about" className="w-full sm:w-auto bg-transparent border border-white/20 text-white font-medium px-8 py-3.5 rounded-md hover:bg-white/5 transition flex items-center justify-center">
              Learn More
            </a>
          </div>
        </div>
        <div className="hidden md:flex md:w-1/2 justify-end relative">
          <div className="w-[450px] h-[450px] border border-[#D4AF37]/20 rounded-2xl relative p-6 bg-gradient-to-br from-[#12281E] to-[#0B1A14] shadow-2xl">
            <div className="absolute inset-0 border border-[#D4AF37]/10 rounded-2xl rotate-3 pointer-events-none" />
            <div className="h-full flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-[#1E3F2F] rounded-lg border border-[#D4AF37]/20">
                  <Shirt className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <span className="text-xs text-[#D4AF37] font-mono tracking-widest bg-[#1E3F2F] px-2 py-1 rounded">EST. 2016</span>
              </div>
              <div className="space-y-4">
                <div className="h-2 bg-white/5 rounded w-1/3" />
                <div className="h-4 bg-white/10 rounded w-3/4" />
                <div className="h-3 bg-white/5 rounded w-5/6" />
                <div className="grid grid-cols-3 gap-2 pt-2">
                  <div className="h-10 bg-[#1E3F2F]/50 border border-[#D4AF37]/10 rounded flex items-center justify-center text-[10px] text-gray-400 font-mono">KNITWEAR</div>
                  <div className="h-10 bg-[#1E3F2F]/50 border border-[#D4AF37]/10 rounded flex items-center justify-center text-[10px] text-gray-400 font-mono">JACKETS</div>
                  <div className="h-10 bg-[#1E3F2F]/50 border border-[#D4AF37]/10 rounded flex items-center justify-center text-[10px] text-gray-400 font-mono">OUTERWEAR</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Entities Section */}
      <section id="companies" className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Enterprise Portfolio</h2>
          <p className="text-gray-400 mt-3">Operating end-to-end production pipelines through specialized operational arms.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Company 1 */}
          <div className="bg-[#12281E] border border-[#D4AF37]/20 p-8 rounded-xl relative overflow-hidden group hover:border-[#D4AF37]/50 transition duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-bl-full group-hover:bg-[#D4AF37]/10 transition" />
            <h3 className="text-xl font-bold text-[#D4AF37] mb-1">Koel Modish Apparels</h3>
            <p className="text-xs font-mono text-gray-400 mb-4">GARMENTS MANUFACTURING UNIT</p>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Specialized infrastructure focusing on full-service production lines for premium global fashion labels. Expertise ranges from high-volume high-quality knitwear to specialized casual apparel.
            </p>
            <div className="text-xs text-gray-400 flex items-center space-x-4">
              <span>📍 Factory: Gazipur</span>
              <span>•</span>
              <span>✓ Certified Compliance</span>
            </div>
          </div>

          {/* Company 2 */}
          <div className="bg-[#12281E] border border-[#D4AF37]/20 p-8 rounded-xl relative overflow-hidden group hover:border-[#D4AF37]/50 transition duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-bl-full group-hover:bg-[#D4AF37]/10 transition" />
            <h3 className="text-xl font-bold text-[#D4AF37] mb-1">JAYQO Textile & Accessories Com. BD Ltd.</h3>
            <p className="text-xs font-mono text-gray-400 mb-4">TEXTILE SUPPLY CHAIN & ACCESSORIES</p>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Our advanced supply management core, supplying state-of-the-art materials, trims, and comprehensive accessories supporting agile apparel pipelines and international buyers.
            </p>
            <div className="text-xs text-gray-400 flex items-center space-x-4">
              <span>📍 Office: Uttara, Dhaka</span>
              <span>•</span>
              <span>✓ Global Sourcing Core</span>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Capabilities / Industrial Innovation */}
      <section id="sustainability" className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5 bg-gradient-to-b from-transparent to-[#12281E]/30 rounded-3xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="p-3 bg-[#1E3F2F] rounded-lg w-fit border border-[#D4AF37]/20">
              <Sun className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <h4 className="text-lg font-bold text-white pt-2">Rooftop Solar Integration</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Transitioning factory facilities toward self-sustaining clean power frameworks to lower carbon footprints across manufacturing lines.
            </p>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-[#1E3F2F] rounded-lg w-fit border border-[#D4AF37]/20">
              <Recycle className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <h4 className="text-lg font-bold text-white pt-2">Recycled Fabric Initiatives</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Pioneering circular sustainable development by promoting closed-loop systems and recycled fabric processing clusters.
            </p>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-[#1E3F2F] rounded-lg w-fit border border-[#D4AF37]/20">
              <Cpu className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <h4 className="text-lg font-bold text-white pt-2">AI-Driven Infrastructure</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Employing modern intelligent logistics pipelines to streamline buyer alignment, design visualization, and fast export tracking.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Address & Contact */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="bg-gradient-to-r from-[#12281E] to-[#0B1A14] border border-[#D4AF37]/20 p-8 md:p-12 rounded-2xl md:flex justify-between items-center">
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-white">Let's Discuss Your Next Order</h2>
            <p className="text-gray-400 text-sm max-w-md">
              Connect directly with our corporate desk for request for proposals, corporate catalog queries, or layout visits.
            </p>
            <div className="space-y-3 pt-4 text-sm text-gray-300 font-mono">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>HQ: Uttara, Dhaka | Factory: Gazipur, Bangladesh</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                <span>info@koelgroupbd.com</span>
              </div>
            </div>
          </div>
          <div className="mt-8 md:mt-0 md:w-1/2 flex justify-end">
            <form className="w-full max-w-sm space-y-3 bg-[#0B1A14] p-6 rounded-xl border border-white/10" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your business email" className="w-full bg-[#12281E] border border-white/10 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37]" required />
              <button type="submit" className="w-full bg-[#D4AF37] text-[#0B1A14] font-bold text-sm py-2.5 rounded hover:bg-[#c4a030] transition">
                Request Corporate Presentation
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#08130E] text-xs text-gray-500 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Koel Group. All Rights Reserved.</p>
          <p className="font-mono text-[10px] tracking-widest text-[#D4AF37]/50">DESIGNED FOR MAJDI BRAND PREFERENCE</p>
        </div>
      </footer>
    </div>
  );
}

