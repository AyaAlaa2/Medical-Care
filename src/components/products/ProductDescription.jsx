import { Typography } from "@mui/material";
const ProductDescription = ({ product }) => (
  <Typography sx={{ my: 2 }}>{product.description}</Typography>
);
export default ProductDescription;
