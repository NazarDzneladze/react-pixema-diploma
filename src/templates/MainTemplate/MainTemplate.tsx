import { useEffect } from "react";
import { StyledMainTemplate } from "./styles";
import { useAppSelector } from "store";
import { Header, Navigation } from "components";
import { Outlet } from "react-router-dom";

export const MainTemplate = () => {
  const { currentTheme } = useAppSelector((state) => state.theme);
  useEffect(() => {
    document.documentElement.setAttribute("theme", currentTheme);
  }, [currentTheme]);

  return (
    <StyledMainTemplate>
      <Header />
      <Navigation />
      <Outlet />
    </StyledMainTemplate>
  );
};
