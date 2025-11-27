import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Logo = ({ onClick }) => {
  return (
    <Box
      component={Link}
      to="/"
      sx={{ display: "flex", alignItems: "center", textDecoration: "none" }}
      onClick={onClick}
      minWidth={150}
    >
      <Box
        component="img"
        src="/logoo.png"
        alt="Logo"
        loading="lazy"
        sx={{
          padding: "10px",
          maxHeight: { xs: 50, md: 70 },
        }}
      />
      <Typography
        variant="h6"
        sx={{
          color: "var(--main-color)",
          fontWeight: "bold",
          fontSize: { xs: 14, sm: 16, md: 22 },
        }}
      >
        Medical Care
      </Typography>
    </Box>
  );
};
export default Logo;
