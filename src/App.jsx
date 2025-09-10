import React, { useState } from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import TrustBar from './sections/TrustBar';
import HowItWorks from './sections/HowItWorks';
import Services from './sections/Services';
import Differentiators from './sections/Differentiators';
import Footer from './sections/Footer';

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
      <div className="pt-20"> {/* Offset for fixed header */}
        <Hero onBook={openBooking} />
  <TrustBar />
  <HowItWorks />
  <Services onSelectPackage={openBooking} />
  <Differentiators />
  {/* Add other sections here: Testimonials, FinalCTA, Footer, etc. */}
      </div>
      {/* Booking modal will go here in future */}
      <Footer />
    </>
  );
}

export default App;
