import { Box } from "@mui/material";
import ProductTitle from "./ProductTitle";
import ProductPrice from "./ProductPrice";
import ProductRating from "./ProductRating";
import ProductDescription from "./ProductDescription";
import ProductActions from "./ProductActions";
import ProductStatus from "./ProductStatus";
import ProductShare from "./ProductShare";
const ProductInfo = ({ product }) => (
  <Box
    sx={{
      textAlign: "left",
      "@media (max-width: 768px)": {
        textAlign: "center",
      },
    }}
  >
    <ProductTitle product={product} />
    <ProductPrice product={product} />
    <ProductRating product={product} />
    <ProductDescription product={product} />
    <ProductActions />
    <ProductStatus product={product} />
    <ProductShare />
  </Box>
);

export default ProductInfo;
