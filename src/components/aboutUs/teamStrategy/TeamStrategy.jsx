import React from "react";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AboutTabsMobile from "./TeamStrategyMobile";
import AboutTabsDesktop from "./TeamStrategyDesk";
import data from "./teamStrategy/teamData";

export default function AboutTabs() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const [index, setIndex] = React.useState(0);

  return isDesktop ? (
    <AboutTabsDesktop index={index} onChange={setIndex} data={data} />
  ) : (
    <AboutTabsMobile index={index} onChange={setIndex} data={data} />
  );
}
