import { Box, Typography, Button } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      <ErrorOutlineIcon
        sx={{
          fontSize: 120,
          color: "var(--main-color)",
          mb: 2,
          animation: "pulse 1.5s infinite ease-in-out",
        }}
      />

      <Typography variant="h3" sx={{ fontWeight: "bold", mb: 1 }}>
        Page Not Found
      </Typography>

      <Typography variant="body1" sx={{ color: "gray", mb: 3, maxWidth: 300 }}>
        The page you're looking for doesn't exist or may have been moved.
      </Typography>

      <Button
        component={Link}
        to="/"
        variant="contained"
        sx={{
          backgroundColor: "var(--main-color)",
          color: "white",
          px: 4,
          py: 1.2,
          fontSize: 16,
          borderRadius: 3,
          "&:hover": { backgroundColor: "#487d78ff" },
        }}
      >
        Go Home
      </Button>
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); opacity: 0.7; }
            50% { transform: scale(1.1); opacity: 1; }
            100% { transform: scale(1); opacity: 0.7; }
          }
        `}
      </style>
    </Box>
  );
}
