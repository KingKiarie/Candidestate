import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, animate } from "framer-motion";

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const textCarousel = [
    {
      id: 1,
      title: "Your Resort to Elegance",
      desc: "Join Us today",
    },
    {
      id: 2,
      title: "A Journey of Comfort",
      desc: "Book Your Stay",
    },
    {
      id: 3,
      title: "Experience Pure Bliss",
      desc: "Discover More",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) =>
        prevIndex === textCarousel.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [textCarousel.length]);

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const currentText = textCarousel[currentTextIndex];

  return (
    <section
      className="relative w-full h-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: "url(/hero.jpg)" }}
    >
      <div className="absolute inset-0 z-10 bg-black opacity-50 w-[80%] h-[50%] lg:w-[80%] lg:h-[80%] top-64 lg:top-20 left-[10%]"></div>
      <AnimatePresence mode="wait">
        <motion.div className="space-y-16 h-screen relative z-20 flex flex-col justify-center items-center ">
          <motion.div
            key={currentText.id}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.888 }}
            className="space-y-10"
          >
            <h1 className="text-3xl md:text-6xl lg:text-6xl text-center text-montserrat font-black text-white">
              {currentText.title}
            </h1>
            <p className="text-center text-xl font-bold  text-white">
              {currentText.desc}
            </p>
          </motion.div>

          <div className=" relative space-x-10">
            <button className="px-8 py-4 text-white text-lg font-semibold bg-black rounded-md hover:text-black hover:bg-white hover:scale-105 transition-all ease-in duration-300 ">
              Learn more
            </button>
            <button className="px-8 py-4 text-white text-lg font-semibold border-2 rounded-md hover:bg-black hover:text-white hover:border-black hover:rounded-md  transition-all ease-in">
              Buy now
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Hero;
