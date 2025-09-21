import React from "react";
import Hero from "../sections/Hero";
import TrustBar from "../sections/TrustBar";
import HowItWorks from "../sections/HowItWorks";
import Services from "../sections/Services";
import Differentiators from "../sections/Differentiators";
import Testimonials from "../sections/Testimonials";
import FinalCTA from "../sections/FinalCTA";

function Home() {
  const handleBook = () => {
    // Navigate to booking page or open modal
    window.location.href = '/booking';
  };

  return (
    <>
      <Hero />
      <TrustBar />
      <HowItWorks />
      <Services />
      <Differentiators />
      <Testimonials />
      <FinalCTA onBook={handleBook} />
    </>
  );
}

export default Home;