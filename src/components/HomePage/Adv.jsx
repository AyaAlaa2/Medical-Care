import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

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
        <Box sx={{ mb: 4, width: { xs: "100%", md: "50%" } }}>
          <Box
            sx={{
              backgroundImage: "url(./adv1.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: 3,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              p: { xs: 2, sm: 3, md: 4 },
              flexDirection: { xs: "column", sm: "row" },
              textAlign: "right",
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="subtitle2"
                sx={{ color: "text.secondary", fontWeight: 500 }}
              >
                FABRIC SURGICAL MASK
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontWeight: 700, mt: 1, mb: 3, color: "#1b1b1b" }}
              >
                Ply Surgical Mask <br /> With Filter
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "var(--main-color)",
                  color: "#fff",
                  px: 3,
                  py: 1,
                  borderRadius: "8px",
                  textTransform: "none",
                  fontWeight: 600,
                  "&:hover": { backgroundColor: "#00796b" },
                }}
              >
                SHOP NOW
              </Button>
            </Box>
          </Box>
        </Box>

        <Box sx={{ mb: 4, width: { xs: "100%", md: "50%" } }}>
          <Box
            sx={{
              backgroundImage: "url(./adv2.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: 3,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              p: { xs: 2, sm: 3, md: 4 },
              flexDirection: { xs: "column-reverse", sm: "row" },
              textAlign: "right",
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="subtitle2"
                sx={{ color: "text.secondary", fontWeight: 500 }}
              >
                SMART CARE STETHOSCOPES
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontWeight: 700, mt: 1, mb: 3, color: "#1b1b1b" }}
              >
                Digital Stethoscope <br /> For Doctors
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "var(--main-color)",
                  color: "#fff",
                  px: 3,
                  py: 1,
                  borderRadius: "8px",
                  textTransform: "none",
                  fontWeight: 600,
                  "&:hover": { backgroundColor: "#00796b" },
                }}
              >
                SHOP NOW
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Adv;
