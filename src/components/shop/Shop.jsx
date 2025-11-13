import React, { useState } from "react";
import ShopProducts from "./ShopProducts";
import { useGetProductsQuery } from "../store/apiSlice";
import ShopHeader from "./ShopHeader";
import ShopText from "./ShopText";
import { Grid } from "@mui/material";
import ShopListView from "./ShopListView";

const Shop = () => {
  const { data, isLoading, error } = useGetProductsQuery();
  const [selectedListView, setSlectedListView] = useState("fourItem");

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
        <Grid item size={{ xs: 12, md: 3 }}></Grid>
        <Grid item size={{ xs: 12, md: 9 }} px={3}>
          <ShopText />
          <ShopListView
            selectedListView={selectedListView}
            setSlectedListView={setSlectedListView}
          />
          <ShopProducts products={data} selectedListView={selectedListView} />
        </Grid>
      </Grid>
    </>
  );
};

export default Shop;
