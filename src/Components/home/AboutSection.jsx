import React from "react";
import Tile from "../Tile";

const AboutSection = () => {
  const aboutData = [
    {
      id: 1,
      headerTag: "About Us",
      title: "Connecting You to Your Ideal Property",
      desc: `Welcome to our platform, where buying and selling properties is made simple, transparent, and rewarding. We offer a range of services designed to support every step of your real estate journey, from finding the perfect home to securing profitable investments. 
      
      As a trusted marketplace, we prioritize transparency and ease of use, ensuring that each transaction is seamless and secure. Our team of experienced professionals is dedicated to providing you with up-to-date listings, accurate property details, and market insights to empower your decisions. 

      Whether you’re a first-time homebuyer, a seasoned investor, or someone looking to sell, our platform caters to all. With a commitment to quality, we work to match you with properties that truly fit your needs and preferences. Join us, and experience a smarter, faster way to navigate the real estate market.`,
      btn: "Learn More",
    },
  ];

  return (
    <section className="w-full h-1/2 py-24 bg-gray-50 ">
      <div className="w-full max-w-[80%] mx-auto flex flex-row space-x-8">
        <div className="relative w-full">
          <img
            src="/About.jpg"
            alt=""
            className="rounded-xl relative z-20 w-4/6 left-[30%] top-[10%]"
          />
          <img
            src="/about2.jpg"
            alt=""
            className="absolute top-[-5%] right56 w-4/6 rounded-xl"
          />
        </div>
        <div className="w-full justify-center flex items-center">
          {aboutData.map((item) => (
            <Tile
              key={item.id}
              headerTag={item.headerTag}
              title={item.title}
              desc={item.desc}
              btn={item.btn}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
