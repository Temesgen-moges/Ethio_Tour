import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CarPng from "../../assets/car1.png";
import { IoAirplaneSharp } from "react-icons/io5";
import { FaHotel, FaCarSide } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const [hoveredService, setHoveredService] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
    { icon: <IoAirplaneSharp />, title: "Air Tickets", color: "text-blue-500", stats: "500+ Routes" },
    { icon: <FaHotel />, title: "Hotels Booking", color: "text-green-500", stats: "1000+ Partners" },
    { icon: <FaCarSide />, title: "Tours", color: "text-red-500", stats: "200+ Destinations" },
  ];

  return (
    <div className="dark:bg-gray-900 bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 opacity-50 animate-gradient-rotate"></div>
        
        {/* Floating Blobs */}
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20 animate-blob"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20 animate-blob animation-delay-2000"></div>
        
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-8">
          {/* Image Section */}
          <motion.div 
            data-aos="slide-right" 
            className="relative group"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={CarPng}
              alt="Travel vehicle"
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          {/* Content Section */}
          <div className="space-y-6 sm:p-8 pb-6 backdrop-blur-sm bg-white/30 dark:bg-gray-900/50 rounded-xl">
            <motion.h1
              data-aos="fade-up"
              className="text-3xl sm:text-4xl font-bold font-serif bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
            >
              About Us
            </motion.h1>

            <motion.p 
              data-aos="fade-up"
              className="leading-8 tracking-wide text-gray-600 dark:text-gray-300"
            >
              At Ethiopian Tours and Travels, we are a team of dedicated professionals who share 
              a deep love for Ethiopia and a commitment to providing exceptional travel experiences.
            </motion.p>

            <div className="space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  onHoverStart={() => setHoveredService(index)}
                  onHoverEnd={() => setHoveredService(null)}
                  className="relative p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className={`${service.color} text-3xl`}
                      animate={{ scale: hoveredService === index ? 1.2 : 1 }}
                    >
                      {service.icon}
                    </motion.div>
                    <div>
                      <span className="text-lg font-medium block">{service.title}</span>
                      <motion.span
                        className="text-sm text-gray-500 dark:text-gray-400"
                        animate={{ opacity: hoveredService === index ? 1 : 0 }}
                      >
                        {service.stats}
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              data-aos="fade-up"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full overflow-hidden group"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes gradient-rotate {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        .animate-gradient-rotate {
          animation: gradient-rotate 15s ease infinite;
          background-size: 400% 400%;
        }

        .animate-blob {
          animation: blob 10s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default About;