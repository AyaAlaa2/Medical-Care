import React from "react";
import useTeamStrategy from "./useTeamStrategy";
import {
  Container,
  Tabs,
  Tab,
  Paper,
  Box,
  Typography,
  Alert,
} from "@mui/material";

const TeamStrategyDesk = ({ index, onChange, data }) => {
  const { sections, error, emptyContent, selectedTab, setSelectedTab } =
    useTeamStrategy("desktop");
  if (error) return <Alert severity="error">{error}</Alert>;
  const active = sections[selectedTab];

  return (
  <Container maxWidth="lg">
      <Tabs
        value={selectedTab}
        onChange={(e, i) => setSelectedTab(i)}
        centered
        sx={{
          ".MuiTabs-indicator": { display: "none" },
        }}
      >
        {sections.map((section, i) => (
          <Tab
            key={section.id}
            label={section.label}
            sx={{
              fontWeight: 600,
              fontSize: 16,
              color: "black",
              px: 3,
              border: "1px solid #e0e0e0",
              borderBottom: i === selectedTab ? "none" : "1px solid #e0e0e0",
              background: i === selectedTab ? "#fff" : "inherit",
              minHeight: 0,
              zIndex: 2,
              "&.Mui-selected": {
                color: "var(--main-color)",
              },
            }}
             disableRipple
          />
        ))}
      </Tabs>

      <Paper 
        elevation={0} 
        sx={{ bgcolor: "transparent" }}
      >
        <Box 
          sx={{ 
            border: 1, 
            borderColor: "divider", 
            bgcolor: "#fff",
            mt: "-1px",
            p: 2,
          }}>
         {emptyContent ? (
            <Alert severity="error">Section content is missing or empty.</Alert>
          ) : (
            active.body.map((text, idx) => (
              <Typography key={idx} sx={{ lineHeight: 1.5, p: 0.5 }}>
                {text}
              </Typography>
            )))}
        </Box>
      </Paper>
    </Container>
  );
};
export default TeamStrategyDesk;
