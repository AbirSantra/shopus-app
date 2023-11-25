import React from "react";
import productImage from "../img/airdopes.png";
import { MdOutlineAdd, MdOutlineHorizontalRule } from "react-icons/md";

const ProductCartCard = () => {
  return (
    <div className="flex w-full gap-8 py-4">
      {/* Product Image */}
      <div className="flex w-40 items-center justify-center rounded-lg border-[1px] border-slate-200 duration-300 ease-in-out hover:border-orange-600">
        <img className="w-full" src={productImage} alt="product" />
      </div>
      {/* Product Title, Company and Quantity */}
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold">Product Name</p>
        <p>Company</p>
        <div className="mt-4 flex flex-col gap-2">
          <p className="text-sm font-semibold">Quantity</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center justify-center rounded-full bg-orange-200 p-1 text-4xl text-orange-600">
              <MdOutlineHorizontalRule size={16} />
            </span>
            <p className="text-base font-bold">1</p>
            <span className="flex items-center justify-center rounded-full bg-orange-200 p-1 text-4xl text-orange-600">
              <MdOutlineAdd size={16} />
            </span>
          </div>
        </div>
      </div>
      {/* Price & Remove Button */}
      <div className="ml-auto flex flex-col items-end justify-between">
        <p className="text-lg font-semibold">$250.00</p>
        <p className="cursor-pointer font-semibold text-orange-600">Remove</p>
      </div>
    </div>
  );
};

export default ProductCartCard;
