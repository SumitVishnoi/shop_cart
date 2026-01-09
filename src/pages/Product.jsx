import React, { useContext } from "react";
import { ProductDatacontext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  const {products} = useContext(ProductDatacontext);

  console.log(products)

  return (
    <div className="min-h-screen flex flex-wrap gap-5 justify-center p-10 bg-zinc-300">
      {products.map((elem, idx) => (
      <div
        key={idx}
        className="card bg-zinc-100 w-96 shadow-md shadow-gray-700"
      >
        <div className=" h-[40vh] flex justify-center items-center p-2">
          <img
            className="w-50 h-full object-contain"
            src={elem.image}
            alt="Shoes"
          />
        </div>
        <div className="card-body">
          <h2 className="card-title text-black font-bold line-clamp-2">
            {elem.title}
          </h2>
          <p className="line-clamp-2 text-gray-600">{elem.description}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => navigate(`/product/${elem.id}`)}
              className="btn btn-primary cursor-pointer active:scale-95"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    ))}
    </div>
  );
};

export default Product;
