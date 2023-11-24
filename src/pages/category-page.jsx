import React from "react";
import Navbar from "../components/navbar";
import Announcement from "../components/announcement";
import { useParams } from "react-router-dom";
import { MdFilterAlt } from "react-icons/md";
import ProductCard from "../components/ui/product-card";
import productImage from "../img/airdopes.png";
import Footer from "../components/footer";

const Categorypage = () => {
  const catParam = useParams();

  return (
    <div>
      <Announcement text={`Special deals on ${catParam.category}!`} />
      <Navbar />
      <div className="section fluid-px mt-16">
        <div className="section-content flex flex-col gap-8">
          {/* Page Header */}
          <div className="flex cursor-pointer items-center justify-between">
            <h1 className="text-2xl font-semibold capitalize">
              {catParam.category}
            </h1>
            <div className="flex items-center justify-center gap-1">
              <MdFilterAlt size={18} className="text-orange-600" />
              <p className="text-base font-semibold">Filters</p>
            </div>
          </div>
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
      <Footer />
    </div>
  );
};

export default Categorypage;
