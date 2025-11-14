import { Routes, Route } from "react-router-dom";
import TeamStrategy from "./components/aboutUs/teamStrategy/TeamStrategy";
import ContactUs from "./components/ContactUs.jsx/ContactUs";
import Header from "./components/header/Header";
import Nav from "./components/header/Nav";
import NavBar from "./components/header/NavBar";
import Home from "./components/HomePage/Home";
import Shop from "./components/shop/Shop";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Nav />
      <NavBar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<h1>Products</h1>} />

        {/* Shop */}
        <Route path="/shop/new" element={<Shop />} />
        <Route path="/shop/bestsellers" element={<h1>Top Selling</h1>} />
        <Route path="/shop/offers" element={<h1>Discounts</h1>} />

        {/* Categories */}
        <Route path="/categories/devices" element={<h1>Devices</h1>} />
        <Route path="/categories/medicines" element={<h1>Medicines</h1>} />
        <Route path="/categories/cosmetics" element={<h1>Cosmetics</h1>} />

        {/* Elements */}
        <Route path="/elements/FAQ" element={<h1>f</h1>} />
        <Route path="/elements/about" element={<TeamStrategy />} />
        <Route path="/elements/contact" element={<ContactUs />} />

        {/* not found page */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
