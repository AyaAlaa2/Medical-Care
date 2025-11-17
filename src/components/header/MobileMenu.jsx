import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";
import { IconButton, Drawer, Box, List } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import HeaderLinks from "./HeaderLinks";
import Links from "./Links";
import Logo from "./Logo";

const Mobilemenu = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width:900px)");

  useEffect(() => {
    if (isDesktop && drawerOpen) {
      setDrawerOpen(false);
    }
  }, [isDesktop, drawerOpen]);

  const handleLinkClick = () => {
    setDrawerOpen(false);
  };

  const drawerList = () => (
    <Box sx={{ width: 300 }} role="presentation">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 1,
        }}
      >
        <Logo onClick={handleLinkClick} />

        <IconButton onClick={() => setDrawerOpen(false)}>
          <CloseIcon />
        </IconButton>
      </Box>

      <List>
        {HeaderLinks.map((item) => (
          <Links
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
        sx={{ display: { xs: "flex", md: "none" }, color: "black" }}
        onClick={() => setDrawerOpen(!drawerOpen)}
      >
        {drawerOpen ? <Box></Box> : <MenuIcon />}
      </IconButton>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        BackdropProps={{
          sx: { mt: "130px" },
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
};
export default Mobilemenu;
