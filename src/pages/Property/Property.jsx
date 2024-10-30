import React from "react";
import SearchInput from "../../Components/SearchInput";
import { propertyListings } from "../../shared/Data";

// Ensure PropertyList component name matches its import in the JSX below
const PropertyList = ({ listings }) => {
  return (
    <div className="property-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {listings.map((property) => (
        <div key={property.id} className=" border rounded-lg shadow-lg p-2">
          <img
            src={property.imageRef}
            alt={property.location}
            className="w-full h-80 object-cover rounded-t-lg  "
          />
          <div className="flex flex-col p-8">
            <h2 className="text-xl font-bold">{property.location}</h2>
            <p className="font-bold ">
              Price: ${property.price.toLocaleString()}
            </p>
            <div className="flex w-full flex-row space-x-8 ">
              <p className="font-seminold italic text-md ">
                Rooms: {property.rooms}
              </p>
              <p className="font-seminold italic ">Baths: {property.baths}</p>
            </div>

            <p className="font-medium text-lg">Type: {property.type}</p>
          </div>
          <div className="flex flex-row px-4 space-x-8">
            <button className="px-6 py-3 border-2 border-orange-200 hover:bg-orange-300 rounded-xl">
              Add to cart
            </button>
            <button className="px-6 py-3 border-2 border-green-200 hover:bg-green-300  rounded-xl">
              Buy now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const Property = () => {
  return (
    <section className="w-full h-auto">
      <div className="w-full">
        <SearchInput />
      </div>
      <div className="w-full flex flex-row h-auto my-10 space-x-8 p-4">
        <div className="w-[20%] border-r-2 shadow-lg p-4">select filters</div>
        <div className="w-[80%] mx-auto">
          <div>
            <PropertyList listings={propertyListings} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Property;
