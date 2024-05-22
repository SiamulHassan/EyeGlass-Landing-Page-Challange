import product1 from "../src/assets/images/product-glass-1.png";
import product2 from "../src/assets/images/product-glass-2.png";
import product4 from "../src/assets/images/product-glass-4.png";
import product5 from "../src/assets/images/product-glass-5.png";
import product6 from "../src/assets/images/product-glass-6.png";

const productData = [
  {
    id: 1,
    title: "Bravo Sunglasses",
    price: 150,
    discountPrice: 100,
    discount: 10,
    images: [product1, product2, product4],
    colors: ["#fed29c", "#545454", "#000435"],
    category: "Special",
  },
  {
    id: 2,
    title: "Vincent Chase",
    price: 150,
    discountPrice: 120,
    discount: 10,
    images: [product5, product6, product1],
    colors: ["#fed29c", "#545454", "#000435"],
    category: "Special",
  },
  {
    id: 3,
    title: "John Jacobs",
    price: 100,
    images: [product4, product2, product1],
    colors: ["#fed29c", "#545454", "#000435"],
    category: "Latest",
  },
  {
    id: 4,
    title: "Tommy Hilfiger",
    price: 150,
    discountPrice: 130,
    discount: 10,
    images: [product5, product6, product2],
    colors: ["#fed29c", "#545454", "#000435"],
    category: "Latest",
  },
  {
    id: 5,
    title: "Ray Ban",
    price: 100,
    images: [product2, product1, product4],
    colors: ["#fed29c", "#545454", "#000435"],
    category: "Best Sell",
  },
  {
    id: 6,
    title: "Occhiali",
    price: 150,
    discountPrice: 110,
    discount: 10,
    images: [product6, product5, product4],
    colors: ["#fed29c", "#545454", "#000435"],
    category: "Best Sell",
  },
];
export default productData;
