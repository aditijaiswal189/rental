// export default function Rent (){
//     return (
//         <div className="flex flex-col gap-4 items-center justify-center min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
//         <h1 className="text-3xl font-bold">Rent</h1>
//         <p className="text-lg">Welcome to the Rent page!</p>
//         </div>
//     )
// }// components/PropertyCard.jsx

import React from "react";

const RentA = ({ property }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{property.title}</h3>
        <p className="text-gray-600">{property.address}</p>
        <p className="text-gray-800 font-bold mt-2">{property.price}</p>
        <p className="text-sm text-gray-500">
          {property.bedrooms} Bed • {property.bathrooms} Bath • {property.sqft} sqft
        </p>
        <div className="mt-2">
          {property.amenities.map((amenity, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-1 mr-2 rounded"
            >
              {amenity}
            </span>
          ))}
        </div>
        <button
          className={`mt-4 w-full py-2 px-4 rounded ${
            property.available ? "bg-blue-600 text-white" : "bg-gray-400 text-white cursor-not-allowed"
          }`}
          disabled={!property.available}
        >
          {property.available ? "View Details" : "Not Available"}
        </button>
      </div>
    </div>
  );
};

// export default RentA;

// pages/properties.jsx

// import React from "react";
// import { properties } from "../data/properties";
// import PropertyCard from "../components/PropertyCard";

const Rent = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Available Rentals in Toronto</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <RentA key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Rent;


// data/properties.js

export const properties = [
    {
      id: 1,
      title: "Modern 2-Bedroom Apartment",
      address: "123 Main St, Toronto, ON",
      price: "$2,500/mo",
      bedrooms: 2,
      bathrooms: 1,
      sqft: 850,
      image: "https://via.placeholder.com/400x300?text=Property+1",
      amenities: ["Pet Friendly", "Parking", "Gym"],
      available: true,
    },
    {
      id: 2,
      title: "Cozy 1-Bedroom Condo",
      address: "456 Queen St W, Toronto, ON",
      price: "$1,800/mo",
      bedrooms: 1,
      bathrooms: 1,
      sqft: 600,
      image: "https://via.placeholder.com/400x300?text=Property+2",
      amenities: ["Balcony", "Laundry", "Elevator"],
      available: false,
    },
    {
      id: 3,
      title: "Spacious 3-Bedroom House",
      address: "789 Bloor St, Toronto, ON",
      price: "$3,200/mo",
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1200,
      image: "https://via.placeholder.com/400x300?text=Property+3",
      amenities: ["Backyard", "Garage", "Basement"],
      available: true,
    },
  ];
  