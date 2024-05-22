import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const AddToCart = () => {
  const { cart, getCartTotal } = useContext(CartContext);

  return (
    <div className="border p-4 absolute bottom-10 left-3 lg:bottom-auto lg:left-auto lg:top-[80px] lg:right-5 bg-white rounded-md w-[250px] lg:w-[300px] z-10">
      <h2 className="text-2xl font-bold mb-4">Added Cart Items</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between mb-4">
              <span>
                {item.title} : {item.quantity}
              </span>
              <span>${item.price * item.quantity}</span>
            </div>
          ))}
          <div className="flex justify-between font-bold text-xl mt-4">
            <span>Total:</span>
            <span>${getCartTotal()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToCart;
