import React from 'react'
import { useState, useEffect } from 'react';

function Rent() {

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProperties(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold text-gray-700">Loading properties...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 font-bold text-xl">Error: {error}</p>
      </div>
    );
  }

  return (

    <>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Property Listings</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map(property => (
            <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-900">{property.title}</h2>
                <p className="text-sm text-gray-600 mt-1">{property.address}</p>
                <p className="text-2xl font-extrabold text-blue-600 mt-2">${property.price}</p>
                <div className="mt-4 flex flex-wrap items-center justify-between text-gray-700 text-sm">
                  <span className="flex items-center">
                    
                    {property.bedrooms} beds
                  </span>
                  <span className="flex items-center">
                    
                    {property.bathrooms} baths
                  </span>
                  <span className="flex items-center">
                    
                    {property.area} sqft
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
    // const PropertyList = () => {
    //   const [properties, setProperties] = useState([]);
    //       const [loading, setLoading] = useState(true);
    //       const [error, setError] = useState(null);

    //   useEffect(() => {
    //     const fetchProperties = async () => {
    //       try {
    //         const response = await fetch('https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing');
    //       if (!response.ok) {
    //           throw new Error(`HTTP error! status: ${response.status}`);
    //         }
    //       const data = await response.json();
    //       setProperties(data);
    //       } catch (e) {
    //         setError(e.message);
    //       } finally {
    //         setLoading(false);
    //       }
    //     };

    //       fetchProperties();
    //   }, []);

    //       if (loading) {
    //     return (
    //       <div className="flex justify-center items-center h-screen">
    //         <p className="text-xl font-semibold text-gray-700">Loading properties...</p>
    //       </div>
    //       );
    //   }

    //       if (error) {
    //     return (
    //       <div className="flex justify-center items-center h-screen">
    //         <p className="text-red-500 font-bold text-xl">Error: {error}</p>
    //       </div>
    //       );
    //   }

    //       return (
    //       <div className="container mx-auto p-4">
    //         <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Property Listings</h1>
    //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    //           {properties.map(property => (
    //             <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
    //               <img
    //                 src={property.image}
    //                 alt={property.title}
    //                 className="w-full h-48 object-cover"
    //               />
    //               <div className="p-4">
    //                 <h2 className="text-xl font-bold text-gray-900">{property.title}</h2>
    //                 <p className="text-sm text-gray-600 mt-1">{property.address}</p>
    //                 <p className="text-2xl font-extrabold text-blue-600 mt-2">${property.price.toLocaleString()}</p>
    //                 <div className="mt-4 flex flex-wrap items-center justify-between text-gray-700 text-sm">
    //                   <span className="flex items-center">
    //                     <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
    //                       <path d="M10 2a4 4 0 00-4 4v2H5a2 2 0 00-2 2v2a2 2 0 002 2h10a2 2 0 002-2v-2a2 2 0 00-2-2h-1V6a4 4 0 00-4-4zM8 6a2 2 0 114 0v2H8V6z" />
    //                     </svg>
    //                     {property.bedrooms} beds
    //                   </span>
    //                   <span className="flex items-center">
    //                     <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
    //                       <path d="M10 2a4 4 0 00-4 4v2H5a2 2 0 00-2 2v2a2 2 0 002 2h10a2 2 0 002-2v-2a2 2 0 00-2-2h-1V6a4 4 0 00-4-4zM8 6a2 2 0 114 0v2H8V6z" />
    //                     </svg>
    //                     {property.bathrooms} baths
    //                   </span>
    //                   <span className="flex items-center">
    //                     <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
    //                       <path d="M10 2a4 4 0 00-4 4v2H5a2 2 0 00-2 2v2a2 2 0 002 2h10a2 2 0 002-2v-2a2 2 0 00-2-2h-1V6a4 4 0 00-4-4zM8 6a2 2 0 114 0v2H8V6z" />
    //                     </svg>
    //                     {property.area} sqft
    //                   </span>
    //                 </div>
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //       );
    // };

    //       export default PropertyList;</>
  )
}

export default Rent