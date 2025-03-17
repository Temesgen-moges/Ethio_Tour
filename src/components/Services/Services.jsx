import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaMoneyBillWave, 
  FaShieldAlt, 
  FaUsers, 
  FaCertificate, 
  FaStar,
  FaRegSmile
} from "react-icons/fa";

const servicesData = [
  {
    title: "Best Value",
    icon: <FaMoneyBillWave />,
    color: "from-blue-400 to-purple-400",
    frontContent: {
      headline: "Smart Savings, Unmatched Experiences",
      description: "Discover why 92% of travelers rate our packages as exceptional value",
      features: [
        "✓ Price match guarantee",
        "✓ All-inclusive options",
        "✓ Group discounts available"
      ]
    },
    backContent: {
      type: "pricing",
      priceRange: "$999 - $2999",
      details: [
        { label: "Average Daily Cost", value: "$150", note: "(Including lodging & transport)" },
        { label: "Seasonal Discounts", value: "Up to 25%", note: "(Early bird specials)" },
        { label: "Family Deals", value: "2 Kids Free", note: "(Under 12 years)" }
      ],
      bestDeal: true
    }
  },
  {
    title: "Safety First",
    icon: <FaShieldAlt />,
    color: "from-green-400 to-cyan-400",
    frontContent: {
      headline: "Travel with Confidence",
      description: "Our safety record: 99.8% incident-free journeys since 2015",
      features: [
        "✓ Real-time GPS tracking",
        "✓ 24/7 emergency support",
        "✓ Certified first-aid kits"
      ]
    },
    backContent: {
      type: "certifications",
      stats: [
        { icon: <FaCertificate />, label: "ISO 45001 Certified", value: "Safety Management" },
        { icon: <FaUsers />, label: "Trained Staff", value: "200+ Professionals" },
        { icon: <FaShieldAlt />, label: "Insurance Coverage", value: "$2M Policy" }
      ],
      partner: "Partnered with International SOS"
    }
  },
  {
    title: "Expert Guides",
    icon: <FaUsers />,
    color: "from-orange-400 to-red-400",
    frontContent: {
      headline: "Local Wisdom, Global Standards",
      description: "92% of travelers say our guides enhanced their experience",
      features: [
        "✓ Average 10+ years experience",
        "✓ Multilingual specialists",
        "✓ Cultural immersion experts"
      ]
    },
    backContent: {
      type: "team",
      qualifications: [
        { label: "Historical Experts", count: "45" },
        { label: "Wildlife Guides", count: "28" },
        { label: "UNESCO Certified", count: "17" }
      ],
      languages: ["Amharic", "English", "Oromo", "Tigrinya", "Arabic"],
      recognition: "2023 National Tourism Award Winners"
    }
  }
];

const ServiceCard = ({ service }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const renderBackContent = () => {
    switch (service.backContent.type) {
      case 'pricing':
        return (
          <div className="space-y-4 p-4">
            <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-center mb-2">
                {service.backContent.priceRange}
                {service.backContent.bestDeal && (
                  <span className="ml-2 text-sm bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 px-2 py-1 rounded-full">
                    BEST VALUE
                  </span>
                )}
              </div>
              <div className="space-y-3">
                {service.backContent.details.map((detail, index) => (
                  <div key={index} className="text-center">
                    <div className="font-bold text-lg">{detail.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {detail.label}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{detail.note}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm italic text-gray-600 dark:text-gray-300">
              <FaRegSmile className="text-yellow-400" />
              "Saved 15% compared to booking separately!" - Recent Traveler
            </div>
          </div>
        );

      case 'certifications':
        return (
          <div className="space-y-4 p-4">
            <div className="grid gap-3 mb-4">
              {service.backContent.stats.map((stat, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 p-3 rounded-lg shadow-sm flex items-center gap-3">
                  <div className="text-2xl text-primary">{stat.icon}</div>
                  <div>
                    <div className="font-semibold">{stat.label}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {stat.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center text-sm bg-blue-100 dark:bg-blue-900 p-2 rounded-lg">
              {service.backContent.partner}
            </div>
          </div>
        );

      case 'team':
        return (
          <div className="space-y-4 p-4">
            <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-sm">
              <h4 className="text-lg font-bold mb-2">Guide Qualifications</h4>
              <div className="grid gap-2 mb-4">
                {service.backContent.qualifications.map((qual, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{qual.label}:</span>
                    <span className="font-bold">{qual.count}</span>
                  </div>
                ))}
              </div>
              <div className="mb-4">
                <h4 className="font-bold mb-1">Languages Spoken</h4>
                <div className="flex flex-wrap gap-2">
                  {service.backContent.languages.map((lang, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-purple-100 dark:bg-purple-900 rounded-full text-sm"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-center text-sm italic text-gray-600 dark:text-gray-300">
                {service.backContent.recognition}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="h-96 perspective-1000 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative h-full w-full preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front Side */}
        <motion.div 
          className={`absolute h-full w-full bg-gradient-to-br rounded-2xl p-6 shadow-lg backface-hidden flex flex-col items-center justify-center ${service.color}`}
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="text-5xl mb-4 text-white">
            {service.icon}
          </div>
          <h3 className="text-2xl font-bold mb-2 text-center text-white">{service.title}</h3>
          <div className="text-center mb-4">
            <p className="font-semibold text-lg mb-2 text-white/90">{service.frontContent.headline}</p>
            <p className="text-sm text-white/80 mb-3">
              {service.frontContent.description}
            </p>
          </div>
          <ul className="space-y-2 text-sm text-left text-white/90">
            {service.frontContent.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <FaStar className="text-yellow-300" />
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Back Side */}
        <motion.div 
          className="absolute h-full w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg rotate-y-180 backface-hidden overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="h-full flex flex-col justify-center"
            >
              {renderBackContent()}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section className="py-20 dark:bg-gray-900" id="services">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-4"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Discover unique features that make your Ethiopian journey unforgettable
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </motion.div>
      </div>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        .preserve-3d {
          transform-style: preserve-3d;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        @keyframes float-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .scroll-float {
          animation: float-in 0.6s ease-out both;
        }
      `}</style>
    </section>
  );
};

export default Services;