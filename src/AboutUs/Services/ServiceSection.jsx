// src/about/services/ServiceSection.jsx
import { Container, Grid, Alert, Box } from "@mui/material";
import ServiceCard from "./ServiceCard";
import { useServices } from "./useServices";

const ServiceSection = () => {
  const { services, error } = useServices();

  if (error) {
    return (
      <Container sx={{ py: 8 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box display="flex" justifyContent="center">
        <Grid container spacing={4} justifyContent="center">
          {services.map(({ id, icon, title, description }) => (
            <Grid
              item
              key={id}
              xs={12}          
              sm={3}         
              display="flex"
              justifyContent="center"
            >
              <ServiceCard
                icon={icon}
                title={title}
                description={description}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ServiceSection;
