import React, { useState } from "react";
import {
  Copy,
  CheckCircle2,
  Lock,
  ShieldCheck,
  CreditCard,
  Building2,
  Fingerprint,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";

const PaymentSection = () => {
  const [copied, setCopied] = useState(null);

  const bankDetails = {
    accountName: "HIGHRISE RESEARCH",
    accountNumber: "50200116853029",
    ifsc: "HDFC0006155",
    bankName: "HDFC Bank, Nipaniya Branch",
    upiId: "highriseresearch.ra@validhdfc",
  };

  // ✅ Safe Clipboard Copy (handles errors)
  const handleCopy = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(field);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600">
            <ShieldCheck size={14} />
            <span className="text-[10px] font-black uppercase tracking-widest">
              Secure Payment Gateway
            </span>
          </div>

          <h2 className="text-4xl font-black text-slate-900 tracking-tight">
            Subscription <span className="text-blue-600">Transfer</span>
          </h2>

          <p className="mt-4 text-slate-500 font-medium">
            Transfer the subscription fee directly to our verified corporate account.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          
          {/* LEFT */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Card */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:-translate-y-1 transition">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm mb-4">
                <Lock size={24} />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Encrypted Details</h4>
              <p className="text-sm text-slate-500">
                All banking details are verified and secured under SEBI compliance.
              </p>
            </div>

            {/* Icons Row */}
            <div className="flex items-center gap-4 px-2">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-full">
                <Fingerprint size={20} />
              </div>

              <p className="text-xs font-bold text-slate-400 uppercase">
                Identity Protected
              </p>

              <div className="h-6 w-[1px] bg-slate-200"></div>

              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-full">
                <CheckCircle2 size={20} />
              </div>

              <p className="text-xs font-bold text-slate-400 uppercase">
                Payment Verified
              </p>
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              {/* Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] blur opacity-10 group-hover:opacity-20 transition"></div>

              <div className="relative bg-white border border-slate-100 rounded-[2.5rem] shadow-xl overflow-hidden">
                
                {/* Header */}
                <div className="bg-slate-900 p-8 flex justify-between items-center text-white">
                  <div>
                    <p className="text-xs uppercase text-blue-400 mb-1">
                      Corporate Account
                    </p>
                    <h3 className="text-xl font-bold">
                      {bankDetails.accountName}
                    </h3>
                  </div>

                  <Building2 size={32} className="opacity-40" />
                </div>

                {/* Body */}
                <div className="p-8 space-y-6">
                  
                  {/* Account Number */}
                  <div className="flex justify-between items-center border-b pb-4">
                    <div>
                      <p className="text-xs text-slate-400">Account Number</p>
                      <p className="text-xl font-mono font-bold">
                        {bankDetails.accountNumber}
                      </p>
                    </div>

                    <button
                      onClick={() => handleCopy(bankDetails.accountNumber, "acc")}
                      className="p-3 rounded-xl bg-slate-50 hover:bg-blue-50 transition"
                    >
                      {copied === "acc" ? <Check size={20} /> : <Copy size={20} />}
                    </button>
                  </div>

                  {/* UPI ID */}
                  <div className="flex justify-between items-center border-b pb-4">
                    <div>
                      <p className="text-xs text-slate-400">UPI ID</p>
                      <p className="text-lg font-mono font-bold text-blue-600">
                        {bankDetails.upiId}
                      </p>
                    </div>

                    <button
                      onClick={() => handleCopy(bankDetails.upiId, "upi")}
                      className="p-3 rounded-xl bg-slate-50 hover:bg-blue-50 transition"
                    >
                      {copied === "upi" ? <Check size={20} /> : <Copy size={20} />}
                    </button>
                  </div>

                  {/* IFSC + Bank */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="border-b pb-4 flex justify-between items-center">
                      <div>
                        <p className="text-xs text-slate-400">IFSC</p>
                        <p className="font-mono font-bold">
                          {bankDetails.ifsc}
                        </p>
                      </div>

                      <button
                        onClick={() => handleCopy(bankDetails.ifsc, "ifsc")}
                        className="p-2 rounded-lg bg-slate-50 hover:bg-blue-50 transition"
                      >
                        {copied === "ifsc" ? <Check size={14} /> : <Copy size={14} />}
                      </button>
                    </div>

                    <div>
                      <p className="text-xs text-slate-400">Bank</p>
                      <p className="font-bold">{bankDetails.bankName}</p>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-8 py-6 bg-blue-50 flex items-center gap-2">
                  <CreditCard size={18} className="text-blue-600" />
                  <p className="text-xs text-blue-700">
                    Share payment screenshot for instant activation
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PaymentSection;