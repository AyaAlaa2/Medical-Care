// src/components/products/ImageGallery.jsx
import { Box } from "@mui/material";
import ProductShare from "./ProductShare";
const ImageGallery = ({ product }) => (
  <Box>
    {/* Fixed-ratio container for the image */}
    <Box
      sx={{
        width: "100%",
        maxWidth: 700, // optional, keeps it from getting too wide
        aspectRatio: "4 / 3", // all product images share the same ratio
        border: "1px solid rgba(0,0,0,0.3)",
        borderRadius: 2,
        mx: "auto",
        p: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src={product.image}
        alt={product.name}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "contain", // image fits inside without stretching
          display: "block",
        }}
      />
    </Box>
    <ProductShare />
  </Box>
);

export default ImageGallery;
