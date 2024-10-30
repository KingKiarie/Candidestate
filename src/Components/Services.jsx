import React from "react";
import { motion } from "framer-motion";
import {
  FaHome,
  FaChartLine,
  FaCamera,
  FaLeaf,
  FaHandshake,
} from "react-icons/fa";

const services = [
  {
    icon: <FaHome className="text-blue-500 text-4xl" />,
    title: "Residential Sales",
    description: "Helping you find the perfect home with peace of mind.",
  },
  {
    icon: <FaChartLine className="text-green-500 text-4xl" />,
    title: "Market Analysis",
    description: "Providing accurate insights to guide your investments.",
  },
  {
    icon: <FaCamera className="text-purple-500 text-4xl" />,
    title: "Virtual Tours",
    description: "Experience properties from the comfort of your home.",
  },
  {
    icon: <FaLeaf className="text-teal-500 text-4xl" />,
    title: "Sustainable Listings",
    description: "Offering eco-friendly and energy-efficient properties.",
  },
  {
    icon: <FaHandshake className="text-orange-500 text-4xl" />,
    title: "Client Support",
    description: "Personalized support throughout every step of the process.",
  },
];

const ServiceCard = ({ icon, title, description }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6 text-center max-w-xs mx-auto hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section className="w-full px-4 py-10 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-black mb-6">
          Our Services
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Experience our services designed to provide ease and comfort through
          every step of your real estate journey.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
