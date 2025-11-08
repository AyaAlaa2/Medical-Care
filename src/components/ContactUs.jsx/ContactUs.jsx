import React from "react";
import { Box, Grid } from "@mui/material";
import LeafletMap from "./LeafletMap";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ContactHeader from "./ContactHeader";

const ContactUs = () => {
  return (
    <Box
      sx={{
        p: 4,
        borderRadius: 3,
        position: "relative",
      }}
    >
      <ContactHeader />
      <Grid container spacing={2}>
        <Grid item size={{ xs: 12, md: 6 }}>
          <LeafletMap />
        </Grid>
        <Grid item size={{ xs: 12, md: 6 }}>
          <ContactForm />
        </Grid>
      </Grid>
      <ContactInfo />
    </Box>
  );
};

export default ContactUs;
