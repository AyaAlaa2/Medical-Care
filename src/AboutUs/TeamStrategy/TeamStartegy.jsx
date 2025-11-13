import React from "react";
import useTeamStrategy from "./useTeamStrategy";
import { Container,Box,  Accordion,  AccordionSummary, AccordionDetails,Typography,Alert,} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import TeamStrategyDesk from "./TeamStrategyDesk";
export default function TeamStrategy() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const { sections, error, emptyContent, expandedPanel, setExpandedPanel } =
    useTeamStrategy("mobile");
  if (isDesktop) return <TeamStrategyDesk />;
  if (error) return <Alert severity="error">{error}</Alert>;
  return (
    <Container maxWidth="sm">
      <Box sx={{ border: 1, borderColor: "divider", borderRadius: 1 }}>
        {sections.map((section, idx) => (
          <Accordion
            key={section.id}
            elevation={0}
            disableGutters
            square
            expanded={expandedPanel === idx}
            onChange={() => setExpandedPanel(idx)}
          >
            <AccordionSummary
              sx={{
                px: 2,
                py: 1.25,
                fontWeight: 700,
                fontSize: 18,
                color: "black",
              }}
            >
              {section.label}
            </AccordionSummary>
            <AccordionDetails
              sx={{
                pt: 0,
                px: 2,
                pb: 2,
                borderTop: "1px solid",
                borderColor: "divider",
              }}
            >
              {expandedPanel === idx && emptyContent ? (
                <Alert severity="error">
                  Section content is missing or empty.
                </Alert>
              ) : (
                section.body.map((text, tidx) => (
                  <Typography key={tidx} sx={{ lineHeight: 1.9 }}>
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
