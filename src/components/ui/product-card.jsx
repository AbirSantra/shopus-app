import React from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const ProductCard = ({ imgUrl, mrp, dmrp, title, rating }) => {
  return (
    <div className="group flex flex-col rounded-lg border-[1px] border-neutral-200 duration-300 ease-in-out hover:border-orange-600">
      {/* Product Image */}
      <img className="w-full" src={imgUrl} alt="title" />
      <div className="h-[1px] w-full bg-neutral-200 duration-300 ease-in-out group-hover:bg-orange-600"></div>
      {/* Product Description */}
      <div className="flex flex-col gap-2 p-4">
        {/* Price */}
        <div className="flex items-center gap-4">
          <p className="text-[24px] font-bold text-orange-600">${dmrp}</p>
          <p className="font-semibold text-neutral-400 line-through">${mrp}</p>
        </div>
        {/* Title */}
        <p className="text-lg font-semibold">{title}</p>
        {/* Rating and Add to Cart */}
        <div className="flex w-full items-center justify-between">
          {/* Rating */}
          <div className="flex gap-1">
            <FaStar className="text-orange-600" />
            <FaStar className="text-orange-600" />
            <FaStar className="text-orange-600" />
            <FaStar className="text-orange-600" />
            <FaStar className="text-neutral-400" />
          </div>
          {/* Add to Cart */}
          <button>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-600 text-white duration-300 ease-in-out hover:scale-105">
              <MdOutlineAddShoppingCart size={24} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
