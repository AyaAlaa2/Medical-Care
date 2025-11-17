import { Typography } from "@mui/material";
const ProductPrice = ({ product }) => (
  <Typography variant="h5" sx={{   color: "var(--main-color)", mb: 1 }}>
    ${product.price}
  </Typography>
);
export default ProductPrice;
