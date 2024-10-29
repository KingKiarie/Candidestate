import React from "react";

const SearchInput = () => {
  return (
    <section className="w-full h-40 relative">
      <div className="relative top-[-20%] w-auto p-4 backd">
        <div className="relative  flex items-center justify-center space-x-4">
          <input
            type="text"
            name=""
            id=""
            placeholder="SearchProperty"
            className="py-8 px-8 w-[400px] shadow-md bg-white opacity-100  backdrop-blur-xl focus:outline-0 rounded-xl"
          />
          <button className="px-8 py-8 text-lg font-semibold bg-black rounded-xl text-white">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchInput;
