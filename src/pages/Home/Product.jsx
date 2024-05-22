import ProductSwiper from "../../components/ProductSwiper";
import productData from "../../../data/productData";
import Container from "../../components/Container";

const Product = () => {
  return (
    <Container>
      <div className="product-cart flex justify-between flex-wrap">
        {productData.map((product) => (
          <div className="cart w-[33%] px-5" key={product.id}>
            <div className="slider flex flex-col justify-center items-center rounded-md py-7 relative bg-[#f7f7f7f7] px-[35px] pt-[30px] h-[470px] 2xl:h-[550px]">
              <div className="badge absolute top-0 left-0 w-full flex justify-between pt-[30px] px-[35px]">
                <p>badge</p>
                <p>favourite</p>
              </div>
              <ProductSwiper product={product} />
            </div>

            <div className="details">
              <p>title</p>
              <div className="price">
                <p>discount</p>
                <p>price original</p>
              </div>
              <a className="underline">add to cart</a>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Product;
