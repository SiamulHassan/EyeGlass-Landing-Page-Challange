import Navbar from "../../components/Navbar";
import Bannar from "./Bannar";
import BannarAd from "./BannarAd";
import FeaturedProduct from "./FeaturedProduct";
import Product from "./Product";

const Home = () => {
  return (
    <>
      <Navbar />
      <Bannar />
      <BannarAd />
      <FeaturedProduct />
      <Product />
      <p className="mt-[150px]">d</p>
    </>
  );
};

export default Home;
