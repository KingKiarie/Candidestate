import React from "react";
import Tile from "../../Components/Tile";
import AboutTile from "../../Components/AboutTile";
import { motion } from "framer-motion";
import AgentList from "../../Components/AgentCard";
import Services from "../../Components/Services";
import Process from "../../Components/Process";
import FAQAccordion from "../../Components/Faq";
import ScrollableCards from "../../Components/AboutCards";

const About = () => {
  const aboutData = [
    {
      title: "About Us",
      content:
        "We are a leading estate-selling firm committed to connecting buyers with their dream properties. Our team prides itself on professionalism, trust, and transparency in every transaction.",
    },
    {
      title: "Mission and Vision",
      content:
        "Our mission is to transform the real estate experience by providing exceptional service and fostering lifelong relationships. We envision a future where every property transaction is seamless and empowering for all involved.",
    },
    {
      title: "Services",
      content: [
        "Residential and Commercial Property Sales",
        "Market Analysis and Property Valuation",
        "Virtual Tours and Digital Property Management",
        "Sustainable and Eco-Friendly Property Listings",
        "Tailored Client Support Throughout the Process",
      ],
    },
  ];

  return (
    <section className="w-full h-auto mt-40">
      <div className="w-full max-w-[80%] mx-auto">
        <h1 className="text-3xl font-bold ">About Us</h1>
        <div className="my-10">
          <div className="flex flex-col md:flex-col lg:flex-row space-y-10 space-x-8">
            <div className="w-full flex  items-center justify-center">
              <img
                src="/bout.jpg"
                alt=""
                className="w-full rounded-xl  h-auto"
              />
            </div>

            <div className="flex flex-col items-center justify-evenly ">
              <ScrollableCards />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col  md:flex-row lg:flex-row space-x-4 my-20">
          {/* Mission Section */}
          <div className="w-full flex items-center justify-center flex-col space-y-4">
            <div className="w-full flex items-center justify-center rounded-lg ">
              <img
                src="/mission.jpg"
                alt="Our Mission"
                className="w-3/4 rounded-full shadow-lg"
              />
            </div>
            <div className="p-4 text-center">
              <h1 className="text-3xl font-bold text-blue-800">Our Mission</h1>
              <p className="italic text-gray-700 mt-2">
                "To be the most trusted and innovative real estate firm,
                empowering our clients with a seamless, transparent, and
                enriching property experience."
              </p>
            </div>
          </div>

          {/* Vision Section */}
          <div className="w-full flex flex-col items-center justify-center space-y-4">
            <div className="w-full flex items-center justify-center border-hidden lg:border-l-2 lg:border-gray-200 rounded-lg">
              <img
                src="/vision.jpg"
                alt="Our Vision"
                className="w-3/4 rounded-full shadow-lg"
              />
            </div>
            <div className="p-4 text-center">
              <h1 className="text-3xl font-bold text-blue-800">Our Vision</h1>
              <p className="italic text-gray-700 mt-2">
                "To be the most trusted and innovative real estate firm,
                empowering our clients with a seamless, transparent, and
                enriching property experience."
              </p>
            </div>
          </div>
        </div>

        <div className="my-10">
          <AgentList />
        </div>
        <div className="my-20">
          <Services />
        </div>
        <div className="my-20">
          <Process />
        </div>
        <div className="my-20">
          <FAQAccordion />
        </div>
      </div>
    </section>
  );
};

export default About;
