import { Box } from "@mui/material";
import PriceFilter from "../filter/PriceFilter";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

const ShopFilter = ({ priceSelected, setPriceSelected }) => {
  return (
    <Box
      sx={{
        border: 0.5,
        borderColor: "#e0e0e0",
        borderStyle: "solid",
        borderRadius: 1,
        p: 2,
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
        Filter by
      </Typography>

      <Divider sx={{ mb: 2 }} />

      <PriceFilter
        priceSelected={priceSelected}
        setPriceSelected={setPriceSelected}
      />
    </Box>
  );
};

export default ShopFilter;
