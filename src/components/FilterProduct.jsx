import { useState } from "react";

const FilterProduct = ({ onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };
  return (
    <div className="flex gap-4 md:gap-0 md:justify-between items-center md:items-end max-w-[330px] font-medium text-base">
      <div
        className={`cursor-pointer mt-6 md:mt-0 px-2 md:px-5 md:py-2 ${
          selectedCategory === "Latest"
            ? "text-[var(--primary-text-color)] border border-[var(--primary-text-color)] rounded-md"
            : "text-gray-500"
        }`}
        onClick={() => handleCategoryChange("Latest")}
      >
        <span>Latest</span>
      </div>
      <div
        className={`cursor-pointer mt-6 md:mt-0 px-2 md:px-5 md:py-2 ${
          selectedCategory === "Special"
            ? "text-[var(--primary-text-color)] border border-[var(--primary-text-color)] rounded-md"
            : "text-gray-500"
        }`}
        onClick={() => handleCategoryChange("Special")}
      >
        <span>Special</span>
      </div>
      <div
        className={`cursor-pointer mt-6 md:mt-0 px-2 md:px-5 md:py-2 ${
          selectedCategory === "Best Sell"
            ? "text-[var(--primary-text-color)] border border-[var(--primary-text-color)] rounded-md"
            : "text-gray-500"
        }`}
        onClick={() => handleCategoryChange("Best Sell")}
      >
        Best Sell
      </div>
    </div>
  );
};

export default FilterProduct;
