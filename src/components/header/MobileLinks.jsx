import {
  ListItemButton,
  ListItemText,
  Collapse,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function MobileLinks({
  handleOpen,
  baseTextStyle,
  item,
  openMobile,
  onLinkClick,
}) {
  return (
    <>
      <ListItemButton
        onClick={handleOpen}
        sx={{ ...baseTextStyle, justifyContent: "flex-start", width: "100%" }}
      >
        <ListItemText
          primary={
            <Typography sx={{ ...baseTextStyle }}>{item.name}</Typography>
          }
        />
        {openMobile ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItemButton>

      <Collapse in={openMobile} timeout="auto" unmountOnExit>
        {item.subLinks.map((sub) => (
          <ListItemButton
            key={sub.name}
            component={Link}
            to={sub.path}
            onClick={() => onLinkClick?.()}
            sx={{
              ...baseTextStyle,
              pl: 4,
              justifyContent: "flex-start",
              width: "100%",
            }}
          >
            <Typography sx={{ ...baseTextStyle }}>{sub.name}</Typography>
          </ListItemButton>
        ))}
      </Collapse>
    </>
  );
}
