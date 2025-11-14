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
    <Container maxWidth="lg" sx={{ my: { xs: 3, md: 8 } }}>
      <Box sx={{ display: "flex", justifyContent: "center", mb: -1 }}>
        <Tabs
          value={index}
          onChange={(_, v) => onChange(v)}
          sx={{
            "& .MuiTabs-indicator": { display: "none" },
            "& .MuiTabs-flexContainer": { gap: 2, justifyContent: "center" },
            "& .MuiTab-root": {
              textTransform: "none",
              fontWeight: 800,
              fontSize: { xs: 14, md: 18 },
              color: "black",
              px: 3,
              border: "1px solid transparent",
              minHeight: 0,
            },
            "& .Mui-selected": {
              color: "black",
              background: "#fff",
              borderColor: "divider",
              borderBottomColor: "#fff",
              mb: "-1px",
            },
          }}
        >
          {data.map((s) => (
            <Tab key={s.id} label={s.label} disableRipple />
          ))}
        </Tabs>
      </Box>

      {/* Content */}
      <Paper elevation={0} sx={{ bgcolor: "transparent" }}>
        <Box sx={{ border: 1, borderColor: "divider", p: { xs: 2, md: 4 } }}>
          {Array.isArray(body) ? (
            body.map((p, i) => (
              <Typography
                key={i}
                sx={{ lineHeight: 1.9, mb: i < body.length - 1 ? 2 : 0 }}
              >
                {p}
              </Typography>
            ))
          ) : (
            <Typography sx={{ lineHeight: 1.9 }}>{body}</Typography>
          )}
        </Box>
      </Paper>
    </Container>
  );
};
export default TeamStrategyDesk;
