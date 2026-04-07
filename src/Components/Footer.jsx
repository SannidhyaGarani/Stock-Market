import React from 'react';
import { Link } from 'react-router-dom';
import {
  Twitter,
  Linkedin,
  Youtube,
  Send,
  Zap,
  ArrowUpRight,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  Building2,
  Info
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/about' },
      { name: 'Our Services', href: '/services' },
      { name: 'Contact', href: '/contact' },
      { name: 'Investor Charter', href: '/investor' },
    ],
    legal: [
      { name: 'Terms & Conditions', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Refund Policy', href: '/refund' },
      { name: 'AML Policy', href: '/aml' },
      { name: 'Disclaimer', href: '/disclaimer' },
    ]
  };

  return (
    <footer className="bg-[#020617] text-white pt-24 pb-12 relative overflow-hidden font-sans">
      {/* Premium Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent shadow-[0_0_20px_rgba(37,99,235,0.3)]"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">

          {/* Brand & Mission */}
          <div className="lg:col-span-4 space-y-8">
            <div className="group inline-flex items-center gap-3 cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-500/20 group-hover:rotate-6 transition-transform">
                <Zap size={24} fill="currentColor" />
              </div>
              <div>
                <h2 className="text-2xl font-black tracking-tight leading-none">
                  HighRise <span className="text-blue-500">Research</span>
                </h2>
                <div className="mt-1.5 flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
                  <span className="text-[10px] uppercase font-black tracking-widest text-slate-500">SEBI Registered Analyst</span>
                </div>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-medium">
              Empowering retail investors with institutional-grade market research and algorithmic insights.
              Precision-driven strategies for the modern financial landscape.
            </p>

            <div className="flex gap-3">
              {[
                { icon: <Twitter size={18} />, href: "#" },
                { icon: <Linkedin size={18} />, href: "#" },
                { icon: <Youtube size={18} />, href: "#" },
                { icon: <Send size={18} />, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:border-blue-500 hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Sections */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-[11px] font-black text-blue-500 uppercase tracking-[0.2em] mb-8">Navigation</h4>
              <ul className="space-y-4">
                {footerLinks.navigation.map((link, i) => (
                  <li key={i}>
                    <Link to={link.href} className="text-slate-400 text-sm font-bold hover:text-white transition-colors flex items-center group">
                      {link.name}
                      <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] font-black text-blue-500 uppercase tracking-[0.2em] mb-8">Legal Docs</h4>
              <ul className="space-y-4">
                {footerLinks.legal.map((link, i) => (
                  <li key={i}>
                    <Link to={link.href} className="text-slate-400 text-sm font-bold hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Official Presence (HighRise Contact) */}
          <div className="lg:col-span-4 p-8 rounded-[2.5rem] bg-slate-900/50 border border-slate-800/50 backdrop-blur-sm shadow-2xl">
            <h4 className="text-[11px] font-black text-white uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
              <Building2 size={14} className="text-blue-500" /> Registered Office
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0"><MapPin size={18} /></div>
                <p className="text-sm font-bold text-slate-300 leading-relaxed">A-172 Kanak Avenue Colony, lasudiya Mori Indore, MP - 452010</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0"><Phone size={18} /></div>
                <p className="text-sm font-bold text-slate-300">+91 90986 93674</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0"><Mail size={18} /></div>
                <p className="text-sm font-bold text-slate-300">pavanraghuvanshi2014@gmail.com</p>
              </div>

              <div className="pt-6 border-t border-slate-800 flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 shadow-lg shadow-emerald-500/10">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-0.5">SEBI Reg No.</p>
                  <p className="text-sm font-mono font-bold text-white tracking-wider">INH000009427</p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 shadow-lg shadow-blue-500/10">
                  <Building2 size={24} />
                </div>
                <div>
                  <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-0.5">BSE Enlistment No.</p>
                  <p className="text-sm font-mono font-bold text-white tracking-wider">5543</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory & Advisory Section (Redesigned) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Risk Disclosure */}
          <div className="p-8 rounded-[2rem] bg-slate-900 border border-slate-800 shadow-inner group">
            <div className="flex items-center gap-3 mb-4">
              <Info size={18} className="text-amber-500" />
              <h4 className="text-[11px] font-black text-slate-300 uppercase tracking-[0.2em]">Risk & Compliance</h4>
            </div>
            <p className="text-[10px] text-slate-500 leading-relaxed font-bold uppercase tracking-wider italic">
              Investment in securities market are subject to market risks. Read all the related documents carefully before investing. Registration granted by SEBI, membership of BASL and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.
            </p>
          </div>

          {/* SEBI Authority Details */}
          <div className="p-8 rounded-[2rem] bg-slate-900 border border-slate-800 shadow-inner">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck size={18} className="text-blue-500" />
              <h4 className="text-[11px] font-black text-slate-300 uppercase tracking-[0.2em]">Market Regulator (SEBI)</h4>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
              <span className="text-white font-bold block mb-1">SEBI Office (BKC):</span>
              Plot No.C4-A, 'G' Block, Bandra-Kurla Complex, Bandra (East), Mumbai - 400051, Maharashtra.
              <br />
              <span className="text-slate-500 text-[10px] mt-2 block font-bold">
                Tel: +91-22-26449000 / 40459000 | Email: sebi@sebi.gov.in
                <br />
                Toll Free Investor Helpline: 1800 22 7575
              </span>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-bold tracking-wide">
            © {currentYear} HighRise Research. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-800"></span>
            <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.3em]">Institutional Grade Financial Research</p>
            <span className="h-1.5 w-1.5 rounded-full bg-slate-800"></span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;