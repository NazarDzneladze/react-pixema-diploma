import { useWindowSize } from "hooks";
import { Outlet } from "react-router-dom";
import { BurgerIcon, SearchIcon } from "assets";
import { Container, Search, SearchWrapper, StyledMainContent, StyledPixemaIcon } from "./styles";
import { Button } from "components/Button/Button";

export const MainContent = () => {
  const { width = 0 } = useWindowSize();

  return (
    <StyledMainContent>
      {width < 1440 && <StyledPixemaIcon />}
      <SearchWrapper>
        <Search placeholder="Search" />
        <Button $searchStyle>
          <SearchIcon />
        </Button>
      </SearchWrapper>
      <BurgerIcon />
      <Container>
        <Outlet />
      </Container>
    </StyledMainContent>
  );
};
