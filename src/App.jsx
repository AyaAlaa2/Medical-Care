import AboutTabs from "./components/aboutUs/teamStrategy/TeamStrategy";
import ContactUs from "./components/ContactUs.jsx/ContactUs";
import Header from "./components/header/Header";
import Nav from "./components/header/Nav";
import NavBar from "./components/header/NavBar";
import Home from "./components/HomePage/Home";
import Shop from "./components/shop/Shop";

function App() {
  return (
    <>
      <Nav />
      <NavBar />
      <Header />
      {/* <Home /> */}
      {/* <ContactUs /> */}
      {/* <AboutTabs /> */}
      <Shop />
    </>
  );
}

export default App;
