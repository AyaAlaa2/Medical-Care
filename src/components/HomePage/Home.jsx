import React from "react";
import Hero from "./Hero";
import Adv from "./AdvSec/Adv";
import SwiperContainer from "./SwiperContainer";
import { useGetProductsQuery } from "../store/apiSlice";
import CategoriesSection from "./Category/CategoriesSection";
import PopularBrands from "./popularBrand/PopularBrand";
import FixedSection from "./fixedSection.jsx/FixedSection";
import LatestProduct from "./latestProducts/LatestProducts";
import DealOfTheWeek from "./dealOfTheWeek/DealOfTheWeek";
import FeaturedProduct from "./featuredProduct/FeaturedProduct";

const Home = () => {
  const { data, error, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching products</div>;
  }

  const latestProduct = data.slice(0, 30);
  const dealOfTheWeekProduct = data.filter((product) => product.discount > 0);
  const featuredProducts = data.slice(35, 55);

  return (
    <div>
      <Hero />
      <Adv />
      <CategoriesSection />
      <LatestProduct latestProduct={latestProduct} />
      <DealOfTheWeek dealOfTheWeekProduct={dealOfTheWeekProduct} />
      <FixedSection />
      <FeaturedProduct featuredProducts={featuredProducts} />
      <PopularBrands />
    </div>
  );
};

export default Home;
