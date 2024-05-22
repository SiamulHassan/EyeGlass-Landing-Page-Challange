import { useState } from "react";

const FilterProduct = ({ onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-between my-8 max-w-[330px] font-medium text-base">
        <div
          className={`cursor-pointer px-5 py-2 ${
            selectedCategory === "Latest"
              ? "text-[var(--primary-text-color)] border border-[var(--primary-text-color)] rounded-md"
              : "text-gray-500"
          }`}
          onClick={() => handleCategoryChange("Latest")}
        >
          <span>Latest</span>
        </div>
        <div
          className={`cursor-pointer px-5 py-2 ${
            selectedCategory === "Special"
              ? "text-[var(--primary-text-color)] border border-[var(--primary-text-color)] rounded-md"
              : "text-gray-500"
          }`}
          onClick={() => handleCategoryChange("Special")}
        >
          <span>Special</span>
        </div>
        <div
          className={`cursor-pointer px-5 py-2 ${
            selectedCategory === "Best Sell"
              ? "text-[var(--primary-text-color)] border border-[var(--primary-text-color)] rounded-md"
              : "text-gray-500"
          }`}
          onClick={() => handleCategoryChange("Best Sell")}
        >
          Best Sell
        </div>
      </div>
    </div>
  );
};

export default FilterProduct;
