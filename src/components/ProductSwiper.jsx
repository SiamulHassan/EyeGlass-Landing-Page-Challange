import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const ProductSwiper = ({ product }) => {
  return (
    <Swiper
      pagination={{
        clickable: true,
        renderBullet: (index, className) => {
          const color = product.colors[index];
          return `<span class="${className}" style="background-color: ${color};"></span>`;
        },
      }}
      modules={[Pagination]}
      slidesPerView={1}
      spaceBetween={50}
      className="productSwiper h-full w-full"
    >
      {product.images.map((img, i) => (
        <SwiperSlide key={i}>
          <img
            src={img}
            alt="product-img"
            className="w-full h-full object-contain"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSwiper;
