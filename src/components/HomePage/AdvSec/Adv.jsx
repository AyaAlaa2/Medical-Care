import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import AdvCard from "./AdvCard";

const Adv = () => {
  return (
    <Box
      sx={{
        py: { xs: 4, md: 8 },
        px: { xs: 2, md: 6 },
        backgroundColor: "var(--third-color)",
      }}
    >
      <Container
        maxWidth="lg"
        spacing={1}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 2, md: 4 },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AdvCard
          imgSrc="../adv1.jpg"
          subTitle="FABRIC SURGICAL MASK"
          title="Ply Surgical Mask <br> With Filter"
        />
        <AdvCard
          imgSrc="../adv2.jpg"
          subTitle="FABRIC SURGICAL MASK"
          title="Digital Stethoscope <br> For Doctors"
        />
      </Container>
    </Box>
  );
};

export default Adv;
