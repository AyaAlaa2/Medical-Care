import { Box, Typography } from "@mui/material";

const ProductDescription = ({ product }) => {
  const skinTypes = Object.keys(product)
    .filter((key) => key.startsWith("skin_type"))
    .map((key) => product[key])
    .filter((v) => v != null && v !== "");

  return (
    <Box sx={{ my: 2 }}>
      {product.description && (
        <>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, color: "var(--main-color)", mb: 0.5 }}
          >
            Description
          </Typography>

          <Typography sx={{ mb: 1, px: 1 }}>{product.description}</Typography>
        </>
      )}

      {skinTypes?.length > 0 && (
        <Box sx={{ mb: 2 }}>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, color: "gray" }}
          >
            Skin Type
          </Typography>

          <Typography variant="body2" sx={{ p: 1 }}>
            {skinTypes.join(" , ")}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default ProductDescription;
