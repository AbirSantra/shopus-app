import React from "react";
import CategoryCard from "./ui/category-card";

const CategorySection = () => {
  return (
    <div className="mt-16 flex w-full items-center justify-center">
      <div className="flex w-full max-w-[1440px] flex-col gap-8">
        {/* Section Header */}
        <div className="text-2xl font-semibold">Shop by Categories</div>
        {/* Category Cards */}
        <div className="category--card--container flex w-full items-center justify-center gap-4">
          <CategoryCard label="Proccessor" />
          <CategoryCard label="Graphics Card" />
          <CategoryCard label="Motherboard" />
          <CategoryCard label="Memory" />
          <CategoryCard label="Storage" />
          <CategoryCard label="Power Supply" />
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
