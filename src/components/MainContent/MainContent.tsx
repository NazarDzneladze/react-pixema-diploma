import { BurgerIcon } from "assets";
import { useWindowSize } from "hooks";
import { Outlet } from "react-router-dom";
import { Conteiner, Search, StyledMainContent, StyledPixemaIcon } from "./styles";

export const MainContent = () => {
  const { width = 0 } = useWindowSize();
  return (
    <StyledMainContent>
      {width < 1440 && <StyledPixemaIcon />}
      <Search placeholder="Search" />
      <BurgerIcon />
      <Conteiner>
        <Outlet />
      </Conteiner>
    </StyledMainContent>
  );
};
