import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [activeField, setActiveField] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-blue-50/50 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Side: Contact Info & Map Placeholder */}
          <motion.div
            className="lg:col-span-5 space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase mb-4">
                Connect With Us
              </h2>
              <h3 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-6">
                Let's Discuss Your <br />
                <span className="text-slate-400 font-light text-4xl">Investment Goals.</span>
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed max-w-md">
                Have questions about our SEBI-registered research? Our team is here to provide the clarity you need.
              </p>
            </motion.div>

            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: <Phone size={20} />, label: "Call Us", value: "+91 90986 93674", color: "text-blue-600", bg: "bg-blue-50" },
                { icon: <Mail size={20} />, label: "Email Support", value: "pavanraghuvanshi2014@gmail.com", color: "text-indigo-600", bg: "bg-indigo-50" },
                { icon: <MapPin size={20} />, label: "Our Office", value: "A-172 Kanak Avenue Colony, lasudiya Mori Indore", color: "text-emerald-600", bg: "bg-emerald-50" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-5 group cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                >
                  <motion.div
                    className={`w-12 h-12 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center shadow-sm`}
                    whileHover={{ scale: 1.1, rotate: 6 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.label}</p>
                    <p className="text-slate-900 font-bold">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              className="relative h-48 w-full rounded-[2rem] bg-slate-100 overflow-hidden border border-slate-200 group"
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              <motion.div
                className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/72.8777,19.0760,12,0/600x400?access_token=YOUR_TOKEN')] bg-cover bg-center grayscale opacity-60"
                whileHover={{ grayscale: 0, scale: 1.1 }}
                transition={{ duration: 1 }}
              ></motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white shadow-sm">
                <Globe size={14} className="text-blue-600" />
                <span className="text-[10px] font-bold text-slate-700 uppercase">View on Google Maps</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Modern Contact Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative p-1 md:p-10 lg:p-12 rounded-[3rem] bg-white border border-slate-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)]"
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                    <motion.input
                      type="text"
                      placeholder="John Doe"
                      onFocus={() => setActiveField('name')}
                      onBlur={() => setActiveField(null)}
                      className={`w-full px-6 py-4 rounded-2xl bg-slate-50 border transition-all duration-300 outline-none ${activeField === 'name' ? 'border-blue-500 bg-white shadow-[0_0_20px_rgba(59,130,246,0.15)]' : 'border-transparent'}`}
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>
                  {/* Email Input */}
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    viewport={{ once: true }}
                  >
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                    <motion.input
                      type="email"
                      placeholder="john@example.com"
                      onFocus={() => setActiveField('email')}
                      onBlur={() => setActiveField(null)}
                      className={`w-full px-6 py-4 rounded-2xl bg-slate-50 border transition-all duration-300 outline-none ${activeField === 'email' ? 'border-blue-500 bg-white shadow-[0_0_20px_rgba(59,130,246,0.15)]' : 'border-transparent'}`}
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>
                </div>

                {/* Subject / Message Input */}
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Your Message</label>
                  <motion.textarea
                    rows="5"
                    placeholder="How can our research help you?"
                    onFocus={() => setActiveField('msg')}
                    onBlur={() => setActiveField(null)}
                    className={`w-full px-6 py-4 rounded-2xl bg-slate-50 border transition-all duration-300 outline-none resize-none ${activeField === 'msg' ? 'border-blue-500 bg-white shadow-[0_0_20px_rgba(59,130,246,0.15)]' : 'border-transparent'}`}
                    whileFocus={{ scale: 1.02 }}
                  ></motion.textarea>
                </motion.div>

                <motion.button
                  className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all duration-300 group"
                  whileHover={{ backgroundColor: '#2563eb', boxShadow: '0 25px 50px -12px rgba(37, 99, 235, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Inquiry
                  <motion.div
                    className="transition-transform duration-300"
                    whileHover={{ translateX: 4, translateY: -4 }}
                  >
                    <Send size={18} />
                  </motion.div>
                </motion.button>

                <motion.p
                  className="text-center text-[11px] text-slate-400 font-medium"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  By clicking send, you agree to our <span className="text-blue-600 underline cursor-pointer">Privacy Policy</span>.
                </motion.p>
              </form>

              {/* Decorative Icon */}
              <motion.div
                className="absolute -top-6 -right-6 w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <MessageSquare size={28} />
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;