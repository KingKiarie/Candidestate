import React from "react";
import AboutTile from "./AboutTile"; // Ensure this path is correct

const ScrollableCards = () => {
  return (
    <div className="w-full h-96 overflow-y-auto border border-gray-300 rounded-lg p-4">
      <h2 className="text-2xl font-bold text-center mb-6">
        Learn More About Us
      </h2>
      <div className="flex flex-col space-y-4">
        <AboutTile
          headerTag={"About Us"}
          title={"About Us"}
          desc={
            "We are a leading estate-selling firm committed to connecting buyers with their dream properties. Our team prides itself on professionalism, trust, and transparency in every transaction."
          }
          divider={"Join us"}
        />
        <AboutTile
          headerTag={"Our Goal"}
          title={"Priorities"}
          desc={
            "We are focused on providing a seamless experience for our clients, ensuring that their needs are met and expectations exceeded."
          }
          divider={"Join us"}
        />
        <AboutTile
          headerTag={"Our Team"}
          title={"Expert Team"}
          desc={
            "Our dedicated team of experts is here to guide you through every step of the buying and selling process."
          }
          divider={"Join us"}
        />
        <AboutTile
          headerTag={"Client Success"}
          title={"Success Stories"}
          desc={
            "We take pride in our success stories, where we have successfully matched numerous clients with their ideal properties."
          }
          divider={"Join us"}
        />
      </div>
    </div>
  );
};

export default ScrollableCards;
