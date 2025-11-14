import React, { useState } from "react";
import ShopProducts from "./ShopProducts";
import { useGetProductsQuery } from "../store/apiSlice";
import ShopHeader from "./ShopHeader";
import ShopText from "./ShopText";
import { Grid } from "@mui/material";
import ShopListView from "./ShopListView";
import ShopFilter from "./ShopFilter";

const Shop = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  const [selectedListView, setSlectedListView] = useState("fourItem");
  const [priceSelected, setPriceSelected] = useState([5, 1500]);

  const filteredProducts = (products || []).filter((product) => {
    const price = parseFloat(product.price);
    const machingPrice = price >= priceSelected[0] && price <= priceSelected[1];
    return machingPrice;
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching products</div>;
  }
  return (
    <>
      <ShopHeader />
      <Grid container spacing={2}>
        <Grid item size={{ xs: 12, md: 3 }} px={3} pt={2}>
          <ShopFilter
            priceSelected={priceSelected}
            setPriceSelected={setPriceSelected}
          />
        </Grid>
        <Grid item size={{ xs: 12, md: 9 }} px={3}>
          <ShopText />
          <ShopListView
            selectedListView={selectedListView}
            setSlectedListView={setSlectedListView}
            products={filteredProducts}
          />
          <ShopProducts
            products={products}
            selectedListView={selectedListView}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Shop;
