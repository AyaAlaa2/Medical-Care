import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const LatestProduct = () => {
  const products = [
    {
      id: "1",
      name: "CeraVe Hydrating Facial Cleanser",
      brand: "CeraVe",
      active_ingredient: "Ceramides, Hyaluronic Acid",
      description:
        "Gentle non-foaming cleanser that removes dirt while hydrating the skin.",
      price: 11.99,
      category: "Cleansers",
      type: "Hydrating Cleanser",
      skin_type: ["Normal", "Dry", "Sensitive"],
      benefits: [
        "Removes dirt and makeup",
        "Hydrates the skin",
        "Restores natural barrier",
      ],
      how_to_use: "Apply to wet skin, massage gently, rinse thoroughly.",
      ingredients_list: [
        "Aqua",
        "Glycerin",
        "Cetearyl Alcohol",
        "Ceramide NP",
        "Hyaluronic Acid",
      ],
      inWishlist: false,
      inCard: false,
      customer_reviews: {
        average_rating: 4.5,
        total_reviews: 500,
        ratings_distribution: {
          5: 300,
          4: 125,
          3: 50,
          2: 15,
          1: 10,
        },
        top_positive_review: "Leaves skin soft and hydrated!",
        top_negative_review: "A bit heavy for oily skin.",
      },
      careInstructions: "Use morning and night on wet skin.",
      gallery_images:
        "https://m.media-amazon.com/images/I/51DbQev1thL._SX425_.jpg",
      made_in: "USA",
      certifications: [
        "Dermatologist Tested",
        "Fragrance-Free",
        "Non-Comedogenic",
      ],
      stock_quantity: 120,
      shipping_info: "Free shipping for orders over $50",
    },
    {
      id: "2",
      name: "The Ordinary Niacinamide 10% + Zinc 1%",
      brand: "The Ordinary",
      active_ingredient: "Niacinamide, Zinc PCA",
      description: "Reduces the appearance of blemishes and congestion.",
      price: 5.53,
      category: "Serums",
      type: "Anti-Blemish Serum",
      skin_type: ["Oily", "Combination"],
      benefits: ["Reduces blemishes", "Balances sebum", "Lightweight formula"],
      how_to_use: "Apply a few drops morning and evening before creams.",
      ingredients_list: ["Niacinamide", "Zinc PCA", "Water", "Glycerin"],
      inWishlist: false,
      inCard: false,
      customer_reviews: {
        average_rating: 4.6,
        total_reviews: 550,
        ratings_distribution: {
          5: 330,
          4: 137,
          3: 55,
          2: 16,
          1: 11,
        },
        top_positive_review: "Leaves skin soft and hydrated!",
        top_negative_review: "A bit heavy for oily skin.",
      },
      careInstructions: "Avoid contact with eyes.",
      gallery_images:
        "https://m.media-amazon.com/images/I/31NQ28l5e4L._SX342_SY445_QL70_FMwebp_.jpg",
      made_in: "Canada",
      certifications: ["Vegan", "Cruelty-Free"],
      stock_quantity: 200,
      shipping_info: "Ships within 3-5 business days",
    },
    {
      id: "3",
      name: "La Roche-Posay Anthelios SPF 60",
      brand: "La Roche-Posay",
      active_ingredient: "Avobenzone, Homosalate, Octocrylene",
      description: "Broad-spectrum sunscreen for sensitive skin.",
      price: 33.29,
      category: "Sunscreens",
      type: "SPF 60 Broad Spectrum",
      skin_type: ["All Skin Types"],
      benefits: ["High UVA/UVB protection", "Lightweight", "Fast absorbing"],
      how_to_use: "Apply before sun exposure, reapply every 2 hours.",
      ingredients_list: ["Avobenzone", "Homosalate", "Octocrylene"],
      inWishlist: false,
      inCard: false,
      customer_reviews: {
        average_rating: 4.7,
        total_reviews: 600,
        ratings_distribution: {
          5: 360,
          4: 150,
          3: 60,
          2: 18,
          1: 12,
        },
        top_positive_review: "Leaves skin soft and hydrated!",
        top_negative_review: "A bit heavy for oily skin.",
      },
      careInstructions: "Keep out of eyes.",
      gallery_images:
        "https://m.media-amazon.com/images/I/61i8dborPbL._AC_SY300_SX300_QL70_FMwebp_.jpg",
      made_in: "France",
      certifications: ["Dermatologist Tested", "Fragrance-Free"],
      stock_quantity: 150,
      shipping_info: "Free shipping for orders over $75",
    },
    {
      id: "4",
      name: "The Ordinary Hyaluronic Acid 2% + B5",
      brand: "The Ordinary",
      active_ingredient: "Hyaluronic Acid, Vitamin B5",
      description:
        "A hydrating serum suitable for all skin types that improves skin elasticity and moisture retention.",
      price: 11.99,
      currency: "USD",
      category: "Serums",
      type: "Hydrating Serum",
      skin_type: ["All Skin Types"],
      benefits: ["Hydrates deeply", "Plumps skin", "Soothes dryness"],
      how_to_use:
        "Apply a few drops to face morning and night before moisturizer.",
      ingredients_list: ["Hyaluronic Acid", "Vitamin B5", "Water", "Glycerin"],
      inWishlist: false,
      inCard: false,
      customer_reviews: {
        average_rating: 4.8,
        total_reviews: 350,
        ratings_distribution: { 5: 220, 4: 100, 3: 20, 2: 5, 1: 5 },
        top_positive_review: "Leaves skin plump and smooth!",
        top_negative_review: "Texture is slightly sticky.",
      },
      careInstructions: "Use morning and night.",
      gallery_images:
        "https://m.media-amazon.com/images/I/61eH32lVpdL._AC_UL320_.jpg",
      made_in: "Canada",
      certifications: ["Vegan", "Cruelty-Free"],
      stock_quantity: 150,
      shipping_info: "Ships within 3-5 business days",
    },
    {
      id: "5",
      name: "The Inkey List Hyaluronic Acid Serum",
      brand: "The Inkey List",
      active_ingredient: "Hyaluronic Acid",
      description:
        "Hydrating serum that attracts moisture to the skin for plumpness and suppleness.",
      price: 9.99,
      currency: "USD",
      category: "Serums",
      type: "Hydrating Serum",
      skin_type: ["All Skin Types"],
      benefits: ["Hydrates", "Plumps skin", "Smooths texture"],
      how_to_use:
        "Apply 1-2 drops to face morning and night before moisturizer.",
      ingredients_list: [
        "Hyaluronic Acid",
        "Water",
        "Glycerin",
        "Sodium Hyaluronate",
      ],
      inWishlist: false,
      inCard: false,
      customer_reviews: {
        average_rating: 4.6,
        total_reviews: 1200,
        ratings_distribution: {
          5: 800,
          4: 300,
          3: 70,
          2: 20,
          1: 10,
        },
        top_positive_review: "Hydrates skin beautifully.",
        top_negative_review: "May feel sticky initially.",
      },
      careInstructions: "Use morning and night.",
      gallery_images:
        "https://m.media-amazon.com/images/I/5166GsaOFcL._AC_UL320_.jpg",
      made_in: "UK",
      certifications: ["Vegan", "Cruelty-Free"],
      stock_quantity: 180,
      shipping_info: "Ships within 3-5 business days",
    },
    {
      id: "6",
      name: "Neutrogena Daily Moisturizer",
      brand: "Neutrogena",
      active_ingredient: "Glycerin, Hyaluronic Acid",
      description:
        "A Daily Moisturizer by Neutrogena suitable for Dry, Sensitive. Helps improve skin health and appearance.",
      price: 12.49,
      currency: "USD",
      category: "Moisturizers",
      type: "Daily Moisturizer",
      skin_type: ["Dry", "Sensitive"],
      benefits: [
        "Moisturizes deeply",
        "Smooths skin texture",
        "Non-comedogenic",
      ],
      how_to_use: "Apply as directed on clean skin.",
      ingredients_list: [
        "Water",
        "Glycerin",
        "Emollients",
        "Botanical Extracts",
      ],
      inWishlist: false,
      inCard: false,
      customer_reviews: {
        average_rating: 4.6,
        total_reviews: 400,
        ratings_distribution: { 5: 250, 4: 100, 3: 30, 2: 15, 1: 5 },
        top_positive_review: "Leaves skin soft and glowing!",
        top_negative_review: "A bit heavy for oily skin.",
      },
      careInstructions: "Use morning and night as needed.",
      gallery_images:
        "https://m.media-amazon.com/images/I/61+lUCM6GJL._SX425_.jpg",
      made_in: "USA",
      certifications: ["Dermatologist Tested", "Non-Comedogenic"],
      stock_quantity: 180,
      shipping_info: "Free shipping for orders over $50",
    },
    {
      id: "7",
      name: "Eucerin Balancing Toner",
      brand: "Eucerin",
      active_ingredient: "Niacinamide, Panthenol",
      description:
        "A Balancing Toner by Eucerin suitable for Oily, Combination. Helps improve skin health and appearance.",
      price: 15.75,
      currency: "USD",
      category: "Toners",
      type: "Balancing Toner",
      skin_type: ["Oily", "Combination"],
      benefits: [
        "Balances skin tone",
        "Reduces oiliness",
        "Soothes irritation",
      ],
      how_to_use: "Apply as directed on clean skin.",
      ingredients_list: ["Water", "Glycerin", "Botanical Extracts"],
      inWishlist: false,
      inCard: false,
      customer_reviews: {
        average_rating: 4.4,
        total_reviews: 220,
        ratings_distribution: { 5: 130, 4: 60, 3: 20, 2: 5, 1: 5 },
        top_positive_review: "Leaves skin soft and glowing!",
        top_negative_review: "A bit heavy for oily skin.",
      },
      careInstructions: "Use morning and night as needed.",
      gallery_images:
        "https://m.media-amazon.com/images/I/61V1nmkg2eL._SX425_.jpg",
      made_in: "Germany",
      certifications: ["Dermatologist Tested"],
      stock_quantity: 140,
      shipping_info: "Ships within 3-5 business days",
    },
    {
      id: "8",
      name: "Vichy Detox Mask",
      brand: "Vichy",
      active_ingredient: "Kaolin, Charcoal",
      description:
        "A Detox Mask by Vichy suitable for All Skin Types. Helps improve skin health and appearance.",
      price: 18.99,
      currency: "USD",
      category: "Face Masks",
      type: "Detox Mask",
      skin_type: ["All Skin Types"],
      benefits: ["Detoxifies", "Removes impurities", "Brightens complexion"],
      how_to_use: "Apply as directed on clean skin.",
      ingredients_list: ["Kaolin", "Charcoal", "Water", "Glycerin"],
      inWishlist: false,
      inCard: false,
      customer_reviews: {
        average_rating: 4.7,
        total_reviews: 300,
        ratings_distribution: { 5: 180, 4: 90, 3: 20, 2: 5, 1: 5 },
        top_positive_review: "Leaves skin soft and glowing!",
        top_negative_review: "A bit strong for sensitive skin.",
      },
      careInstructions: "Use 2-3 times per week.",
      gallery_images:
        "https://m.media-amazon.com/images/I/41I90W9bHuL._SX342_SY445_QL70_FMwebp_.jpg",
      made_in: "France",
      certifications: ["Dermatologist Tested", "Non-Comedogenic"],
      stock_quantity: 130,
      shipping_info: "Free shipping for orders over $50",
    },
    {
      id: "9",
      name: "Paula's Choice Anti-Aging Serum",
      brand: "Paula's Choice",
      active_ingredient: "Retinol, Peptides",
      description:
        "An Anti-Aging Serum by Paula's Choice suitable for Dry, Sensitive. Helps improve skin health and appearance.",
      price: 29.99,
      currency: "USD",
      category: "Serums",
      type: "Anti-Aging Serum",
      skin_type: ["Dry", "Sensitive"],
      benefits: ["Reduces wrinkles", "Boosts collagen", "Smooths texture"],
      how_to_use: "Apply as directed on clean skin.",
      ingredients_list: ["Retinol", "Peptides", "Water", "Glycerin"],
      inWishlist: false,
      inCard: false,
      customer_reviews: {
        average_rating: 4.8,
        total_reviews: 450,
        ratings_distribution: { 5: 300, 4: 120, 3: 20, 2: 5, 1: 5 },
        top_positive_review: "Leaves skin soft and glowing!",
        top_negative_review: "Too strong for sensitive skin at first.",
      },
      careInstructions: "Use at night only.",
      gallery_images:
        "https://m.media-amazon.com/images/I/61sdQicm++L._SX522_.jpg",
      made_in: "USA",
      certifications: ["Vegan", "Cruelty-Free"],
      stock_quantity: 110,
      shipping_info: "Ships within 3-5 business days",
    },
    {
      id: "10",
      name: "Bioderma Hydrating Toner",
      brand: "Bioderma",
      active_ingredient: "Glycerin, Allantoin",
      description:
        "A Hydrating Toner by Bioderma suitable for Normal, Dry. Helps improve skin health and appearance.",
      price: 16.5,
      currency: "USD",
      category: "Toners",
      type: "Hydrating Toner",
      skin_type: ["Normal", "Dry"],
      benefits: ["Balances skin tone", "Soothes irritation", "Hydrates deeply"],
      how_to_use: "Apply as directed on clean skin.",
      ingredients_list: [
        "Water",
        "Glycerin",
        "Allantoin",
        "Botanical Extracts",
      ],
      inWishlist: false,
      inCard: false,
      customer_reviews: {
        average_rating: 4.6,
        total_reviews: 250,
        ratings_distribution: { 5: 150, 4: 70, 3: 20, 2: 5, 1: 5 },
        top_positive_review: "Leaves skin soft and glowing!",
        top_negative_review: "A bit heavy for oily skin.",
      },
      careInstructions: "Use morning and night as needed.",
      gallery_images:
        "https://m.media-amazon.com/images/I/51D9UzBWcqL._SX522_.jpg",
      made_in: "France",
      certifications: ["Dermatologist Tested", "Non-Comedogenic"],
      stock_quantity: 140,
      shipping_info: "Free shipping for orders over $50",
    },
  ];

  const stars = [1, 2, 3, 4, 5];

  return (
    <Box
      sx={{
        p: 5,
        borderRadius: 3,
        position: "relative",
      }}
    >
      <Typography
        variant="h4"
        sx={{ mb: 2, textAlign: "center" }}
        fontWeight="bold"
      >
        Latest Products
      </Typography>

      <IconButton
        className="swiper-button-prev"
        sx={{
          position: "absolute",
          top: "50%",
          left: 8,
          transform: "translateY(-50%)",
          bgcolor: "transparent",
          boxShadow: 2,
          "&:hover": { bgcolor: "grey.100" },
        }}
      >
        <FaChevronLeft />
      </IconButton>

      <IconButton
        className="swiper-button-next"
        sx={{
          position: "absolute",
          top: "50%",
          right: 8,
          transform: "translateY(-50%)",
          bgcolor: "transparent",
          boxShadow: 2,
          "&:hover": { bgcolor: "grey.100" },
        }}
      >
        <FaChevronRight />
      </IconButton>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{ delay: 3000 }}
        spaceBetween={15}
        slidesPerView={4}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 2.4 },
          900: { slidesPerView: 3.4 },
        }}
        style={{ border: "1px solid #dbdbdbff" }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
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
                  image={product.gallery_images}
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
                  <Typography variant="body1" sx={{ pb: "10px" }}>
                    {stars.map((item) =>
                      item < product.customer_reviews.average_rating ? (
                        <FaStar color="#ffb908ff" />
                      ) : (
                        <CiStar color="#ffb908ff" />
                      )
                    )}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="var(--main-color)"
                    fontWeight={700}
                  >
                    {product.price}
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
                      transition: "0.5s",
                      fontSize: "16px",
                    }}
                  >
                    Add To Card
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
export default LatestProduct;
