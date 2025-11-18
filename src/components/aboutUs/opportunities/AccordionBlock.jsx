import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionBlock = ({ accordionItems }) => {
  const [expandedIdx, setExpandedIdx] = useState(false);

  const handleChange = (idx) => (event, isExpanded) => {
    setExpandedIdx(isExpanded ? idx : false);
  };

  return accordionItems?.map((item, idx) => (
    <Accordion
      key={idx}
      expanded={expandedIdx === idx}
      onChange={handleChange(idx)}
      sx={{
        background: "transparent",
        boxShadow: "none",
        mb: 2,
        borderRadius: "12px",
        "&:before": { display: "none" },
        "& .MuiAccordionSummary-root": {
          background: "#fff",
          fontWeight: "bold",
          px: 2,
          borderRadius: "12px",
        },
        "& .MuiAccordionDetails-root": {
          background: "transparent",
          borderRadius: "0 0 12px 12px",
          px: 3,
          py: 2,
          m: 0,
          boxShadow: "none",
        },
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          {item.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{item.content}</Typography>
      </AccordionDetails>
    </Accordion>
  ));
};
export default AccordionBlock;