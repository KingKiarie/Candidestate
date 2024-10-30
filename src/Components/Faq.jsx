import React, { useState } from "react";
import { motion } from "framer-motion";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What documents do I need to buy a property?",
      answer:
        "You typically need an identification document, proof of income, bank statements, and a pre-approval letter from a lender.",
    },
    {
      question: "How long does the buying process take?",
      answer:
        "The buying process can take anywhere from 30 to 60 days, depending on various factors such as financing and inspections.",
    },
    {
      question: "What are closing costs?",
      answer:
        "Closing costs are fees associated with finalizing the purchase of a property, including appraisal fees, title insurance, and attorney fees.",
    },
    {
      question: "Can I negotiate the price of a property?",
      answer:
        "Yes, negotiations are common in real estate transactions. Your agent can help you determine a fair offer based on market conditions.",
    },
    {
      question:
        "What is the difference between a buyer's agent and a seller's agent?",
      answer:
        "A buyer's agent represents the interests of the buyer, while a seller's agent represents the interests of the seller during the transaction.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full px-4 py-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-black mb-10">
          Frequently Asked Questions
        </h2>

        <div className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border rounded-lg bg-white "
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: activeIndex === index ? 1 : 1,
                height: activeIndex === index ? "auto" : "auto",
              }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="flex justify-between items-center p-4 cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-semibold text-black">
                  {faq.question}
                </h3>
                <span
                  className={`text-xl transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              <motion.div
                className={`overflow-hidden ${
                  activeIndex === index ? "h-auto" : "h-0"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: activeIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-4">
                  <p className="text-black">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
