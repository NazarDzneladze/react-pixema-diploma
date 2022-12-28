import { Header } from "components";
import { Outlet } from "react-router-dom";
import { StyledMainContent } from "./styles";

export const MainContent = () => {
  return (
    <StyledMainContent>
      <Header />
      <Outlet />
    </StyledMainContent>
  );
};
