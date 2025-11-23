import { Box } from "@mui/material";
import ProductShare from "./ProductShare";

const ImageGallery = ({ product }) => (
  <Box>
    <Box
      sx={{
        width: "100%",
        maxWidth: 700,
        aspectRatio: "4 / 3",
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
          objectFit: "contain", 
          display: "block",
        }}
      />
    </Box>
    <ProductShare />
  </Box>
);

export default ImageGallery;
