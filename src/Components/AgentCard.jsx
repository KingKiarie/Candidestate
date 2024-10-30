import React, { useState } from "react";
import { motion } from "framer-motion";

const agents = [
  {
    name: "Joab",
    imageRef: "public/agent1.jpg",
    role: "Real Estate Agent",
  },
  {
    name: "Mary",
    imageRef: "public/agent.jpg",
    role: "Senior Property Consultant",
  },
  {
    name: "Alex",
    imageRef: "public/agent3.jpg",
    role: "Client Relations Manager",
  },
  {
    name: "Sara",
    imageRef: "https://via.placeholder.com/150",
    role: "Real Estate Analyst",
  },
];

const AgentCard = ({ name, imageRef, role }) => {
  return (
    <motion.div
      className="relative my-20 w-full max-w-md h-80 bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <img src={imageRef} alt={name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      </div>
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <p className="text-white text-lg font-medium">{role}</p>
      </motion.div>
    </motion.div>
  );
};

const AgentList = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const handleNext = () => {
    if (startIndex + itemsPerPage < agents.length) {
      setStartIndex((prevIndex) => prevIndex + itemsPerPage);
    }
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => prevIndex - itemsPerPage);
    }
  };

  return (
    <div className="w-full mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Agents</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents
          .slice(startIndex, startIndex + itemsPerPage)
          .map((agent, index) => (
            <AgentCard
              key={index}
              name={agent.name}
              imageRef={agent.imageRef}
              role={agent.role}
            />
          ))}
      </div>
      <div className="flex justify-end space-x-4 mt-8">
        <button
          onClick={handlePrevious}
          disabled={startIndex === 0}
          className="px-4 py-2 bg-black text-white rounded-md disabled:bg-gray-300"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={startIndex + itemsPerPage >= agents.length}
          className="px-4 py-2 bg-black text-white rounded-md disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AgentList;
