// src/components/products/ProductTitle.jsx

import { Typography, Box } from "@mui/material";

const ProductTitle = ({ product }) => {
  return (
    <Box>

      {/* ⭐ Small category label above product name */}
      <Typography
        variant="body2"
        sx={{
          color: "gray",
          textTransform: "capitalize",
          fontSize: "13px",
          letterSpacing: "0.5px",
          mb: 0.5,
        }}
      >
        {product.category}
      </Typography>

      {/* Product name */}
      <Typography variant="h4">{product.name}</Typography>
    </Box>
  );
};

export default ProductTitle;

