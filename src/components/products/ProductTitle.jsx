import { Typography } from "@mui/material";

const ProductTitle = ({ product }) => (
  <Typography variant="h4" sx={{ mb: 1 }}>{product.name}</Typography>
);
export default ProductTitle;
