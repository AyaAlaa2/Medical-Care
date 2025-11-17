import { Routes, Route } from "react-router-dom";
import TeamStrategy from "./components/aboutUs/teamStrategy/TeamStrategy";
import ContactUs from "./components/ContactUs.jsx/ContactUs";

import Home from "./components/HomePage/Home";
import Shop from "./components/shop/Shop";
import UserInterface from "./components/userInterface/UserInterface";
import ShopInterface from "./components/shop/ShopInterface";

function App() {
  return (
    <>
      <Routes>
        <Route element={<UserInterface />}>
          <Route index path="/" element={<Home />} />
          <Route element={<ShopInterface />} path="/shop">
            <Route index path=":pageTitle" element={<Shop />} />
          </Route>
        </Route>

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
    </>
  );
}

export default App;
