import { Routes, Route } from "react-router-dom";
import TeamStrategy from "./components/aboutUs/teamStrategy/TeamStrategy";
import ContactUs from "./components/ContactUs.jsx/ContactUs";

import Home from "./components/HomePage/Home";
import Shop from "./components/shop/Shop";
import UserInterface from "./components/userInterface/UserInterface";
import ShopInterface from "./components/shop/ShopInterface";
import CategoriesInterFace from "./components/categories/CategoriesInterFace";

function App() {
  return (
    <>
      <Routes>
        <Route element={<UserInterface />}>
          <Route index path="/" element={<Home />} />
          <Route element={<ShopInterface />} path="/shop">
            <Route index path=":pageTitle" element={<Shop />} />
          </Route>
          <Route path="/elements">
            <Route path="fAQ" element={<h1>f</h1>} />
            <Route path="about" element={<TeamStrategy />} />
            <Route path="contact" element={<ContactUs />} />
          </Route>
          <Route element={<ShopInterface />} path="/categories">
            <Route index path=":pageTitle" element={<Shop />} />
          </Route>
        </Route>

        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
