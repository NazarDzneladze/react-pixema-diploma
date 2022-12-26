import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "store";
import { StyledAuthTemplate } from "./styles";

export const AuthTemplate = () => {
  const { currentTheme } = useAppSelector((state) => state.theme);
  useEffect(() => {
    document.documentElement.setAttribute("theme", currentTheme);
  }, [currentTheme]);

  return (
    <StyledAuthTemplate>
      <Outlet />
    </StyledAuthTemplate>
  );
};
