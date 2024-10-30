import React from "react";

const AboutTile = ({ headerTag, title, desc, divider }) => {
  return (
    <div className="flex flex-col p-8 bg-gray-50 rounded-xl space-y-8">
      <div className="flex flex-row space-x-4 items-center">
        <span className="border-b-2 border-black w-8 h-2 "></span>
        <p className="font-bold">{headerTag}</p>
      </div>
      {/* <span className="border-b  border-gray-50 w-full text-center">
        {divider}
      </span> */}
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-lg">{desc}</p>
      </div>
      <span className="border-b  border-gray-50 w-full text-center">
        {divider}
      </span>
    </div>
  );
};

export default AboutTile;
