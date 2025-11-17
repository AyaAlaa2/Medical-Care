// App.jsx
import Home from "./components/HomePage/Home";
import TeamStrategy from "./AboutUs/TeamStrategy/TeamStartegy";
import AboutContactSection from "./AboutUs/AboutContactSection/AboutContactSection";
import ServiceSection from "./AboutUs/Services/ServiceSection";
import SubscriptionSection from "./AboutUs/Subscription/SubscriptionSection";

function App() {
  return (
    <>
      <Home />
      <TeamStrategy />
      <AboutContactSection />
      <ServiceSection />
      <SubscriptionSection />
    </>
  );
}

export default App;
