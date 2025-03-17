import React from "react";

const testimonialData = [
  {
    name: "Dilshad",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    role: "Travel Blogger",
    description: "My trip to Ethiopia with Ethiopian Wonders was nothing short of amazing. The rich history, diverse cultures, and stunning landscapes left me in awe.",
    aosDelay: "0",
  },
  {
    name: "Satya",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    role: "History Enthusiast",
    description: "Exploring Ethiopia's historical sites felt like a journey through time. From Axum's obelisks to Gondar's medieval castles, each site revealed fascinating history.",
    aosDelay: "300",
  },
  {
    name: "Sabir",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    role: "Food Critic",
    description: "The culinary experience was incredible. Injera, spices, and traditional coffee ceremonies were a delightful immersion in Ethiopian culture.",
    aosDelay: "600",
  },
];

const Testimonial = () => {
  return (
    <section id="about" className="relative dark:bg-gray-900 py-14 sm:py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <div className="absolute w-64 h-64 bg-purple-500 rounded-full -top-32 -left-32 mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute w-64 h-64 bg-yellow-500 rounded-full -bottom-32 -right-32 mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center mb-4">
            <div className="h-1 w-12 bg-primary rounded-full mr-2"></div>
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 sm:text-4xl font-serif">
              Client Experiences
            </h2>
            <div className="h-1 w-12 bg-primary rounded-full ml-2"></div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Discover why travelers rave about their Ethiopian adventures
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialData.map((testimonial, index) => (
            <div
              key={testimonial.name}
              data-aos="fade-up"
              data-aos-delay={testimonial.aosDelay}
              className="relative group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Decorative gradient border */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              
              {/* User Profile */}
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-4 border-primary/20 object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold dark:text-white">{testimonial.name}</h3>
                  <p className="text-sm text-primary dark:text-primary-light">{testimonial.role}</p>
                </div>
              </div>

              {/* Rating Stars */}
              <div className="flex mb-4 space-x-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-600 dark:text-gray-300 italic relative pl-6 before:absolute before:left-0 before:top-0 before:text-6xl before:opacity-20 before:content-['“'] before:font-serif before:text-primary">
                {testimonial.description}
              </blockquote>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-primary/10 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Testimonial;