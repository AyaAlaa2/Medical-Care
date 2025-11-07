import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

const AdvCard = ({ imgSrc, subTitle, title }) => {
  return (
    <Box sx={{ mb: 4, width: { xs: "100%", md: "50%" } }}>
      <Box
        sx={{
          backgroundImage: `url(${imgSrc})`,
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
            {subTitle}
          </Typography>
          <Typography
            variant="h5"
            sx={{ fontWeight: 700, mt: 1, mb: 3, color: "#1b1b1b" }}
          >
            {title.slice(0, title.indexOf(" <br>"))}
            <br />
            {title.slice(title.indexOf(" <br>") + 6)}
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
  );
};

export default AdvCard;
