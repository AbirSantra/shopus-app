import React from "react";
import Navbar from "../components/navbar";
import Announcement from "../components/announcement";
import Slider from "../components/slider";

const Homepage = () => {
  return (
    <div>
      <Announcement text={"Sample Announcement!"} />
      <Navbar />
      <Slider />
    </div>
  );
};

export default Homepage;
