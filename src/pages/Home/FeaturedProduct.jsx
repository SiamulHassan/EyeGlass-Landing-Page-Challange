import sectionSunglass from "../../assets/images/section-sunglass.png";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import Img from "../../components/Img";
const FeaturedProduct = () => {
  return (
    <div className="mb-[150px]">
      <div className="bg-[var(--primary-bg-color)] w-full relative">
        <Container>
          <div className="px-5 py-[126px] w-full lg:w-[52%] pr-5">
            <Heading>
              Experience clear vision with OptiChroma Vision Frames
            </Heading>
            <p className="text-md xl:text-xl text-[var(--secondary-text-color)] max-w-[541px] mt-5 mb-2">
              At OptiChroma, we believe that everyone deserves clear vision and
              stylish eyewear. That&#39;s why we&#39;ve designed a collection of
              frames that prioritize both form and function.
            </p>

            <p className="text-md xl:text-xl text-[var(--secondary-text-color)] max-w-[541px] mb-10">
              Our team of experts is dedicated to helping you find the perfect
              pair of glasses.
            </p>
            <Button>About Us</Button>
          </div>
        </Container>

        <div className="lg:absolute top-0 right-0 w-full lg:w-[48%] md:h-[65vh] h-full lg:h-full">
          <Img src={sectionSunglass} alt="sunglass-img" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
