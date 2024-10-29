import React from "react";

const tile = ({ headerTag, desc, title, btn }) => {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-start justify-center space-y-8 ">
        <div className="flex flex-row items-center justify-center">
          <span className="border-b-2 w-8 h-2 items-center border-black "></span>{" "}
          <span className="text-xl font-bold">{headerTag}</span>
        </div>
        <div className="flex flex-col justify-start space-y-4">
          <h1 className="text-3xl font-bold ">{title}</h1>
          <p className="text-md font-semibold ">{desc}</p>
        </div>
        <div className="text-md font-semibold w-full rounded-xl ">
          <button className="py-8 px-8 bg-black rounded-md text-white text-md font-semibold">
            {btn}
          </button>
        </div>
      </div>
    </section>
  );
};

export default tile;
