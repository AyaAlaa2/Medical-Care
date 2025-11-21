// TeamStrategy.jsx
// Responsive section:
// - Desktop: tabbed layout (TeamStrategyDesk)
// - Mobile / tablet: Accordion layout
import React from "react";
import {
  Container,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Alert,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import TeamStrategyDesk from "./TeamStrategyDesk";
import useTeamStrategy from "./useTeamStrategy";

export default function TeamStrategy() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  // Shared state & data for both desktop and mobile
  const { sections, error, emptyContent, index, setIndex } =
    useTeamStrategy();

  // Desktop: show the tabbed version
  if (isDesktop) {
    return (
      <TeamStrategyDesk
        sections={sections}
        error={error}
        emptyContent={emptyContent}
        index={index}
        setIndex={setIndex}
      />
    );
  }

  // Mobile/tablet: accordion version
  if (error) {
    return (
      <Container maxWidth="sm">
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          border: 1,
          borderColor: "divider",
          borderRadius: 1,
        }}
      >
        {sections.map((section, i) => (
          <Accordion
            key={section.id}
            expanded={index === i}
            onChange={() => setIndex(i)}
            disableGutters
          >
            <AccordionSummary>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: 18,
                }}
              >
                {section.label}
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              {index === i && emptyContent ? (
                <Alert severity="warning">
                  Section content is missing or empty.
                </Alert>
              ) : (
                section.body.map((text, j) => (
                  <Typography
                    key={j}
                    sx={{ mb: 1.5, lineHeight: 1.6 }}
                  >
                    {text}
                  </Typography>
                ))
              )}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
}
