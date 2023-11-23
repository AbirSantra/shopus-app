import React from "react";
import CategoryCard from "./ui/category-card";

const CategorySection = () => {
  return (
    <div className="section mt-16">
      <div className="section-content flex flex-col gap-8">
        {/* Section Header */}
        <div className="text-2xl font-semibold">Shop by Category</div>
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
