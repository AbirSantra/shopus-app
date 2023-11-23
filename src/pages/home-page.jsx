import React from "react";
import Navbar from "../components/navbar";
import Announcement from "../components/announcement";
import Slider from "../components/slider";
import CategorySection from "../components/category-section";

const Homepage = () => {
  return (
    <div>
      <Announcement text={"Sample Announcement!"} />
      <Navbar />
      <Slider />
      <CategorySection />
    </div>
  );
};

export default Homepage;
