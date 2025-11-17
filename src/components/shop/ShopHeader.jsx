import React from "react";
import { Box, Typography, Breadcrumbs, Link } from "@mui/material";

const ShopHeader = () => {
  return (
    <Box
      sx={{
        mb: 5,
        py: 6,
        px: 4,
        borderRadius: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      bgcolor="var(--third-color)"
    >
      <Typography variant="h5" fontWeight="bold">
        Shop
      </Typography>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          color="inherit"
          href="/"
          sx={{ "&:hover": { color: "var(--main-color)" } }}
        >
          Home
        </Link>

        <Typography sx={{ color: "text.primary" }}>Shop</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default ShopHeader;
