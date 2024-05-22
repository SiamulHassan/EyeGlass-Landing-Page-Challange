import DiscountBadge from "../components/DiscountBadge";
import ProductSwiper from "../components/ProductSwiper";
//icon
import { FaRegHeart } from "react-icons/fa";
const ProductCart = ({ filteredProduct }) => {
  return (
    <div className="product-cart flex justify-center flex-wrap">
      {filteredProduct.map((product) => (
        <div
          className="cart w-full sm:w-[50%] lg:w-[33%] px-5 mb-20 xl:mb-28"
          key={product.id}
        >
          <div className="slider flex flex-col justify-center items-center rounded-md py-7 relative bg-[#f7f7f7f7] px-[35px] pt-[30px] h-[400px] md:h-[470px] 2xl:h-[550px]">
            <div className="badge absolute top-0 left-0 z-10 w-full flex justify-between pt-[30px] px-[35px]">
              <DiscountBadge
                discount={product.discount && `${product.discount}%`}
              />

              <div className="w-12 h-12 xl:w-14 xl:h-14 border border-slate-900 rounded-full flex justify-center items-center cursor-pointer text-[var(--primary-text-color)]">
                <FaRegHeart className="w-5 h-5 xl:w-7 xl:h-7" />
              </div>
            </div>
            <ProductSwiper product={product} />
          </div>

          <div className="details text-[var(--primary-text-color)]">
            <h2 className="text-2xl xl:text-3xl mt-7">Bravo Sunglasses</h2>
            <div className="flex items-center gap-2 mt-3 mb-5">
              <h3 className="text-lg font-bold">${product.price}</h3>
              {product.discountPrice && (
                <del className="text-[#5a5a5a]">${product.discountPrice}</del>
              )}
            </div>
            <button className="underline text-[#5a5a5a]">Add To Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCart;
