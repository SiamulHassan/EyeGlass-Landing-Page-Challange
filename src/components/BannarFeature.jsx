import bannarLine from "../assets/images/bannar-line.png";
import Container from "../components/Container";
import ProductReceiveIcon from "../assets/icons/ProductReceiveIcon";
import PaymentIcon from "../assets/icons/PaymentIcon";
import EyeglassIcon from "../assets/icons/EyeglassIcon";
import SearchIcon from "../assets/icons/SearchIcon";

const BannarFeature = () => {
  return (
    <div className="relative px-5 md:absolute bottom-0 z-10 left-1/2 transform -translate-x-1/2 w-full">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-[1fr,auto,1fr,auto,1fr,auto,1fr] lg:grid-cols-[1fr,auto,1fr,auto,1fr,auto,1fr] gap-y-8 md:gap-4 lg:gap-8 justify-center items-center translate-y-[60px] md:translate-y-[140px] xl:translate-y-[158px] 2xl:translate-y-[149px] lg:px-5 xl:px-0">
          <div className="mx-auto md:mx-0 flex flex-col items-center gap-4 md:gap-10 w-max">
            <div className="flex justify-center items-center w-20 h-20 md:w-24 md:h-24 xl:w-32 xl:h-32 rounded-full bg-[var(--primary-bg-color)]">
              <SearchIcon className="h-[26px] w-[26px] xl:h-[40px] xl:w-[40px]" />
            </div>
            <div className="text-center">
              <h3 className="font-bold text-md xl:text-lg text-[var(--primary-text-color)] mb-1 md:mb-3">
                Search your sunglass
              </h3>
              <p className="text-sm text-[var(--secondary-text-color)]">
                Shop Stylish Eyewear Now
              </p>
            </div>
          </div>
          <img
            src={bannarLine}
            className="hidden md:block relative md:top-[-46px] 2xl:top-[-36px] 2xl:left-[-36px]"
            alt="bannarLine"
          />
          <div className="mx-auto md:mx-0 flex flex-col items-center gap-4 md:gap-10 w-max">
            <div className="flex justify-center items-center w-20 h-20 md:w-24 md:h-24 xl:w-32 xl:h-32 rounded-full bg-[var(--primary-bg-color)]">
              <EyeglassIcon className="h-[30px] w-[30px] xl:h-[40px] xl:w-[40px]" />
            </div>
            <div className="text-center">
              <h3 className="font-bold text-md xl:text-lg text-[var(--primary-text-color)] mb-1 md:mb-3">
                Select Sunglass
              </h3>
              <p className="text-sm text-[var(--secondary-text-color)]">
                Shade Your Style
              </p>
            </div>
          </div>
          <img
            src={bannarLine}
            className="hidden md:block relative md:top-[-46px] 2xl:top-[-36px] 2xl:left-[-36px]"
            alt="bannarLine"
          />
          <div className="mx-auto md:mx-0 flex flex-col items-center gap-4 md:gap-10 w-max">
            <div className="flex justify-center items-center w-20 h-20 md:w-24 md:h-24 xl:w-32 xl:h-32 rounded-full bg-[var(--primary-bg-color)]">
              <PaymentIcon className="h-[30px] w-[30px] xl:h-[40px] xl:w-[40px]" />
            </div>
            <div className="text-center">
              <h3 className="font-bold text-md xl:text-lg text-[var(--primary-text-color)] mb-1 md:mb-3">
                Make Payment
              </h3>
              <p className="text-sm text-[var(--secondary-text-color)]">
                Securely Checkout Now
              </p>
            </div>
          </div>
          <img
            src={bannarLine}
            className="hidden md:block relative md:top-[-46px] 2xl:top-[-36px] 2xl:left-[-36px]"
            alt="bannarLine"
          />
          <div className="mx-auto md:mx-0 flex flex-col items-center gap-4 md:gap-10 w-max">
            <div className="flex justify-center items-center w-20 h-20 md:w-24 md:h-24 xl:w-32 xl:h-32 rounded-full bg-[var(--primary-bg-color)]">
              <ProductReceiveIcon className="h-[30px] w-[30px] xl:h-[40px] xl:w-[40px]" />
            </div>
            <div className="text-center">
              <h3 className="font-bold text-md xl:text-lg text-[var(--primary-text-color)] mb-1 md:mb-3">
                Received Product
              </h3>
              <p className="text-sm text-[var(--secondary-text-color)]">
                See the World Clearly
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BannarFeature;
