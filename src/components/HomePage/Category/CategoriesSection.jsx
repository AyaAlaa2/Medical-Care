import React from "react";
import { Box, Container, Typography } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

import CategoryCard from "./CategoriesCard";
import { CATEGORIES } from "./CategoriesData";

export default function CategoriesSection() {
  return (
    <Box sx={{ py: { xs: 4, md: 6 } }}>
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          sx={{ mb: 2, textAlign: "center" }}
          fontWeight="bold"
        >
          Popular Categories
        </Typography>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={3}
          spaceBetween={28}
          breakpoints={{
            600: { slidesPerView: 5 },
            900: { slidesPerView: 6 },
            1200: { slidesPerView: 8 },
          }}
          style={{ paddingBottom: 55 }}
          className="custom-swiper"
        >
          {CATEGORIES.map((cat) => (
            <SwiperSlide
              key={cat.id}
              style={{ width: 180, display: "flex", justifyContent: "center" }}
            >
              <CategoryCard cat={cat} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}
