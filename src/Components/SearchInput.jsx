import React from "react";

const SearchInput = () => {
  return (
    <section
      className="relative w-full h-[60vh] bg-cover bg-fixedm items-center justify-center flex"
      style={{ backgroundImage: "url('/search.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative w-full max-w-[80%] mx-auto p-4 ">
        <div className="flex items-center justify-center space-x-4">
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
