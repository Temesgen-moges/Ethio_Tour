import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden dark:bg-gray-900 py-14">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20 animate-pulse-slow">
        <div className="absolute w-64 h-64 bg-purple-500 rounded-full -top-32 -left-32 mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute w-64 h-64 bg-blue-500 rounded-full -bottom-32 -right-32 mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="container relative z-10">
        <div 
          data-aos="zoom-in"
          className="relative bg-gradient-to-br from-blue-600 to-purple-600 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 group"
        >
          {/* Floating elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-48 h-48 bg-white/5 rounded-full -top-24 -left-24 animate-float"></div>
            <div className="absolute w-48 h-48 bg-white/5 rounded-full -bottom-24 -right-24 animate-float animation-delay-2000"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {/* Text Content */}
            <div className="col-span-2 space-y-6">
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                  Discover Ethiopian Wonders
                </span>
              </h1>
              
              <p className="text-gray-200 dark:text-gray-300 text-lg leading-relaxed transition-all duration-300 group-hover:translate-x-2">
                Journey through Ethiopia's ancient heritage, breathtaking landscapes, 
                and vibrant culture. Let us guide you through unforgettable experiences.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-12"
                  >
                    <Icon className="text-2xl text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-300 hover:translate-x-2"
                  placeholder="Your Name"
                />
              </div>
              
              <div className="relative">
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-300 hover:translate-x-2"
                  placeholder="Your Email"
                />
              </div>
              
              <button
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 uppercase tracking-wider hover:gap-3 hover:shadow-lg"
              >
                <span>Contact Us</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transition-all duration-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
          100% { transform: translateY(0px) rotate(360deg); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.15; }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Contact;