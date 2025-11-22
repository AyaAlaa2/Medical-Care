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
    <ProductTitle name={product.name} />
    <ProductPrice price={product.price} />
    <ProductRating product={product} />
    <ProductDescription description={product.description} />
    <ProductActions product={product} />
    <ProductStatus stock_quantity={product.stock_quantity} />
    <ProductShare />
  </Box>
);

export default ProductInfo;
