import React from 'react';
import PageHero from '../Components/PageHero';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Users, Award, Target, BarChart3 } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '15+', icon: <Award className="text-blue-600" /> },
    { label: 'Active Clients', value: '5000+', icon: <Users className="text-blue-600" /> },
    { label: 'Success Rate', value: '85%', icon: <Target className="text-blue-600" /> },
    { label: 'Managed Assets', value: '₹100Cr+', icon: <BarChart3 className="text-blue-600" /> },
  ];

  return (
    <main className="bg-white text-slate-900">
      <PageHero
        title="Our Story."
        subtitle="Empowering Retail Traders with Institutional Grade Research"
        backgroundImage="https://cdn5.planetspark.in/media/medium_u1228994638_An_Indian_urban_office_setting_with_young_profess_391fafe5_b9ee_47ce_a431_b710986a6de5_3_43bdab5770.png"
      />

      {/* --- Introduction Section --- */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-[11px] font-black tracking-[0.3em] text-blue-600 uppercase bg-blue-50 rounded-full">
              Who We Are
            </span>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-8 tracking-tight text-slate-900">
              HighRise Research <span className="text-blue-600 italic">bridges the gap</span> between complex market data and profitable execution.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Founded with a vision to democratize high-quality financial research, HighRise Research has grown into a premier advisory firm serving retail and institutional traders across India. We believe in transparency, data-driven precision, and the power of disciplined trading.
            </p>
            
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
                alt="Our Workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-blue-600 p-8 rounded-[2rem] text-white shadow-xl hidden md:block">
              <TrendingUp size={48} className="mb-4" />
              <p className="text-2xl font-black">10 Years</p>
              <p className="text-blue-100 font-medium">Market Experience</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Stats Section --- */}
      

      {/* --- Values Section --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-6">Our Core Values</h2>
            <p className="text-slate-600 text-lg font-medium">The principles that guide our research and every recommendation we provide.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Integrity', desc: 'We prioritize our clients interests above all else, ensuring transparency in every report.', icon: <ShieldCheck size={32} /> },
              { title: 'Precision', desc: 'Our strategies are backed by rigorous quantitative analysis and institutional-grade tools.', icon: <Target size={32} /> },
              { title: 'Empowerment', desc: 'We don\'t just provide tips; we educate our clients to become independent traders.', icon: <Users size={32} /> },
            ].map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm"
              >
                <div className="text-blue-600 mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
