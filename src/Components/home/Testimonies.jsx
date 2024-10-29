import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const testimonies = () => {
  const testData = [
    {
      id: 1,
      name: "Joram",
      imageRef: "/avatars/1.jpg",
      Desc: "This platform transformed my workflow, making every task simpler and faster.",
      Role: "Product Designer",
    },
    {
      id: 2,
      name: "Asbek",
      imageRef: "/avatars/2.jpg",
      Desc: "I can now connect with other tech enthusiasts effortlessly. Love it!",
      Role: "Software Engineer",
    },
    {
      id: 3,
      name: "Ilin",
      imageRef: "/avatars/3.jpg",
      Desc: "Using this platform has been a game-changer for my projects!",
      Role: "Project Manager",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testData.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="w-full h-1/2 flex flex-col p-8 bg-gray-50 mb-20">
      <div className="w-full max-w-[80%] mx-auto">
        <div>
          <h1 className="text-3xl font-bold text-center my-20">Testimonials</h1>
        </div>
        <div className="w-full mx-auto flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={testData[currentIndex].id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.888 }}
              className="relative text-center p-4 rounded-lg shadow-lg bg-white flex flex-col md:flex-row lg:flex-row "
            >
              {/* <div className="absolute inset-0 bg-blue-200/20 w-[40%] h-[50%] top-40 rounded-xl left-[55%] z-10 hidden lg:block md:block"></div> */}
              <div className="relative z-20 mb-4 w-full">
                <img
                  src={testData[currentIndex].imageRef}
                  alt="User testimonial"
                  className="w-full h-fit rounded-xl mx-auto bg-cover"
                />
              </div>
              <div className="relative z-20 w-full items-center justify-center flex flex-col">
                <div>
                  <h1 className="text-3xl font-semibold my-10">
                    {testData[currentIndex].name}
                  </h1>
                </div>
                <div className="mb-2 text-lg italic font-semibold w-full">
                  {testData[currentIndex].Desc}
                </div>
                <div className="text-sm text-gray-600">
                  {testData[currentIndex].Role}
                </div>
                <div className="flex justify-center mt-6 space-x-4">
                  <button
                    onClick={handlePrevious}
                    className="px-4 py-2 bg-gray-200 rounded-full"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    onClick={handleNext}
                    className="px-4 py-2 bg-gray-800 text-white rounded-full"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default testimonies;
