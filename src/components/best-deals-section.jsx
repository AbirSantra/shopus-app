import React from "react";
import productImage from "../img/airdopes.png";
import ProductCard from "./ui/product-card";

const BestDealsSection = () => {
  return (
    <div className="section mt-16">
      <div className="section-content flex flex-col gap-8">
        {/* Section Header */}
        <div className="section--header text-2xl font-semibold">
          Today's Best Deals
        </div>
        {/* Product Grid */}
        <div className="grid w-full grid-cols-4 gap-8">
          <ProductCard
            imgUrl={productImage}
            mrp="32.00"
            dmrp="15.00"
            title="TRebel Boat Airdopes 141"
            rating="4"
          />
          <ProductCard
            imgUrl={productImage}
            mrp="32.00"
            dmrp="15.00"
            title="TRebel Boat Airdopes 141"
            rating="4"
          />
          <ProductCard
            imgUrl={productImage}
            mrp="32.00"
            dmrp="15.00"
            title="TRebel Boat Airdopes 141"
            rating="4"
          />
          <ProductCard
            imgUrl={productImage}
            mrp="32.00"
            dmrp="15.00"
            title="TRebel Boat Airdopes 141"
            rating="4"
          />
          <ProductCard
            imgUrl={productImage}
            mrp="32.00"
            dmrp="15.00"
            title="TRebel Boat Airdopes 141"
            rating="4"
          />
          <ProductCard
            imgUrl={productImage}
            mrp="32.00"
            dmrp="15.00"
            title="TRebel Boat Airdopes 141"
            rating="4"
          />
          <ProductCard
            imgUrl={productImage}
            mrp="32.00"
            dmrp="15.00"
            title="TRebel Boat Airdopes 141"
            rating="4"
          />
          <ProductCard
            imgUrl={productImage}
            mrp="32.00"
            dmrp="15.00"
            title="TRebel Boat Airdopes 141"
            rating="4"
          />
        </div>
      </div>
    </div>
  );
};

export default BestDealsSection;
