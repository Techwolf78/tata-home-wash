import React from "react";
import Hero from "../sections/Hero";
import TrustBar from "../sections/TrustBar";
import HowItWorks from "../sections/HowItWorks";
import Services from "../sections/Services";
import Differentiators from "../sections/Differentiators";
import Footer from "../sections/Footer";
import Testimonials from "../sections/Testimonials";

function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <HowItWorks />
      <Services />
      <Differentiators />
      <Testimonials />
    </>
  );
}

export default Home;