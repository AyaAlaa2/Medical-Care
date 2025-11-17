import { useState } from "react";
import teamData from "./teamData";

const useTeamStrategy = (viewType = "desktop") => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [expandedPanel, setExpandedPanel] = useState(0);
  const sections = Array.isArray(teamData) ? teamData : [];
  let error = "";
  if (sections.length === 0) error = "No team sections available.";
  function isEmpty(body) {
    return !Array.isArray(body) || body.every((text) => !text.trim());
  }
  let emptyContent = false;
  if (viewType === "desktop" && sections.length)
    emptyContent = isEmpty(sections[selectedTab]?.body);
  if (viewType === "mobile" && sections.length)
    emptyContent = isEmpty(sections[expandedPanel]?.body);
  return {
    sections,
    error,
    emptyContent,
    selectedTab,
    setSelectedTab,
    expandedPanel,
    setExpandedPanel,
  };
};
export default useTeamStrategy;
