import { useParams } from "react-router-dom";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useGetProductsQuery } from "../store/apiSlice";
import ImageGallery from "./ImageGallery";
import ProductInfo from "./ProductInfo";
import RelatedProductsSection from "../relatedProducts/RelatedProductsSection";
import HeaderOfSection from "../customHook/HeaderOfSection";
import ProductDetailSection from "./ProductDetailSection";
import Loading from "../customHook/Loading";
import Error from "../customHook/Error";

const ProductPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetProductsQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

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
            alignItems: "flex-start",
            justifyContent: "center",
            gap: 1,
            "@media (max-width: 1024px)": {
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            },
            mb: 5,
          }}
        >
          <Box
            sx={{
              mr: { xs: 0, md: 3 },
              mb: { xs: 2, md: 0 },
            }}
          >
            <ImageGallery product={product} />
          </Box>
          <Box
            sx={{
              mx: { xs: 4, md: 2 },
            }}
          >
            <ProductInfo product={product} />
          </Box>
        </Box>
      </Box>

      <Box sx={{ px: 4, pb: 2 }}>
        <ProductDetailSection product={product} />
      </Box>

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
