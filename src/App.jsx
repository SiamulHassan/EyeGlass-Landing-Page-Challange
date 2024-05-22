// react toastify
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import About from "./pages/About/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
