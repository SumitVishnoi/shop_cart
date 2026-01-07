import React from "react";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";
import Layer from "../components/Layer";

const Home = () => {
  return (
    <div className=" min-h-screen bg-white">
      <Hero />
      <div className="flex justify-center items-center gap-5 py-10">
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </div>
      <Layer />
    </div>
  );
};

export default Home;
