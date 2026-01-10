import React, { useContext } from "react";
import { ProductDatacontext } from "../context/ProductContext";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const {products, count, setCount} = useContext(ProductDatacontext);

  
  let selectedProduct = products.find((elem) => elem.id == id)

  const recommendedProducts = products.filter((item)=> 
    item.category === selectedProduct?.category &&
    item.id !== selectedProduct?.id
  ).slice(0, 3)

   if (!selectedProduct) return <p>Loading...</p>;

  return (
    <div className="lg:p-10 p-2 flex flex-col gap-15 min-h-screen bg-zinc-300">
      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-10 rounded p-5 w-full ">
        <div className="h-[40vh]">
          <img
            src={selectedProduct.image}
            className="rounded-lg h-full"
          />
        </div>
        <div className="flex flex-col gap-2 w-[70%]">
          <h1 className="text-xl font-bold line-clamp-2 text-black">
            {selectedProduct.title}
          </h1>
          <p className="line-clamp-3 text-gray-600">
            {selectedProduct.description}
          </p>
          <h2 className="text-black">Rs. <span className="font-bold text-2xl">{selectedProduct.price}</span></h2>
          <button onClick={()=> setCount(count+1)} className="btn btn-primary w-fit active:scale-95">
            Add to cart
          </button>
        </div>
      </div>
      
      {/* Recommended Section */}
      <div>
        <h2 className="font-medium text-lg mb-4 text-black">Recommended</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {recommendedProducts.map((item) => (
            <div key={item.id}  className="border p-3 rounded bg-zinc-200 shadow-md shadow-gray-700">
              <img src={item.image} className="h-32 mx-auto" />
              <p className="text-sm line-clamp-1 mt-2 text-black">{item.title}</p>
              <p className="font-bold text-black">Rs. {item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
