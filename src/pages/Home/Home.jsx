import Navbar from "../../components/Navbar";
import Bannar from "./Bannar";
import BannarAd from "./BannarAd";
import FeaturedProduct from "./FeaturedProduct";

const Home = () => {
  return (
    <>
      <Navbar />
      <Bannar />
      <BannarAd />
      <FeaturedProduct />
    </>
  );
};

export default Home;
