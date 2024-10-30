import React, { useState } from "react";
import { motion } from "framer-motion";

const steps = {
  buying: [
    { title: "Initial Consultation", description: "Meet with our agents to discuss your requirements and budget." },
    { title: "Property Search", description: "We search and shortlist properties based on your preferences." },
    { title: "Viewings", description: "Tour selected properties to find the perfect fit for you." },
    { title: "Offer & Negotiation", description: "Our agents help negotiate the best terms for your purchase." },
    { title: "Closing", description: "Complete the final paperwork and become a proud property owner!" },
  ],
  selling: [
    { title: "Property Evaluation", description: "We assess your property and suggest a competitive price." },
    { title: "Marketing & Listing", description: "Your property is listed across our network for maximum exposure." },
    { title: "Showings", description: "We arrange and conduct property showings with potential buyers." },
    { title: "Offer & Negotiation", description: "Our agents assist in negotiating offers to get you the best deal." },
    { title: "Closing", description: "Finalize the sale with all paperwork, making the process seamless." },
  ],
};

const ProcessFlow = ({ steps }) => (
  <div className="w-full space-y-4">
    {steps.map((step, index) => (
      <motion.div
        key={index}
        className="flex items-start border rounded-lg p-4 border-gray-300 bg-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
      >
        <div className="flex-shrink-0 w-10 h-10 bg-black rounded-full text-white flex items-center justify-center font-semibold text-lg">
          {index + 1}
        </div>
        <div className="ml-4 w-full">
          <h3 className="text-lg font-bold text-center text-black">{step.title}</h3>
          <p className="text-black text-center">{step.description}</p>
        </div>
      </motion.div>
    ))}
  </div>
);

const Process = () => {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <section className="w-full px-4 py-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-black mb-10">Our Process</h2>
        
        {/* Buttons to Toggle Sections */}
        <div className="space-x-4 mb-8">
          <button
            onClick={() => setActiveSection("buying")}
            className={`px-6 py-2 text-lg font-semibold rounded-md ${activeSection === "buying" ? "bg-blue-800 text-white" : "bg-gray-200 text-black"}`}
          >
            Buying
          </button>
          <button
            onClick={() => setActiveSection("selling")}
            className={`px-6 py-2 text-lg font-semibold rounded-md ${activeSection === "selling" ? "bg-blue-800 text-white" : "bg-gray-200 text-black"}`}
          >
            Selling
          </button>
        </div>
        
        {/* Conditionally Render Buying or Selling Process */}
        <div>
          {activeSection === "buying" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <h3 className="text-3xl font-semibold text-black mb-6">Buying a Property</h3>
              <ProcessFlow steps={steps.buying} />
            </motion.div>
          )}
          {activeSection === "selling" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <h3 className="text-3xl font-semibold text-black mb-6">Selling a Property</h3>
              <ProcessFlow steps={steps.selling} />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Process;
