// src/components/products/ProductInfo.jsx
import { Box } from "@mui/material";
import ProductTitle from "./ProductTitle";
import ProductPrice from "./ProductPrice";
import ProductRating from "./ProductRating";
import ProductDescription from "./ProductDescription";
import ProductActions from "./ProductActions";
import ProductStatus from "./ProductStatus";

const ProductInfo = ({ product }) => (
  <Box
    sx={{
      width: "100%",
      maxWidth: 500, // keeps content from stretching too wide
      textAlign: { xs: "center", md: "left" }, // mobile/tablet center, desktop left
    }}
  >
    <ProductTitle product={product} />
    <ProductPrice product={product} />
    <ProductRating product={product} />
    <ProductDescription product={product} />
    <ProductActions />
    <ProductStatus product={product} />
  </Box>
);

export default ProductInfo;
