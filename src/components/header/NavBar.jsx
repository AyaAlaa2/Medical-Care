import React from "react";
import { AppBar, Toolbar, IconButton, Box, Typography } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Mobilemenu from "./Mobilemenu";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const NavBar = () => {
  const icons = [
    { icon: AccountCircleOutlinedIcon, path: "/profile" },
    { icon: FavoriteBorderIcon, path: "/favorites" },
    { icon: ShoppingBagOutlinedIcon, path: "/cart" },
  ];
  return (
    <AppBar
      sx={{
        position: { xs: "sticky", md: "static" },
        backgroundColor: "white",
        height: 80,
        justifyContent: "center",
        zIndex: 1100,
        px: 2,
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          maxWidth: "100vw",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Mobilemenu />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              flexGrow: 1,
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            {/* logo */}
            <Logo />

            {/*  search bar */}
            <Box
              sx={{
                display: { xs: "none", lg: "flex" },
                flexGrow: 1,
                maxWidth: 300,
                ml: 2,
              }}
            >
              <SearchBar />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 1, md: 2 },
          }}
        >
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              flexDirection: "column",
              alignItems: "flex-start",
              mr: 2,
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 500, color: "black" }}
            >
              Need Help?
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: "bold",
                color: "var(--main-color)",
              }}
            >
              Call Us: +123 456 7890
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            {icons.map((icon, i) => (
              <IconButton
                key={i}
                component={Link}
                to={icon.path}
                sx={{
                  p: 0,
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <icon.icon
                  sx={{
                    fontSize: 28,
                    color: "black",
                    transition: "0.2s",
                    "&:hover": {
                      color: "var(--main-color)",
                    },
                  }}
                />
              </IconButton>
            ))}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
