// src/components/products/ProductPage.jsx
import { useParams } from "react-router-dom";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useGetProductsQuery } from "../store/apiSlice";
import ImageGallery from "./ImageGallery";
import ProductInfo from "./ProductInfo";
import RelatedProductsSection from "./relatedProducts/RelatedProductsSection";
import HeaderOfSection from "./../customHook/HeaderOfSection";

const ProductPage = () => {
  const { id } = useParams(); // route: /product/:id/:slug → we only need id here
  const { data, isLoading, error } = useGetProductsQuery();

  if (isLoading) return <CircularProgress sx={{ display: "block", m: 4 }} />;
  if (error) return <Typography sx={{ m: 4 }}>Error loading product</Typography>;

  const product = data?.find((p) => String(p.id) === String(id));
  if (!product) return <Typography sx={{ m: 4 }}>Product not found</Typography>;

  return (
    <>
      <HeaderOfSection
        title={product.name}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "shop", href: "/shop/new" },
          { label: product.name },
        ]}
      />

      {/* Main product section: image + info */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          px: 1,
          py: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            maxWidth: 1100,
            alignItems: "flex-start",
            justifyContent: "center", // keep both blocks centered inside container
            "@media (max-width: 1024px)": {
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            },
          }}
        >
          {/* Image column */}
          <Box
            sx={{
              mr: { xs: 0, md: 3 }, // small horizontal space between image & info
              mb: { xs: 2, md: 0 },
            }}
          >
            <ImageGallery product={product} />
          </Box>

          {/* Product info column */}
          <Box
            sx={{
              ml: { xs: 0, md: 3 }, // match spacing on the other side
            }}
          >
            <ProductInfo product={product} />
          </Box>
        </Box>
      </Box>

      {/* Related products under the page */}
      <Box sx={{ px: 2, pb: 4 }}>
        <RelatedProductsSection
          type={product.product_type}
          currentId={product.id}
        />
      </Box>
    </>
  );
};

export default ProductPage;
