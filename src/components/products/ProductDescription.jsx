// src/components/products/ProductDescription.jsx
import { Box, Typography } from "@mui/material";

const ProductDescription = ({ product }) => {
  // --- Unified Ingredients ---
  const ingredients =
    Array.isArray(product.ingredients_list)
      ? product.ingredients_list
      : product.ingredient_list
      ? product.ingredient_list.split(",").map(i => i.trim())
      : [];

  // --- Unified Skin Types ---
  const skinTypes =
    Array.isArray(product.skin_type)
      ? product.skin_type
      : typeof product.skin_type === "string"
      ? product.skin_type.split(",").map(i => i.trim())
      : [];

  // --- Manufacturer ---
  const manufacturer =
    product.manufacturer_name ||
    product.manufacturer ||
    "";

  return (
    <Box sx={{ my: 2 }}>

      {/* DESCRIPTION */}
      {product.description && (
        <>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, color: "var(--main-color)", mb: 0.5 }}
          >
            Description
          </Typography>

          <Typography sx={{ mb: 1, px: 1 }}>
            {product.description}
          </Typography>
        </>
      )}

      {/* CARE INSTRUCTIONS */}
      {product.careInstructions && (
        <>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, mb: 0.5, color: "var(--main-color)" }}
          >
            Care Instructions
          </Typography>

          <Typography sx={{ mb: 1, px: 1 }}>
            {product.careInstructions}
          </Typography>
        </>
      )}

      {/* INGREDIENTS */}
      {ingredients.length > 0 && (
        <Box sx={{ mb: 1 }}>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600,color:'gray'   }}
          >
            Ingredients
          </Typography>

          <Typography variant="body2" sx={{p:1}}>
            {ingredients.join(", ")}
          </Typography>
        </Box>
      )}

      {/* SKIN TYPE */}
      {skinTypes.length > 0 && (
        <Box sx={{ mb: 2 }}>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600 ,color:'gray'}}
          >
            Skin Type
          </Typography>

          <Typography variant="body2" sx={{p:1}}>
            {skinTypes.join(", ")}
          </Typography>
        </Box>
      )}

      {/* MANUFACTURER — SAME LINE */}
      {manufacturer && (
        <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600 ,color:'gray'}}
          >
            Manufacturer:
          </Typography>

          <Typography variant="body2" sx={{ mt: "1px",px:1 }}>
            {manufacturer}
          </Typography>
        </Box>
      )}

    </Box>
  );
};

export default ProductDescription;
