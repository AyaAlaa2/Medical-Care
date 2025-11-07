import React from "react";
import Hero from "./Hero";
import Adv from "./AdvSec/Adv";
import SwiperContainer from "./SwiperContainer";
import { useGetProductsQuery } from "../store/apiSlice";

const Home = () => {
  const { data, error, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching products</div>;
  }

  const latestProduct = data.slice(0, 30);
  const dealProduct = data.filter((product) => product.discount > 0);
  return (
    <div>
      <Hero />
      <Adv />
      <SwiperContainer
        headerOfSection="Latest Products"
        products={latestProduct}
        xsBreakPoint={1}
        smBreakPoint={2}
        mdBreakPoint={2.4}
        lgBreakPoint={3.4}
      />
      <SwiperContainer
        headerOfSection="Deal Of The Week"
        products={dealProduct}
        xsBreakPoint={1}
        smBreakPoint={1}
        mdBreakPoint={1}
        lgBreakPoint={2}
      />
    </div>
  );
};

export default Home;
