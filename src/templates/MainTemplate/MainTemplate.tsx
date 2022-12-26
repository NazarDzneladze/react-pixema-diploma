import { useEffect } from "react";
import { AccountInfo, Search, StyledMainTemplate, StyledPixemaIcon } from "./styles";
import { useAppSelector } from "store";
import { Navigation } from "components";
import { Outlet } from "react-router-dom";

export const MainTemplate = () => {
  const { currentTheme } = useAppSelector((state) => state.theme);
  useEffect(() => {
    document.documentElement.setAttribute("theme", currentTheme);
  }, [currentTheme]);

  return (
    <StyledMainTemplate>
      <StyledPixemaIcon />
      <Search placeholder="Search" />
      <AccountInfo />
      <Navigation />
      <Outlet />
    </StyledMainTemplate>
  );
};
