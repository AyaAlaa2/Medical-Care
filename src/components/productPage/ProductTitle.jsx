import { Typography } from "@mui/material";

const ProductTitle = ({ name }) => (
  <Typography variant="h4" sx={{ mb: 1 }}>
    {name}
  </Typography>
);
export default ProductTitle;
