import React from "react";
import { useState } from "react";
import { data } from "./data/data";

const Food = () => {
  const [foods, setFoods] = useState(data);

  //filter type
  const filterFoodsCategory = (category) => {
    const filteredFoods = data.filter((item) => item.category === category);
    setFoods(filteredFoods);
  };

  //filter price
  const filterFoodsPrice = (price) => {
    const filteredFoods = data.filter((item) => item.price === price);
    setFoods(filteredFoods);
  };

  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center mb-3">
        Top Rated Menu Items
      </h1>
      {/* Filter Row */}
      <div className="flex flex-col justify-between lg:flex-row ">
        {/* Filter Type */}
        <div>
          <p className="font-bold text-gray-900 mb-3">Filter Type</p>
          <div className="flex justify-between flex-wrap gap-1 ">
            <button
              onClick={() => setFoods(data)}
              className="border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white"
            >
              All
            </button>
            <button  onClick={() => filterFoodsCategory("burger")} className="border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white">
              Burgers
            </button>
            <button onClick={() => filterFoodsCategory("pizza")} className="border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white">
              Pizza
            </button>
            <button onClick={() => filterFoodsCategory("chicken")} className="border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white">
              Chicken
            </button>
            <button onClick={() => filterFoodsCategory("salad")} className="border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white">
              Salads
            </button>
          </div>
        </div>
        {/* Filter price */}
        <div>
          <p className="text-gray-700 font-bold mb-3">Filter Price</p>
          <div className="flex justify-between gap-1 max-w-[390px]">
            <button  onClick={()=>filterFoodsPrice("$") }className="border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white">
              $
            </button>
            <button  onClick={()=>filterFoodsPrice("$$")} className="border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white">
              $$
            </button>
            <button onClick={()=>filterFoodsPrice("$$$")} className="border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white">
              $$$
            </button>
            <button  onClick={()=>filterFoodsPrice("$$$$")} className="border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white">
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* Display Foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item) => {
          return (
            <div
              className="border shadow-lg hover:scale-105 duration-300 rounded-lg"
              key={item.id}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[200px] object-cover rounded-t-lg"
              />
              <div className="flex justify-between px-2 py-4">
                <p className="font-bold">{item.name}</p>
                <p>
                  <span className="bg-orange-500 text-white p-1 rounded-[10px]">
                    {item.price}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Food;
