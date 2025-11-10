import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Rating,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";

const SwiperSlideHook = ({ product }) => {
  return (
    <motion.div
      style={{
        padding: "8px",
        scrollSnapAlign: "center",
        borderRight: "1px solid #dbdbdbff",
        height: "auto",
      }}
    >
      <Card
        sx={{
          borderRadius: 3,
          bgcolor: "transparent",
          boxShadow: "none",
        }}
      >
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          sx={{
            objectFit: "contain",
            "&:hover ": { scale: "1.05" },
            transition: "0.5s",
            height: "240px",
          }}
        />
        <CardContent sx={{ textAlign: "left" }}>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            fontSize={15}
            sx={{
              "&:hover": { color: "var(--main-color)" },
              cursor: "pointer",
              transition: "0.3s",
              paddingY:
                product.name.length > 30
                  ? {
                      xs: "10px",
                      sm: "22px",
                      md: "28px",
                      lg: "40px",
                    }
                  : {
                      xs: "18px",
                      sm: "35px",
                      md: "41px",
                      lg: "40px",
                    },
              textOverflow: "ellipsis",
            }}
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
    </motion.div>
  );
};

export default SwiperSlideHook;
