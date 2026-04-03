import React, { useState, useEffect } from "react";
import { collection, addDoc, serverTimestamp, getDocs, deleteDoc, doc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../Firebase";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, Upload, CheckCircle2, Loader2, Trash2, ShieldAlert } from "lucide-react";
import PageHero from "../Components/PageHero";

const Admin = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  // Form State
  const [title, setTitle] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [fullDesc, setFullDesc] = useState("");
  const [features, setFeatures] = useState([""]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    setIsFetching(true);
    try {
      const querySnapshot = await getDocs(collection(db, "services"));
      const servicesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setServices(servicesData);
    } catch (error) {
      console.error("Error fetching services:", error);
    } finally {
      setIsFetching(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      try {
        await deleteDoc(doc(db, "services", id));
        fetchServices();
      } catch (error) {
        console.error("Error deleting service:", error);
      }
    }
  };

  const handleFeatureChange = (index, value) => {
    const newFeatures = [...features];
    newFeatures[index] = value;
    setFeatures(newFeatures);
  };

  const addFeature = () => setFeatures([...features, ""]);
  
  const removeFeature = (index) => {
    if (features.length > 1) {
      setFeatures(features.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !shortDesc || !fullDesc) {
      alert("Please fill all required fields.");
      return;
    }

    setLoading(true);
    try {
      // 1. Filter empty features
      const validFeatures = features.filter(f => f.trim() !== "");

      // 2. Save to Firestore
      await addDoc(collection(db, "services"), {
        title,
        shortDesc,
        fullDesc,
        features: validFeatures,
        createdAt: serverTimestamp(),
      });

      setSuccess(true);
      fetchServices();
      
      // Reset Form
      setTitle("");
      setShortDesc("");
      setFullDesc("");
      setFeatures([""]);
      
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error("Error adding service: ", error);
      alert("Failed to upload service. " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#f7f7f5] min-h-screen pt-24 pb-12 text-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8 flex items-center gap-3">
          <ShieldAlert className="text-red-600" size={32} />
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Admin Dashboard</h1>
            <p className="text-slate-500 text-sm font-medium">Manage your services and content</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          
          {/* Form Section */}
          <div className="lg:col-span-3">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[2rem] p-6 md:p-8 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] border border-slate-100 relative overflow-hidden"
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Plus className="text-blue-600" /> Add New Service
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Service Title</label>
                    <input 
                      type="text" 
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      placeholder="e.g. Equity Research"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Short Description</label>
                    <input 
                      type="text" 
                      value={shortDesc}
                      onChange={(e) => setShortDesc(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      placeholder="Brief summary for cards..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Description</label>
                  <textarea 
                    value={fullDesc}
                    onChange={(e) => setFullDesc(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none"
                    placeholder="Provide full details about the service..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2 flex justify-between items-end">
                    Key Features
                    <button 
                      type="button" 
                      onClick={addFeature}
                      className="text-xs text-blue-600 font-bold flex items-center hover:text-blue-800"
                    >
                      <Plus size={14} className="mr-1" /> Add Feature
                    </button>
                  </label>
                  <div className="space-y-3">
                    <AnimatePresence>
                      {features.map((feature, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex gap-2"
                        >
                          <input 
                            type="text" 
                            value={feature}
                            onChange={(e) => handleFeatureChange(index, e.target.value)}
                            className="flex-1 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                            placeholder={"Feature " + (index + 1)}
                          />
                          <button 
                            type="button" 
                            onClick={() => removeFeature(index)}
                            className="w-12 flex items-center justify-center rounded-xl bg-red-50 text-red-500 hover:bg-red-100 hover:text-red-700 transition-colors"
                          >
                            <X size={18} />
                          </button>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-slate-900 text-white font-bold text-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? <Loader2 className="animate-spin" /> : "Publish Service"}
                  </button>
                  <AnimatePresence>
                    {success && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mt-4 p-4 rounded-xl bg-emerald-50 text-emerald-700 font-medium flex items-center justify-center gap-2 border border-emerald-100"
                      >
                        <CheckCircle2 size={20} /> Service published successfully!
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </form>
              
              {/* Decorative blurs */}
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 z-0 pointer-events-none" />
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 z-0 pointer-events-none" />
            </motion.div>
          </div>

          {/* List Section */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xl font-bold text-slate-800 mb-4 px-2">Uploaded Services</h3>
            
            {isFetching ? (
              <div className="flex justify-center p-8"><Loader2 className="animate-spin text-slate-400" /></div>
            ) : services.length === 0 ? (
              <div className="bg-slate-100 rounded-2xl p-8 text-center text-slate-500 text-sm">
                No services uploaded yet.
              </div>
            ) : (
              <div className="space-y-4 max-h-[800px] overflow-y-auto pr-2 pb-4 
                [&::-webkit-scrollbar]:w-1.5 
                [&::-webkit-scrollbar-track]:bg-transparent
                [&::-webkit-scrollbar-thumb]:bg-slate-200 
                [&::-webkit-scrollbar-thumb]:rounded-full"
              >
                {services.map(service => (
                  <motion.div 
                    layoutId={service.id}
                    key={service.id}
                    className="bg-white p-4 rounded-2xl flex gap-4 border border-slate-100 shadow-sm group hover:shadow-md transition-shadow"
                  >
                    <div className="flex-1 flex flex-col justify-center">
                      <h4 className="font-bold text-slate-900 leading-tight mb-1">{service.title}</h4>
                      <p className="text-xs text-slate-500 line-clamp-2">{service.shortDesc}</p>
                    </div>
                    <div className="flex items-center">
                      <button 
                        onClick={() => handleDelete(service.id)}
                        className="w-10 h-10 rounded-full flex items-center justify-center text-red-400 hover:bg-red-50 hover:text-red-600 transition-colors"
                        title="Delete Service"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </main>
  );
};

export default Admin;
