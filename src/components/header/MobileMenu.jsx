import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { IconButton, Drawer, Box, List } from "@mui/material";
import { Typography } from "@mui/material";
import HeaderLinks from "./HeaderLinks";
import DropdownMenu from "./DropdownMenu";
import { Link } from "react-router-dom";
export default function Mobilemenu() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  {
    /* handler for link click to close drawer */
  }
  const handleLinkClick = () => {
    setDrawerOpen(false);
  };

  const drawerList = () => (
    <Box sx={{ width: 300 }} role="presentation">
      <Box sx={{ display: "flex", justifyContent: "space-between", p: 1 }}>
        <Box
          component={Link}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <img
            src="/logoo.png"
            alt="Logo"
            loading="lazy"
            style={{ maxHeight: 60, padding: "10px" }}
          />
          <Typography
            variant="h6"
            sx={{
              color: "var(--main-color)",
              fontWeight: "bold",
              fontSize: { xs: 16, md: 22 },
            }}
          >
            Medical Care
          </Typography>
        </Box>
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </Box>

      <List>
        {HeaderLinks.map((item) => (
          <DropdownMenu
            key={item.name}
            item={item}
            isMobile
            onLinkClick={handleLinkClick}
          />
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton
        edge="start"
        color="black"
        sx={{ display: { xs: "flex", md: "none" } }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        BackdropProps={{
          sx: {
            mt: "130px",
          },
          display: { md: "none" },
        }}
        PaperProps={{
          sx: {
            mt: "130px",

            borderTopRightRadius: 12,
          },
        }}
      >
        {drawerList()}
      </Drawer>
    </div>
  );
}
