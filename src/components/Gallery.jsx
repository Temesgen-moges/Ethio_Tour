import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { FaMapMarkerAlt, FaInfoCircle, FaArrowRight } from "react-icons/fa";
import image22 from "../assets/22.jpg";
import image33 from "../assets/33.jpg";
import image44 from "../assets/44.jpg";
import image55 from "../assets/55.jpg";
import image66 from "../assets/66.jpg";
import image77 from "../assets/77.jpg";

const destinationsData = [
  {
    id: 1,
    name: "Danakil Desert",
    image: image22,
    description: "The Danakil Desert is a vast and hostile desert located in the northeastern part of Ethiopia. It is one of the hottest and lowest places on Earth, known for its extreme temperatures.",
    location: "Northeastern Ethiopia",
    highlights: ["Colorful sulfur springs", "Salt flats", "Volcanic landscapes"]
  },
  {
    id: 2,
    name: "Gondar Castle",
    image: image33,
    description: "Gondar Castle is situated in the city of Gondar in the northern part of Ethiopia. Gondar itself was the capital of the Ethiopian Empire during the 17th and 18th centuries.",
    location: "Northern Ethiopia",
    highlights: ["Royal Enclosure", "Medieval architecture", "Historical palaces"]
  },
  {
    id: 3,
    name: "Lalibela",
    image: image44,
    description: "Lalibela is located in the Amhara Region of northern Ethiopia. The town is situated in the Lasta mountain range, known for its rugged and rocky terrain.",
    location: "Amhara Region",
    highlights: ["Rock-hewn churches", "Religious ceremonies", "Ancient engineering marvel"]
  },
  {
    id: 4,
    name: "Harar Jugol",
    image: image55,
    description: "Harar Jugol is a UNESCO World Heritage Site and is known for its rich cultural and historical significance. The ancient walled city features unique architecture and vibrant markets.",
    location: "Eastern Ethiopia",
    highlights: ["Ancient walled city", "Hyena feeding tradition", "Colorful markets"]
  },
  {
    id: 5,
    name: "Tiya Stelae",
    image: image66,
    description: "It is a UNESCO World Heritage Site in Ethiopia known for its ancient megalithic pillars or stelae. These mysterious stone monuments date back several centuries.",
    location: "Southern Ethiopia",
    highlights: ["Ancient stone monuments", "Archaeological site", "Historical mystery"]
  },
  {
    id: 6,
    name: "Axum",
    image: image77,
    description: "A city in northern Ethiopia known for its historical and archaeological significance. It was once the center of the mighty Aksumite Empire and home to legendary treasures.",
    location: "Tigray Region",
    highlights: ["Ancient obelisks", "Church of St. Mary of Zion", "Queen of Sheba's Palace"]
  }
];

