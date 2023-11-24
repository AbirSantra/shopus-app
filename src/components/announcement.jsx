import React from "react";

const Announcement = ({ text }) => {
  return (
    <div className="fluid-px flex w-full items-center justify-center bg-orange-600 py-1 text-sm font-normal text-white">
      <p className="animate-pulse">{text}</p>
    </div>
  );
};

export default Announcement;
