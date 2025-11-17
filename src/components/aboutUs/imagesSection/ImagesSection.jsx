import React, { useState } from "react";
import { Container, Box, Typography } from "@mui/material";
import { AllimagesData } from "./AllimagesData";
import { ImgStyle, useImageSectionStyles } from "./useImageSectionStyles";

// Reusable Image component with shared styling and error handling
const Img = ({ src, alt, ...rest }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <Box
        sx={{
          ...ImgStyle,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f0f0f0",
          border: "1px solid #ccc",
          color: "#777",
          p: 2,
        }}
        {...rest}
      >
        <Typography variant="body2" align="center">
          Error loading image: {alt}
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      sx={ImgStyle}
      {...rest}
    />
  );
};

export default function ImagesSection() {
  const [girl, top, bottomLeft, bottomRight] = AllimagesData;
  const { mainContainerSx, leftColumnSx, rightColumnSx } = useImageSectionStyles();

  // Define the structure of the right column images directly with their data and grid area
  const rightColumnImages = [
    { ...top, gridArea: "top" },
    { ...bottomLeft, gridArea: "bottomLeft" },
    { ...bottomRight, gridArea: "bottomRight" },
  ];

  // Component to render a single image wrapper
  const ImageWrapper = ({ gridArea, src, alt, id }) => (
    <Box key={id} sx={{ gridArea, minWidth: 0, minHeight: 0 }}>
      <Img src={src} alt={alt} />
    </Box>
  );

  return (
    <Container maxWidth={false} sx={{ py: 4 }}>
      <Box sx={mainContainerSx}>
        {/* LEFT COLUMN: the girl image */}
        <Box sx={leftColumnSx}>
          <Img src={girl.src} alt={girl.alt} />
        </Box>

        {/* RIGHT COLUMN: top full image + two smaller ones below */}
        <Box sx={rightColumnSx}>
          {rightColumnImages.map(ImageWrapper)}
        </Box>
      </Box>
    </Container>
  );
}