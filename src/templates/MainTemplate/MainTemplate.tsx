import { useEffect } from "react";
import { StyledMainTemplate } from "./styles";
import { useAppSelector } from "store";
import { SideBar, MainContent } from "components";

export const MainTemplate = () => {
  const { currentTheme } = useAppSelector((state) => state.theme);
  useEffect(() => {
    document.documentElement.setAttribute("theme", currentTheme);
  }, [currentTheme]);

  return (
    <StyledMainTemplate>
      <SideBar />
      <MainContent />
    </StyledMainTemplate>
  );
};
