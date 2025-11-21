import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Rating,
  Box,
  IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import { slugify } from "../products/slug.js"; 

const CardProduct = ({ product }) => {
  const slug = slugify(product.name); 

  return (
    <Card
      component={Link}
      to={`/product/${product.id}/${slug}`} 
      sx={{
        borderRadius: 3,
        bgcolor: "transparent",
        boxShadow: "none",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRight: "1px solid #dbdbdbff",
        padding: "4px",
        position: "relative",
        "&:hover .heart-icon": {
          opacity: 1,
          transform: "translateX(0)",
        },
      }}
    >
      <IconButton
        onClick={() => alert("emo")}
        className="heart-icon"
        sx={{
          position: "absolute",
          top: 9,
          backgroundColor: "white",
          right: 9,
          color: "black",
          opacity: 0,
          transform: "translateX(20px)",
          transition: " transform 0.4s",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "var(--main-color)",
            color: "white",
          },
          zIndex: 10,
        }}
      >
        <FavoriteBorderIcon sx={{ fontSize: 20 }} />
      </IconButton>

      <CardMedia
        component="img"
        image={product.image}
        alt={product.name}
        sx={{
          objectFit: "contain",
          "&:hover ": { scale: "1.05" },
          transition: "0.5s",
          height: "260px",
          px: 2,
        }}
      />

      <CardContent sx={{ textAlign: "left", flexGrow: 1 }}>
        <Typography
          variant="subtitle1"
          fontWeight={600}
          fontSize={15}
          sx={{
            "&:hover": { color: "var(--main-color)" },
            cursor: "pointer",
            transition: "0.3s",
            py: "8px",
          }}
          gutterBottom
          noWrap
        >
          {product.name}
        </Typography>

        <Box display="flex" alignItems="center" mb={1}>
          <Rating
            value={product.customer_reviews.average_rating}
            precision={0.5}
            readOnly
            size="small"
          />
        </Box>

        <Typography variant="h6" color="var(--main-color)" fontWeight={700}>
          {product.price} $
        </Typography>

        <Button
          variant="contained"
          color="gray"
          sx={{
            mt: 1,
            borderRadius: 2,
            width: "100%",
            textTransform: "capitalize",
            "&:hover": {
              bgcolor: "var(--main-color)",
              color: "white",
            },
            transition: "all 0.5s",
            fontSize: "16px",
          }}
        >
          Add To Card
        </Button>
      </CardContent>
    </Card>
  );
};

export default CardProduct;
