import React from "react";
import { Box, Typography, Breadcrumbs, Link } from "@mui/material";

const ContactHeader = () => {
  return (
    <Box
      sx={{
        mb: 5,
        py: 4,
        px: 2,
        borderRadius: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      bgcolor="var(--third-color)"
    >
      <Typography variant="h5" fontWeight="bold">
        Contact Us
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
        <Link
          underline="hover"
          color="inherit"
          href="/"
          sx={{ "&:hover": { color: "var(--main-color)" } }}
        >
          Element
        </Link>
        <Typography sx={{ color: "text.primary" }}>Contact Us</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default ContactHeader;
