import React from "react";
import { TrendingUp, Users, ShieldCheck, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const Stats = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const statsData = [
    {
      icon: BarChart3,
      value: "5+ Years",
      label: "Market Experience",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: Users,
      value: "1000+",
      label: "Active Clients",
      color: "text-indigo-600",
      bg: "bg-indigo-50",
    },
    {
      icon: ShieldCheck,
      value: "SEBI Reg.",
      label: "INH000009427",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      icon: TrendingUp,
      value: "92%",
      label: "Accuracy Rate",
      color: "text-blue-500",
      bg: "bg-sky-50",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.08),_transparent_70%)] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {statsData.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative p-8 rounded-[2rem] bg-white/60 border border-slate-100 backdrop-blur-md shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(59,130,246,0.15)] transition-all duration-300"
              >
                {/* Icon */}
                <motion.div
                  className={`w-14 h-14 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mb-6`}
                  whileHover={{ rotate: 6, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Icon size={28} />
                </motion.div>

                {/* Value */}
                <h3 className="text-3xl font-black text-slate-900 mb-1">
                  {stat.value}
                </h3>

                {/* Label */}
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                  {stat.label}
                </p>

                {/* Bottom Glow Bar */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-blue-600 rounded-full transition-all duration-500 group-hover:w-1/3"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;