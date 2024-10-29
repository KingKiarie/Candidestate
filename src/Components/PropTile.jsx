import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const PropTile = ({ title, desc, cart, buy, more, bgImage }) => {
  return (
    <div
      className="relative w-full h-72 bg-cover bg-center group rounded-lg overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Cart Icon */}
      <div className="absolute top-4 left-4 text-white text-lg">
        <span>
          {cart}
          <FaCartShopping />{" "}
        </span>
      </div>

      {/* Content Overlay (Visible on Hover) */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 ease-in-out p-4 opacity-0 group-hover:opacity-100 text-center">
        {/* Title and Description */}
        <h1 className="text-2xl font-bold text-white mb-2">{title}</h1>
        <p className="text-white mb-4">{desc}</p>

        {/* Buttons */}
        <div className="space-x-4">
          <button className="px-4 py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition">
            {buy}
          </button>
          <button className="px-4 py-2 bg-transparent border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-black transition">
            {more}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropTile;
