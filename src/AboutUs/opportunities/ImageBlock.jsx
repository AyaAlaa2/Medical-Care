import { Box } from "@mui/material";

export default function ImageBlock({ imageUrl }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
      <img src={imageUrl} alt="About section" style={{ maxWidth: "100%", borderRadius: 16 }} />
    </Box>
  );
}
