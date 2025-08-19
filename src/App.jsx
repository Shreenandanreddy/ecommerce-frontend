import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import Computers from "./components/Computers";
import Mobiles from "./components/Mobiles";
import Laptops from "./components/Laptops";
import Pendrives from "./components/Pendrives";
import Home from "./components/Home";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";
import Payment from "./components/Payment";
import Orders from "./components/Orders";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <BrowserRouter basename="/ecommerce-frontend">
      <Routes>
        <Route path="/" element={<HomePage />}>
          {/* Default page when visiting "/" */}
          <Route index element={<Home />} />

          {/* Other pages */}
          <Route path="home" element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="computers" element={<Computers />} />
          <Route path="mobiles" element={<Mobiles />} />
          <Route path="laptops" element={<Laptops />} />
          <Route path="pendrives" element={<Pendrives />} />
          <Route path="productpage" element={<ProductPage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="payment" element={<Payment />} />
          <Route path="orders" element={<Orders />} />

          {/* Auth */}
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;