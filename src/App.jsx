import React, { useState } from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import TrustBar from "./sections/TrustBar";
import HowItWorks from "./sections/HowItWorks";
import Services from "./sections/Services";
import Differentiators from "./sections/Differentiators";
import Footer from "./sections/Footer";
import Testimonials from "./sections/Testimonials";
import FinalCTA from "./sections/FinalCTA";
import BookingModal from "./components/BookingModal";

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const openBooking = (pkg) => {
    if (pkg) setSelectedPackage(pkg);
    setIsBookingOpen(true);
  };
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <>
      <Header onBook={openBooking} />
      <div className="pt-20">
        {" "}
        {/* Offset for fixed header */}
        <Hero onBook={openBooking} />
        <TrustBar />
        <HowItWorks />
        <Services onSelectPackage={openBooking} />
    <Differentiators />
    <Testimonials />
        {/* Add other sections here: Testimonials, FinalCTA, Footer, etc. */}
      </div>
      <BookingModal
        isOpen={isBookingOpen}
        onClose={closeBooking}
        selectedPackage={selectedPackage}
      />
  <FinalCTA onBook={openBooking} />
  <Footer />
    </>
  );
}

export default App;
