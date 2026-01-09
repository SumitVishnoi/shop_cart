import React, { useContext } from "react";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";
import Layer from "../components/Layer";
import { ProductDatacontext } from "../context/ProductContext";

const Home = () => {
  const {products} = useContext(ProductDatacontext)
  return (
    <div className=" min-h-screen bg-white">
      <Hero />
      <div className="flex justify-center items-center gap-10 py-10">
        {products.slice(1, 4).map((elem, idx)=> (
          <div key={idx}>
            <Testimonial image={elem.image} title={elem.title}/>
          </div>
        ))}
      </div>
      <Layer />
    </div>
  );
};

export default Home;
