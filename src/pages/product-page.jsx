import React from "react";
import Announcement from "../components/announcement";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import productImage from "../img/airdopes.png";
import { FaStar } from "react-icons/fa";
import { MdOutlineAdd } from "react-icons/md";
import { MdOutlineHorizontalRule } from "react-icons/md";

const Productpage = () => {
  return (
    <div>
      <Announcement text={"Sample announcement!"} />
      <Navbar />
      <div className="section fluid-px mt-16">
        <div className="section-content flex flex-col gap-8">
          <div className="grid grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="rounded-lg border-[1px] border-slate-200 duration-300 ease-in-out hover:border-orange-600">
              <img className="w-full" src={productImage} alt="product" />
            </div>
            {/* Product Details */}
            <div className="flex flex-col gap-16 p-8">
              <div className="flex flex-col gap-1">
                <p className="text-5xl font-bold">Product Name</p>
                <p className="text-xl font-medium">Company Name</p>
                <div className="mt-1 flex gap-1">
                  <FaStar className="text-orange-600" size={24} />
                  <FaStar className="text-orange-600" size={24} />
                  <FaStar className="text-orange-600" size={24} />
                  <FaStar className="text-orange-600" size={24} />
                  <FaStar className="text-neutral-400" size={24} />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-3xl font-medium text-slate-500 line-through">
                  $250.00
                </p>
                <p className="text-5xl font-bold text-orange-600">$250.00</p>
              </div>
              {/* <div className="flex flex-col gap-4">
                <p className="font-semibold">Quantity</p>
                <div className="flex items-center gap-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-200 text-4xl text-orange-600">
                    <MdOutlineHorizontalRule size={24} />
                  </span>
                  <p className="text-5xl font-bold">1</p>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-200 text-4xl text-orange-600">
                    <MdOutlineAdd size={24} />
                  </span>
                </div>
              </div> */}
              <div className="flex flex-col gap-4">
                <p className="text-lg font-semibold">Description</p>
                <p className="text-sm text-slate-400">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Enim, fugit? Ipsam, nesciunt nihil! Officia odit, consectetur
                  error est sequi tempore quidem cum mollitia minus optio
                  ducimus modi fuga in nobis dignissimos magnam! Fugiat non
                  possimus, delectus distinctio repudiandae accusamus natus, aut
                  voluptate voluptas magnam, quam aperiam odio? Enim, placeat
                  ipsum!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Productpage;
