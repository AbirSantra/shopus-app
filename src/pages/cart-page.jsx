import React from "react";
import Announcement from "../components/announcement";
import Navbar from "../components/navbar";
import ProductCartCard from "../components/product-cart-card";
import Footer from "../components/footer";

const Cartpage = () => {
  return (
    <div>
      <Announcement text={"Sample Announcement!"} />
      <Navbar />
      <div className="section fluid-px mt-16">
        <div className="section-content flex flex-col gap-8">
          <h1 className="text-2xl font-semibold">Your Shopping Cart</h1>
          <div className="flex flex-col divide-y-[1px]">
            <ProductCartCard />
            <ProductCartCard />
            <ProductCartCard />
            <ProductCartCard />
          </div>
          <div className="mt-4 flex justify-between border-t-[1px] pt-4">
            <div className="flex flex-col">
              <p className="text-xl font-semibold">Subtotal</p>
              <p className="text-sm text-slate-400">
                Don't worry shipping is on us!
              </p>
            </div>
            <p className="text-2xl font-semibold">$1000.00</p>
          </div>
          <div className="flex items-center justify-end gap-4">
            <div className="btn-secondary">Continue Shopping</div>
            <div className="btn">Proceed to Checkout</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cartpage;
