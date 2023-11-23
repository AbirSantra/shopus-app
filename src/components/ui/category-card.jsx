import React from "react";

const CategoryCard = ({ label }) => {
  return (
    <div className="flex w-full cursor-pointer items-center justify-center rounded-lg border border-orange-600 p-4 font-semibold text-orange-600 duration-300 ease-in-out hover:bg-orange-600 hover:text-white">
      {label}
    </div>
  );
};

export default CategoryCard;
