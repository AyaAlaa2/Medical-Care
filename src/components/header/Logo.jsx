import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Logo = ({ onClick }) => {
  return (
    <Box
      component={Link}
      to="/"
      sx={{ display: "flex", alignItems: "center", textDecoration: "none" }}
      onClick={onClick}
      minWidth={120}
    >
      <Box
        component="img"
        src="/logoo.png"
        alt="Logo"
        loading="lazy"
        sx={{
          padding: "10px",
          maxHeight: { xs: 60, md: 70 },
        }}
      />
      <Typography
        variant="h6"
        sx={{
          color: "var(--main-color)",
          fontWeight: "bold",
          fontSize: { sm: 20, md: 22 },
          display: { xs: "none", sm: "block" },
        }}
      >
        Medical Care
      </Typography>
    </Box>
  );
};
export default Logo;
