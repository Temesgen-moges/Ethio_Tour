import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import carPng from "../../assets/car.png";
import yellowCar from "../../assets/banner-car.png";

const Hero = ({ theme }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100, // Adjust scroll offset for navbar height
    });
  }, []);

  return (
    <div 
      className={`relative overflow-hidden min-h-[calc(100vh-4rem)] pt-16 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-indigo-50'
      }`} 
      id="hero"
    >
      {/* Floating Particles */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary dark:bg-yellow-400 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `scale(${Math.random() * 0.5 + 0.5})`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container min-h-[700px] flex items-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center w-full">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left max-w-2xl">
            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 dark:from-yellow-400 dark:to-orange-500"
            >
              Ethio Tours
            </h1>
            
            <p 
              data-aos="fade-up" 
              data-aos-delay="400"
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              Embark on an unforgettable journey through the cradle of civilization, 
              where ancient traditions meet breathtaking landscapes of Ethiopia
            </p>
            
            <div 
              data-aos="fade-up" 
              data-aos-delay="600"
              className="flex gap-4 justify-center lg:justify-start"
            >
              <button
                className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white transition duration-300 bg-gradient-to-r from-primary to-blue-600 rounded-full group hover:scale-105 hover:shadow-lg"
              >
                <span className="relative">Get Started</span>
                <span className="ml-2">→</span>
              </button>
              <button
                className="px-8 py-3 font-medium transition duration-300 border-2 rounded-full dark:border-gray-600 dark:hover:border-primary hover:border-primary hover:text-primary dark:hover:text-primary"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div 
            data-aos="zoom-in-up" 
            data-aos-delay="800"
            className="relative mt-12 lg:mt-0"
          >
            <img
              src={theme === "dark" ? carPng : yellowCar}
              alt="Tour vehicle"
              className="relative z-10 max-w-[600px] hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 animate-float">
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/50 dark:to-black/20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        /* Ensure proper scroll behavior with fixed navbar */
        html {
          scroll-padding-top: 4rem;
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Hero;