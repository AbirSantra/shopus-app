import React from "react";
import Navbar from "../components/navbar";
import Announcement from "../components/announcement";

const Homepage = () => {
  return (
    <div>
      <Announcement text={"Sample Announcement!"} />
      <Navbar />
    </div>
  );
};

export default Homepage;
