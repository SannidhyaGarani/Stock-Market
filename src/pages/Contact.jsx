import React from 'react';
import PageHero from '../Components/PageHero';
import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, MessageSquare, Clock, ShieldCheck } from 'lucide-react';

const Contact = () => {
  return (
    <main className="bg-white text-slate-900">
      <PageHero 
        title="Contact Us." 
        subtitle="We're here to help you navigate the markets with confidence."
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* --- Contact Info --- */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                Let's discuss your <span className="text-blue-600 italic">financial goals</span>.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed max-w-md font-medium">
                Whether you're a seasoned trader or just starting out, our team of research analysts is ready to provide the guidance you need.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white mb-4 shadow-lg shadow-blue-200">
                  <Phone size={20} />
                </div>
                <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-2">Call Us</h4>
                <p className="font-bold text-slate-900">+91 98272 16004</p>
                <p className="font-bold text-slate-900">+91 84618 83444</p>
              </div>

              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white mb-4 shadow-lg shadow-blue-200">
                  <Mail size={20} />
                </div>
                <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-2">Email Us</h4>
                <p className="font-bold text-slate-900">research@highrise.com</p>
                <p className="font-bold text-slate-900">support@highrise.com</p>
              </div>

              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white mb-4 shadow-lg shadow-blue-200">
                  <MapPin size={20} />
                </div>
                <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-2">Location</h4>
                <p className="font-bold text-slate-900">A-172 Kanak Avenue Colony,</p>
                <p className="font-bold text-slate-900">lasudiya Mori Indore</p>
              </div>

              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white mb-4 shadow-lg shadow-blue-200">
                  <Clock size={20} />
                </div>
                <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-2">Market Hours</h4>
                <p className="font-bold text-slate-900">Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p className="font-bold text-slate-400 text-xs mt-1">Closed on Exchange Holidays</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-6 bg-emerald-50 rounded-3xl border border-emerald-100">
              <ShieldCheck className="text-emerald-500 shrink-0" size={24} />
              <p className="text-sm font-bold text-emerald-800 uppercase tracking-tight">SEBI Registered Research Analyst - INH000000000</p>
            </div>
          </div>

          {/* --- Contact Form --- */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-200 shadow-2xl shadow-slate-200/50"
          >
            <div className="mb-10">
              <h3 className="text-2xl font-black text-slate-900 mb-2">Send us a message</h3>
              <p className="text-slate-500 font-medium">We'll get back to you within 24 hours.</p>
            </div>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-slate-400 font-black">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-50/50 transition-all font-bold placeholder-slate-300" 
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-slate-400 font-black">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-50/50 transition-all font-bold placeholder-slate-300" 
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-slate-400 font-black">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-50/50 transition-all font-bold placeholder-slate-300" 
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-slate-400 font-black">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-50/50 transition-all font-bold placeholder-slate-300 resize-none" 
                  placeholder="Tell us about your trading goals..."
                ></textarea>
              </div>

              <button className="w-full bg-slate-900 text-white font-black py-5 rounded-2xl hover:bg-blue-600 transition-all shadow-xl shadow-slate-900/10 active:scale-[0.98] flex items-center justify-center gap-3">
                Send Message <MessageSquare size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
