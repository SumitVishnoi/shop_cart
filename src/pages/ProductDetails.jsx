import React, { useContext } from "react";
import { ProductDatacontext } from "../context/ProductContext";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const data = useContext(ProductDatacontext);

  let selectedProduct = '';
  if(data.length > 0) {
    selectedProduct = data.find((elem) => elem.id == id);
  }

  return (
    <div className=" p-10 flex ">
      <div className="flex justify-between rounded p-5 w-[80%]">
        <div className="h-[40vh]">
          <img
            src={selectedProduct.image}
            className="rounded-lg h-full"
          />
        </div>
        <div className="flex flex-col gap-2 w-[70%]">
          <h1 className="text-xl font-bold line-clamp-2">
            {selectedProduct.title}
          </h1>
          <p className="line-clamp-3 text-gray-300">
            {selectedProduct.description}
          </p>
          <h2 >Rs. <span className="font-bold text-2xl">{selectedProduct.price}</span></h2>
          <button className="btn btn-primary w-fit active:scale-95">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
