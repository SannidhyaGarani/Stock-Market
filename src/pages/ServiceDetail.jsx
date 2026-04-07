import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase';
import { motion } from 'framer-motion';
import { CheckSquare } from 'lucide-react';
import PageHero from '../Components/PageHero';

const ServiceDetail = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const docRef = doc(db, 'services', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setService(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching service:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [id]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen"><p>Loading service details...</p></div>;
  }

  if (!service) {
    return <div className="flex justify-center items-center h-screen"><p>Service not found.</p></div>;
  }

  return (
    <main className="bg-white min-h-screen  pb-12 text-slate-800">
       <PageHero
        title={service.title}
        subtitle={service.shortDesc}
        backgroundImage="https://plus.unsplash.com/premium_photo-1681487767138-ddf2d67b35c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3RvY2slMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100"
        >
          <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Service Overview</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8 whitespace-pre-wrap">{service.fullDesc}</p>
          
          <h3 className="text-2xl font-bold text-slate-900 mb-6 pt-6 border-t border-slate-200">Key Features</h3>
          <ul className="space-y-4">
            {service.features && service.features.map((feature, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckSquare size={20} />
                </div>
                <span className="text-slate-700 text-lg">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </main>
  );
};

export default ServiceDetail;
