import productData from "../../../data/productData";
import Container from "../../components/Container";
import FilterProduct from "../../components/FilterProduct";
import { useState } from "react";
import ProductCart from "../../components/ProductCart";
import Heading from "../../components/Heading";

const Product = () => {
  const [filter, setFilter] = useState("All");
  const onSelectCategory = (category) => {
    setFilter(category);
  };
  // Filtering porduct item based on selected category
  const filteredProduct = productData.filter((product) => {
    if (filter === "All") {
      return product;
    } else {
      return product.category === filter;
    }
  });

  return (
    <Container>
      <div className=" md:flex justify-between px-5 mb-14">
        <div>
          <Heading>Our Products</Heading>
          <p className="text-base text-[var(--primary-text-color)] mt-5 max-w-[445px]">
            Experience crystal clear vision and elevated style with our premium
            collection of eyeglasses.
          </p>
        </div>
        <FilterProduct onSelectCategory={onSelectCategory} />
      </div>
      <ProductCart filteredProduct={filteredProduct} />
    </Container>
  );
};

export default Product;
