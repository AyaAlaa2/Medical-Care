import { useParams } from "react-router-dom";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useGetProductsQuery } from "../store/apiSlice";
import ImageGallery from "./ImageGallery";
import ProductInfo from "./ProductInfo";
import RelatedProductsSection from "../relatedProducts/RelatedProductsSection";

const ProductPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetProductsQuery();

  if (isLoading) return <CircularProgress sx={{ display: "block", m: 4 }} />;
  if (error)
    return <Typography sx={{ m: 4 }}>Error loading product</Typography>;

  const product = data?.find((p) => String(p.id) === String(id));
  if (!product) return <Typography sx={{ m: 4 }}>Product not found</Typography>;

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", px: 2, py: 4 }}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            maxWidth: 1100,
            gap: 4,
            "@media (max-width: 768px)": { flexDirection: "column" },
          }}
        >
          <Box sx={{ flex: 1 }}>
            <ImageGallery product={product} />
          </Box>
          <Box sx={{ flex: 1 }}>
            <ProductInfo product={product} />
          </Box>
        </Box>
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