const DestinationCard = ({ destination, index, openModal, theme }) => {
  const cardRef = useRef(null);
  const controls = useAnimation();
  const [isInView, setIsInView] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const yOffset = useTransform(
    scrollYProgress, 
    [0, 1], 
    [index % 2 === 0 ? 100 : -100, 0]
  );
  
  const scale = useTransform(
    scrollYProgress, 
    [0, 0.5, 1], 
    [0.8, 1, 1]
  );
  
  const opacity = useTransform(
    scrollYProgress, 
    [0, 0.2, 1], 
    [0, 1, 1]
  );
  
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [index % 2 === 0 ? 50 : -50, 0]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [controls]);

  return (
    <motion.div
      ref={cardRef}
      style={{
        opacity: opacity,
        scale: scale,
        y: yOffset
      }}
      whileHover={{ 
        scale: 1.05, 
        boxShadow: theme === 'dark' 
          ? "0 20px 25px -5px rgba(255, 255, 255, 0.1), 0 10px 10px -5px rgba(255, 255, 255, 0.04)" 
          : "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
      }}
      onHoverStart={() => setHoveredIndex(index)}
      onHoverEnd={() => setHoveredIndex(null)}
      className={`relative overflow-hidden rounded-xl shadow-lg h-[400px] group ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        style={{ y: imageY }}
      >
        <img 
          src={destination.image} 
          alt={destination.name} 
          className="w-full h-full object-cover transition-transform duration-5000 group-hover:scale-110" 
          loading="lazy" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
      </motion.div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <motion.h3 
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className={`text-2xl font-bold mb-2 ${
            theme === 'dark' ? 'text-white' : 'text-gray-800'
          }`}
        >
          {destination.name}
        </motion.h3>
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center mb-3"
        >
          <FaMapMarkerAlt className={`${theme === 'dark' ? 'text-amber-400' : 'text-amber-600'} mr-2`} />
          <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            {destination.location}
          </span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: hoveredIndex === index ? 1 : 0,
            height: hoveredIndex === index ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="text-sm text-gray-200 mb-4 line-clamp-2">
            {destination.description}
          </p>
        </motion.div>
        
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => openModal(destination)}
          className={`flex items-center mt-2 ${
            theme === 'dark' ? 'bg-amber-500 hover:bg-amber-600' : 'bg-amber-600 hover:bg-amber-700'
          } text-white px-5 py-2 rounded-full text-sm font-medium transition-colors`}
        >
          Explore <FaArrowRight className="ml-2" />
        </motion.button>
      </div>
    </motion.div>
  );
};

const Gallery = ({ theme }) => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const galleryRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const openModal = (destination) => {
    setSelectedDestination(destination);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedDestination(null), 300);
  };

  return (
    <section 
      ref={galleryRef} 
      className={`py-20 ${
        theme === 'dark' 
          ? 'bg-black text-white' 
          : 'bg-gray-50 text-gray-800'
      }`}
      id="gallery"
    >
      <div className="container mx-auto px-4">
        <motion.div
          style={{ 
            y: headerY,
            opacity: headerOpacity
          }}
          className="text-center mb-16"
        >
          <h1 className={`text-4xl sm:text-5xl font-bold font-serif mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-800'
          }`}>
            Discover <span className="text-amber-600">Ethiopia's</span> Treasures
          </h1>
          <p className={`${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          } max-w-2xl mx-auto text-lg`}>
            Embark on an unforgettable journey through the cradle of civilization, where ancient traditions 
            meet breathtaking landscapes. Explore these magical destinations with Ethio Tours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinationsData.map((destination, index) => (
            <DestinationCard 
              key={destination.id}
              destination={destination}
              index={index}
              openModal={openModal}
              theme={theme}
            />
          ))}
        </div>
      </div>

      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className={`relative rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row ${
              theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {selectedDestination && (
              <>
                <motion.div 
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="md:w-1/2 h-64 md:h-auto relative"
                >
                  <img 
                    src={selectedDestination.image} 
                    alt={selectedDestination.name} 
                    className="w-full h-full object-cover"
                  />
                  <button 
                    onClick={closeModal}
                    className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </motion.div>
                <motion.div 
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="md:w-1/2 p-6 md:p-8 overflow-y-auto"
                >
                  <motion.h2 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className={`text-3xl font-bold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-800'
                    }`}
                  >
                    {selectedDestination.name}
                  </motion.h2>
                  <motion.div 
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center mb-6"
                  >
                    <FaMapMarkerAlt className="text-amber-600 mr-2" />
                    <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                      {selectedDestination.location}
                    </span>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mb-6"
                  >
                    <h3 className={`text-xl font-semibold mb-3 flex items-center ${
                      theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                      <FaInfoCircle className="mr-2 text-amber-600" /> About This Destination
                    </h3>
                    <p className={`${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    } leading-relaxed`}>
                      {selectedDestination.description}
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="mb-6"
                  >
                    <h3 className={`text-xl font-semibold mb-3 ${
                      theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                    }`}>Highlights</h3>
                    <ul className="space-y-2">
                      {selectedDestination.highlights.map((highlight, index) => (
                        <motion.li 
                          key={index} 
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.8 + (index * 0.1) }}
                          className="flex items-start"
                        >
                          <svg className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                          </svg>
                          <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                            {highlight}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                  
                  <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full ${
                      theme === 'dark' ? 'bg-amber-500 hover:bg-amber-600' : 'bg-amber-600 hover:bg-amber-700'
                    } text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center`}
                  >
                    Book This Adventure Now
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.button>
                </motion.div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;