import { Swiper, SwiperSlide } from "swiper/react";
import bannarImg from "../../assets/images/bannar.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import BannarFeature from "../../components/BannarFeature";
import Img from "../../components/Img";

const Bannar = () => {
  return (
    <div className="relative z-0">
      <Swiper
        direction={"horizontal"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Img src={bannarImg} alt="bannar-img" />
        </SwiperSlide>
        <SwiperSlide>
          <Img src={bannarImg} alt="bannar-img" />
        </SwiperSlide>
        <SwiperSlide>
          <Img src={bannarImg} alt="bannar-img" />
        </SwiperSlide>
      </Swiper>
      <BannarFeature />
    </div>
  );
};

export default Bannar;
