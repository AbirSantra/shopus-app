import React from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const ProductCard = ({ imgUrl, mrp, dmrp, title, rating }) => {
  return (
    <div className="productcard hover:border-primary group flex flex-col rounded-lg border-[1px] border-neutral-200 duration-300 ease-in-out">
      {/* Product Image */}
      <img className="product--image w-full" src={imgUrl} alt="title" />
      <div className="divider group-hover:bg-primary h-[1px] w-full bg-neutral-200 duration-300 ease-in-out"></div>
      {/* Product Description */}
      <div className="description flex flex-col gap-2 p-4">
        {/* Price */}
        <div className="pricing flex items-center gap-4">
          <p className="discountedprice text-primary text-[24px] font-bold">
            ${dmrp}
          </p>
          <p className="originalprice font-semibold text-neutral-400 line-through">
            ${mrp}
          </p>
        </div>
        {/* Title */}
        <p className="title text-lg font-semibold">{title}</p>
        {/* Rating and Add to Cart */}
        <div className="rating--addtocart flex w-full items-center justify-between">
          {/* Rating */}
          <div className="rating--stars flex gap-1">
            <FaStar className="text-primary" />
            <FaStar className="text-primary" />
            <FaStar className="text-primary" />
            <FaStar className="text-primary" />
            <FaStar className="text-neutral-400" />
          </div>
          {/* Add to Cart */}
          <button>
            <span className="bg-primary flex h-12 w-12 items-center justify-center rounded-full text-white duration-300 ease-in-out hover:scale-105">
              <MdOutlineAddShoppingCart size={24} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
