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
        subtitle="Empowering Retail Investors with Structured Market Research"
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
              HighRise Research <span className="text-blue-600 italic">bridges the gap</span> between complex market data and structured market insights.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Founded with a vision to make high-quality financial research accessible, HighRise Research provides equity and index research services to retail participants across India. Our approach is built on transparency, data-driven analysis, and disciplined research frameworks.
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
            <p className="text-slate-600 text-lg font-medium">The principles that guide our research and the insights we share.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Integrity', desc: 'We emphasize transparency and clarity in our research approach and communication.', icon: <ShieldCheck size={32} /> },
              { title: 'Analytical Discipline', desc: 'Our research is based on structured data analysis and well-defined frameworks.', icon: <BarChart3 size={32} /> },
              { title: 'Investor Awareness', desc: 'We aim to simplify market concepts to support informed and independent decision-making.', icon: <Users size={32} /> },
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

      {/* --- Vision & Mission Section --- */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto border-t border-slate-100">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-[3.5rem] bg-blue-600 text-white shadow-2xl shadow-blue-200 relative overflow-hidden group"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
             <h3 className="text-sm font-black uppercase tracking-[0.3em] mb-6 opacity-80 flex items-center gap-2">
               <Target size={16} /> OUR VISION
             </h3>
             <p className="text-2xl font-bold leading-relaxed relative z-10">
               To simplify financial markets through transparent and research-driven insights.
             </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-12 rounded-[3.5rem] bg-slate-900 text-white shadow-2xl shadow-slate-200 relative overflow-hidden group"
          >
             <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full -ml-16 -mb-16 group-hover:scale-150 transition-transform duration-700"></div>
             <h3 className="text-sm font-black uppercase tracking-[0.3em] mb-6 opacity-80 flex items-center gap-2">
               <ShieldCheck size={16} /> OUR MISSION
             </h3>
             <p className="text-xl font-bold leading-relaxed relative z-10">
               To provide accessible, data-driven research that helps investors understand market opportunities and risks, and make informed investment decisions.
             </p>
          </motion.div>
        </div>
      </section>

      {/* --- Legal Links Section --- */}
      <section className="py-12 px-6 md:px-16 max-w-7xl mx-auto text-center border-t border-slate-100">
        <a 
          href="/rights-and-obligations" 
          className="text-lg font-black text-blue-600 hover:text-blue-700 transition-colors flex items-center justify-center gap-2 group"
        >
          Rights and Obligations of Clients and SEBI-Registered Research Analyst
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </section>
    </main>
  );
};

export default About;
