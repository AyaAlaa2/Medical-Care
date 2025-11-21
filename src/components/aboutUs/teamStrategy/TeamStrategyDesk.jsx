// TeamStrategyDesk.jsx
// Desktop-only version of "Team Strategy".
// Tabs sit above a bordered content box.
// The active tab has top/left/right borders, and a white bottom border
// that visually covers (overlays) the top border of the content box
// for exactly the width of the tab.
import React from "react";
import {
  Container,
  Tabs,
  Tab,
  Paper,
  Box,
  Typography,
  Alert,
} from "@mui/material";

export default function TeamStrategyDesk({
  sections,
  error,
  emptyContent,
  index,
  setIndex,
}) {
  // If there is no data, show one error and exit
  if (error) {
    return (
      <Container maxWidth="lg">
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      </Container>
    );
  }

  const active = sections[index];

  return (
    <Container maxWidth="lg">
      {/* =============================
          TABS HEADER (Desktop)
         ============================= */}
      <Tabs
        value={index}
        onChange={(_, value) => setIndex(value)}
        centered
        textColor="inherit"              // don't use primary blue
        TabIndicatorProps={{ style: { display: "none" } }} // hide default underline
        sx={{
          // Base style for every tab
          "& .MuiTab-root": {
            textTransform: "none",
            fontWeight: 600,
            minHeight: 0,
            py: 1.5,
            px: 4,
            border: "1px solid transparent",
            borderBottom: "none",
            color: "text.primary", // text is dark/black
          },

          // Active tab:
          // - 3 visible borders (top/left/right)
          // - white bottom border sitting on top of the line under it
          "& .MuiTab-root.Mui-selected": {
            borderColor: "divider",               // top + left + right
            borderBottomColor: "#ffffff",         // white "strip" at bottom
            borderBottomWidth: 1,
            borderBottomStyle: "solid",
            backgroundColor: "#ffffff",
            color: "text.primary",                // ensure it's not blue
            position: "relative",
            zIndex: 2,                            // sit above content box border
          },
        }}
      >
        {sections.map((section) => (
          <Tab
            key={section.id}
            label={section.label}
            disableRipple
          />
        ))}
      </Tabs>

      {/* =============================
          CONTENT BOX UNDER TABS
         ============================= */}
      <Paper elevation={0}>
        <Box
          sx={{
            border: 1,
            borderColor: "divider",
            borderTop: "1px solid",  // full border, but:
            borderTopColor: "divider",
            mt: -1,                  // pull box up so its top border sits behind tab bottom
            p: 3,
            position: "relative",
            zIndex: 1,               // behind the selected tab (which is zIndex: 2)
          }}
        >
          {emptyContent ? (
            <Alert severity="warning">
              Section content is missing or empty.
            </Alert>
          ) : (
            active.body.map((text, idx) => (
              <Typography
                key={idx}
                sx={{ mb: 1.5, lineHeight: 1.6 }}
              >
                {text}
              </Typography>
            ))
          )}
        </Box>
      </Paper>
    </Container>
  );
}
