import React from "react";
import { Link } from "react-router-dom";

function BigVehicleWash() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Big Vehicle Wash Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src="/placeholder-truck.jpg" alt="Big Vehicle Wash" className="w-full h-64 object-cover rounded-lg" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Heavy Vehicle Cleaning</h2>
            <p className="text-gray-600 mb-4">Professional washing for trucks, vans, and large vehicles.</p>
            <div className="mb-4">
              <h3 className="text-lg font-medium">Pricing:</h3>
              <ul className="list-disc list-inside">
                <li>Basic Wash: $50</li>
                <li>Premium Wash: $80</li>
                <li>Deluxe Wash: $120</li>
              </ul>
            </div>
            <Link to="/booking">
              <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigVehicleWash;