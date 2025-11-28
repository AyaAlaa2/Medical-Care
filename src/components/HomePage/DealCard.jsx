import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Rating,
} from "@mui/material";
import { useCartAndWishlist } from "../customHook/useCartAndWishlist";

const DealCard = ({ product }) => {
  const { requireLogin, addProductToCart } = useCartAndWishlist();
  const [timeLeft, setTimeLeft] = useState({
    day: 0,
    hrs: 0,
    min: 0,
    sec: 0,
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      const target = new Date(product.dealEnd).getTime();
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) return clearInterval(countdown);

      setTimeLeft({
        day: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hrs: Math.floor((diff / (1000 * 60 * 60)) % 24),
        min: Math.floor((diff / (1000 * 60)) % 60),
        sec: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [product.dealEnd]);

  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        border: "1px solid var(--main-color)",
        borderRadius: 3,
        p: { xs: 2, sm: 3, md: 4 },
        position: "relative",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 2, md: 4 },
        height: "auto",
      }}
    >
      <Chip
        label={`-${product.discount}%`}
        color="error"
        size="small"
        sx={{ position: "absolute", top: 10, left: 10, fontWeight: "bold" }}
      />

      <Box sx={{ width: "60%" }}>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </Box>

      <CardContent sx={{ textAlign: "left", flexGrow: 1, width: "100%" }}>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          fontSize={{ xs: 12, md: 12 }}
        >
          {product.category}
        </Typography>

        <Typography
          variant="h6"
          width="70%"
          sx={{ fontWeight: "bold", mb: 1 }}
          fontSize={{ xs: 18, md: 20 }}
          noWrap
          gutterBottom
        >
          {product.name}
        </Typography>

        <Box display="flex" alignItems="center" mb={1}>
          <Rating
            value={product.average_rating}
            precision={0.5}
            readOnly
            size="small"
          />
          <Typography variant="body2" sx={{ ml: 1 }}>
            ({product.total_reviews})
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" mb={2}>
          <Typography
            variant="body2"
            sx={{
              textDecoration: "line-through",
              color: "text.secondary",
              mr: 1,
            }}
          >
            ${product.price}
          </Typography>
          <Typography variant="h6" color="var(--main-color)">
            ${product.price - (product.price * product.discount) / 100}
          </Typography>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          gap={1}
          mb={2}
          flexWrap="noWrap"
        >
          {["day", "hrs", "min", "sec"].map((key) => (
            <Box
              key={key}
              sx={{
                textAlign: "center",
                backgroundColor: "#e4e2e2ff",
                p: 1,
                borderRadius: 1,
                width: { xs: 30, sm: 50 },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                variant="body1"
                color="error"
                fontWeight="bold"
                fontSize={{ xs: 15, sm: 18 }}
              >
                {timeLeft[key]}
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                fontSize={{ xs: 10, sm: 12 }}
              >
                {key.toUpperCase()}
              </Typography>
            </Box>
          ))}
        </Box>

        <Button
          variant="contained"
          onClick={() => requireLogin(() => addProductToCart(product))}
          sx={{
            mt: 1,
            borderRadius: 2,
            backgroundColor: "var(--main-color)",
            width: "100%",
            textTransform: "capitalize",
            "&:hover": {
              bgcolor: "var(--blue-color)",
              color: "white",
            },
            fontSize: "16px",
          }}
        >
          ADD TO CART
        </Button>
      </CardContent>
    </Card>
  );
};
export default DealCard;
