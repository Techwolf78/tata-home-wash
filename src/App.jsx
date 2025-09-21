import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import Franchise from "./pages/Franchise";
import Support from "./pages/Support";
import CarWash from "./pages/services/CarWash";
import BikeWash from "./pages/services/BikeWash";
import BigVehicleWash from "./pages/services/BigVehicleWash";

function App() {
  return (
    <Router>
      <div className="md:min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/car-wash" element={<CarWash />} />
            <Route path="/services/bike-wash" element={<BikeWash />} />
            <Route path="/services/big-vehicle-wash" element={<BigVehicleWash />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/franchise" element={<Franchise />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
