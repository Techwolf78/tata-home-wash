import React from "react";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Car Wash */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Car Wash</h2>
            <p className="text-gray-600 mb-4">Professional car washing services</p>
            <Link to="/services/car-wash" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Details</Link>
          </div>
          {/* Bike Wash */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Bike Wash</h2>
            <p className="text-gray-600 mb-4">Thorough bike cleaning services</p>
            <Link to="/services/bike-wash" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Details</Link>
          </div>
          {/* Big Vehicle Wash */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Big Vehicle Wash</h2>
            <p className="text-gray-600 mb-4">Heavy vehicle washing solutions</p>
            <Link to="/services/big-vehicle-wash" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;