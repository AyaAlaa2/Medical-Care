import React, { useState } from "react";
import ShopProducts from "./ShopProducts";
import { useGetProductsQuery } from "../store/apiSlice";
import HeaderOfSection from "../customHook/HeaderOfSection";
import ShopText from "./ShopText";
import { Grid, Pagination } from "@mui/material";
import ShopListView from "./ShopListView";
import ShopFilter from "./ShopFilter";
import Loading from "../customHook/Loading";
import Error from "../customHook/Error";

const Shop = () => {
  const [page, setPage] = useState(1);
  const { data: products, isLoading, error } = useGetProductsQuery();
  const [selectedListView, setSlectedListView] = useState("fourItem");
  const [priceSelected, setPriceSelected] = useState([5, 1500]);

  const filteredProducts = (products || []).filter((product) => {
    const price = parseFloat(product.price);
    const machingPrice = price >= priceSelected[0] && price <= priceSelected[1];
    return machingPrice;
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <>
      <HeaderOfSection
        title="Shop"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Shop" }]}
      />
      <Grid
        container
        spacing={2}
        alignItems="flex-start"
        justifyContent="center"
      >
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
            products={filteredProducts.slice(
              (page - 1) * 12,
              (page - 1) * 12 + 12
            )}
            selectedListView={selectedListView}
          />
          <Pagination
            count={Math.ceil(filteredProducts.length / 12)}
            page={page}
            onChange={(e, value) => setPage(value)}
            sx={{
              "& .MuiPaginationItem-root": {
                color: "gray",
                borderColor: "var(--gray-100)",
              },
              "& .MuiPaginationItem-root.Mui-selected": {
                backgroundColor: "var(--main-color)",
                color: "#fff",
                borderColor: "var(--main-color)",
              },
              "& .MuiPaginationItem-root:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.1)",
              },
            }}
            variant="outlined"
            shape="rounded"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Shop;
