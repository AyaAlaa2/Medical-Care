import { Box } from "@mui/material";

const ImageGallery = ({ product }) => (
  <Box>
    <Box
      component="img"
      src={product.image}
      alt={product.name}
      sx={{
        maxWidth: "100%",
        height: "auto",
        maxHeight: 400,
        display: "block",
        mx: "auto",
        border: "1px solid rgba(0,0,0,0.3)",
        borderRadius: 2,
        p: 5,
      }}
    />
  </Box>
);

export default ImageGallery;
