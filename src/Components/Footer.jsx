import React from 'react';
import { 
  Twitter, 
  Linkedin, 
  Youtube, 
  Send, 
  Zap, 
  ArrowUpRight,
  ShieldCheck,
  Phone,
  Mail
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: 'Home', href: '#home' },
      { name: 'About Pavan', href: '#about' },
      { name: 'SEBI Compliance', href: '#sebi' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Disclaimer', href: '#disclaimer' },
    ],
    services: [
      { name: 'Equity Cash', href: '#services' },
      { name: 'Equity Derivatives', href: '#services' },
      { name: 'Index Options', href: '#services' },
      { name: 'Nifty Futures', href: '#services' },
      { name: 'Premium Advisory', href: '#services' },
    ]
  };

  return (
    <footer className="bg-[#020617] text-white pt-20 pb-10 relative overflow-hidden">
      {/* Subtle Top Glow Divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                <Zap size={20} fill="currentColor" />
              </div>
              <h2 className="text-2xl font-black tracking-tight">
                HighRise <span className="text-blue-500">Research</span>
              </h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-medium">
              India's leading SEBI Registered Research Analyst firm providing institutional-grade 
              market insights and high-accuracy trading calls for retail investors.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Twitter size={18} />, href: "#" },
                { icon: <Linkedin size={18} />, href: "#" },
                { icon: <Youtube size={18} />, href: "#" },
                { icon: <Send size={18} />, href: "#" },
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-black text-blue-500 uppercase tracking-[0.2em] mb-6">Navigation</h4>
            <ul className="space-y-4">
              {footerLinks.quickLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-slate-400 text-sm font-bold hover:text-white transition-colors flex items-center group">
                    {link.name}
                    <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-black text-blue-500 uppercase tracking-[0.2em] mb-6">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-slate-400 text-sm font-bold hover:text-white transition-colors flex items-center group">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4 p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm">
            <h4 className="text-[11px] font-black text-white uppercase tracking-[0.2em] mb-6">Direct Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500"><Phone size={18} /></div>
                <p className="text-sm font-bold text-slate-300">+91 98765 43210</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500"><Mail size={18} /></div>
                <p className="text-sm font-bold text-slate-300">support@highrise.com</p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-3">
                <ShieldCheck className="text-emerald-500" size={24} />
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase">SEBI Registration</p>
                  <p className="text-[12px] font-mono font-bold text-white">INH000009427</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-white/5 mb-10"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-medium">
            © {currentYear} HighRise Research. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-500 text-xs hover:text-white transition-colors underline underline-offset-4 decoration-slate-800">Privacy Policy</a>
            <a href="#" className="text-slate-500 text-xs hover:text-white transition-colors underline underline-offset-4 decoration-slate-800">Terms of Service</a>
            <a href="#" className="text-slate-500 text-xs hover:text-white transition-colors underline underline-offset-4 decoration-slate-800">Refund Policy</a>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
          <p className="text-[10px] text-slate-600 leading-relaxed text-center uppercase tracking-wider font-bold">
            Investment in securities market are subject to market risks. Read all the related documents carefully before investing. Registration granted by SEBI, membership of BASL and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;