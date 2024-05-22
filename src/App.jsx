// react toastify
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home/Home";
import { CartProvider } from "./context/CartContext";
function App() {
  return (
    <CartProvider>
      <Home />
    </CartProvider>
  );
}

export default App;
