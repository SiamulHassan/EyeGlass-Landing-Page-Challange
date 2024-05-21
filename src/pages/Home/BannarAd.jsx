import Container from "../../components/Container";
import bannarAdOne from "../../assets/images/bannar-ad-1.png";
import bannarAdTwo from "../../assets/images/bannar-ad-2.png";
import bannarAdThree from "../../assets/images/bannar-ad-3.png";
import bannarAdFour from "../../assets/images/bannar-ad-4.png";
import Img from "../../components/Img";

const BannarAd = () => {
  return (
    <Container>
      <div className="my-[150px] md:mt-[300px] md:mb-[150px]">
        <div className="block sm:flex gap-5 md:gap-9 px-5">
          <div className="w-full sm:w-1/2 flex flex-col gap-5 md:gap-9">
            <div className="overflow-hidden">
              <Img src={bannarAdOne} alt={bannarAdOne} radius="rounded-md" />
            </div>
            <div className="overflow-hidden">
              <Img src={bannarAdTwo} alt={bannarAdTwo} radius="rounded-md" />
            </div>
          </div>

          <div className="mt-5 sm:mt-0 w-full sm:w-1/2 flex flex-col gap-5 md:gap-9">
            <div className="overflow-hidden">
              <Img
                src={bannarAdThree}
                alt={bannarAdThree}
                radius="rounded-md"
              />
            </div>
            <div className="overflow-hidden">
              <Img src={bannarAdFour} alt={bannarAdFour} radius="rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BannarAd;
