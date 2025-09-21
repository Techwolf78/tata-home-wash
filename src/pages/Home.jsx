import React from "react";
import Header from "../sections/Header";
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
      <Header />
      <div className="pt-20">
        {" "}
        {/* Offset for fixed header */}
        <Hero />
        <TrustBar />
        <HowItWorks />
        <Services />
        <Differentiators />
        <Testimonials />
      </div>
      <Footer />
    </>
  );
}

export default Home;