import { useState } from "react";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import DesktopLink from "./DesktopLinks";
import MobileLinks from "./MobileLinks";
export default function DropdownMenu({ item, isMobile, onLinkClick }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMobile, setOpenMobile] = useState(false);

  const hasSubLinks = item.subLinks && item.subLinks.length > 0;

  const baseTextStyle = {
    color: "black",
    fontWeight: "bold",
    fontSize: "1rem",
    textTransform: "none",
    textDecoration: "none",
    fontFamily: "inherit",
    "&:hover": { color: "var(--main-color)" },
  };

  const handleOpen = (event) =>
    isMobile
      ? setOpenMobile((prev) => !prev)
      : setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  if (!hasSubLinks) {
    return (
      <Button
        component={Link}
        to={item.path}
        onClick={() => isMobile && onLinkClick?.()}
        sx={{
          ...baseTextStyle,
          padding: "6px 12px",
          ...(isMobile && { justifyContent: "flex-start", width: "100%" }),
        }}
      >
        <Typography sx={{ ...baseTextStyle }}>{item.name}</Typography>
      </Button>
    );
  }

  if (isMobile) {
    return (
      <>
        <MobileLinks
          handleOpen={handleOpen}
          baseTextStyle={baseTextStyle}
          item={item}
          openMobile={openMobile}
          onLinkClick={onLinkClick}
        />
      </>
    );
  }

  return (
    <>
      <DesktopLink
        handleClose={handleClose}
        handleOpen={handleOpen}
        baseTextStyle={baseTextStyle}
        item={item}
        anchorEl={anchorEl}
      />
    </>
  );
}
