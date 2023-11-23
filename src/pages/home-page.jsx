import React from "react";
import Navbar from "../components/navbar";
import Announcement from "../components/announcement";
import Slider from "../components/slider";
import CategorySection from "../components/category-section";
import BestDealsSection from "../components/best-deals-section";
import Footer from "../components/footer";

const Homepage = () => {
  return (
    <div>
      <Announcement text={"Sample Announcement!"} />
      <Navbar />
      <Slider />
      <CategorySection />
      <BestDealsSection />
      <Footer />
    </div>
  );
};

export default Homepage;
