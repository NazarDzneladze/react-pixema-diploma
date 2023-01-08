import { useEffect } from "react";
import { StyledMainTemplate } from "./styles";
import { useAppSelector } from "store";
import { SideBar } from "components";
import { Outlet } from "react-router-dom";

export const MainTemplate = () => {
  const { currentTheme } = useAppSelector((state) => state.theme);
  useEffect(() => {
    document.documentElement.setAttribute("theme", currentTheme);
  }, [currentTheme]);

  return (
    <StyledMainTemplate>
      <SideBar />
      <Outlet />
    </StyledMainTemplate>
  );
};
