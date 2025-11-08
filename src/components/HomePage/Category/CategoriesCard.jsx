import React from "react";
import { Box, Typography } from "@mui/material";

const CategoriesCard = ({cat}) => {
  return (
    <Box sx={{ textAlign: "center", userSelect: "none" }}>
      <Box
        sx={{
          width: 130,
          height: 130,
          mx: "auto",
          mb: 1,
          borderRadius: "50%",
          bgcolor: "#f5f5f5",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Box
          component="img"
          src={cat.img}
          alt={cat.title}
          loading="lazy"
          sx={{
            width: "70%",
            height: "70%",
            objectFit: "contain",
            display: "block",
            pointerEvents: "none",
          }}
        />
      </Box>
      <Typography variant="subtitle2" align="center" sx={{ fontWeight: 600 }}>
        {cat.title}
      </Typography>
    </Box>
  );
};

export default CategoriesCard;
