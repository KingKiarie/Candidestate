import React, { useState } from "react";
import PropTile from "../PropTile";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
const PropertySection = () => {
  // Sample Property Data
  const properties = [
    {
      id: 1,
      title: "Modern City Apartment",
      desc: "2 Beds, 2 Baths • Great Location",
      cart: "Favorite",
      buy: "Buy Now",
      more: "More Info",
      bgImage: "/img1.jpg",
    },
    {
      id: 2,
      title: "Cozy Suburban Home",
      desc: "3 Beds, 2 Baths • Quiet Neighborhood",
      cart: "Favorite",
      buy: "Buy Now",
      more: "More Info",
      bgImage: "/img2.jpg",
    },
    {
      id: 3,
      title: "Beachfront Villa",
      desc: "5 Beds, 4 Baths • Ocean Views",
      cart: "Favorite",
      buy: "Buy Now",
      more: "More Info",
      bgImage: "/img3.jpg",
    },
    {
      id: 4,
      title: "Luxury Penthouse",
      desc: "4 Beds, 3 Baths • Skyline Views",
      cart: "Favorite",
      buy: "Buy Now",
      more: "More Info",
      bgImage: "/img4.jpg",
    },
    {
      id: 5,
      title: "Countryside Cottage",
      desc: "3 Beds, 2 Baths • Scenic Landscape",
      cart: "Favorite",
      buy: "Buy Now",
      more: "More Info",
      bgImage: "/img5.jpg",
    },
    {
      id: 6,
      title: "Downtown Loft",
      desc: "1 Bed, 1 Bath • Heart of the City",
      cart: "Favorite",
      buy: "Buy Now",
      more: "More Info",
      bgImage: "/img6.jpg",
    },
  ];

  // State to track the current start index for the visible properties
  const [startIndex, setStartIndex] = useState(0);

  // Display 4 properties at a time
  const visibleProperties = properties.slice(startIndex, startIndex + 4);

  // Handlers for left and right navigation
  const handleLeftClick = () => {
    setStartIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleRightClick = () => {
    setStartIndex((prevIndex) =>
      prevIndex < properties.length - 4 ? prevIndex + 1 : prevIndex
    );
  };

  return (
    <section className="w-full h-1/2 my-20">
      <div className="w-full max-w-[80%] mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Property Listings
        </h1>

        {/* Left and Right Buttons */}
        <div className="flex items-start space-x-4 mb-4">
          <button
            onClick={handleLeftClick}
            className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-300 transition"
            disabled={startIndex === 0}
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={handleRightClick}
            className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-300 transition"
            disabled={startIndex >= properties.length - 4}
          >
            <FaChevronRight />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 lg:grid-row-2 gap-6">
          {visibleProperties.map((property) => (
            <PropTile
              key={property.id}
              title={property.title}
              desc={property.desc}
              cart={property.cart}
              buy={property.buy}
              more={property.more}
              bgImage={property.bgImage}
            />
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <button className="px-8 py-8 bg-black text-white font-semibold rounded-md  transition">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertySection;
