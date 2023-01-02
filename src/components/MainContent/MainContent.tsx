import { useWindowSize } from "hooks";
import { Outlet } from "react-router-dom";
import { BurgerIcon, PixemaIcon, SearchIcon } from "assets";
import { Container, Search, SearchWrapper, StyledMainContent, PixemaIconLink } from "./styles";
import { Button } from "components";
import { ROUTE } from "router";

export const MainContent = () => {
  const { width = 0 } = useWindowSize();

  return (
    <StyledMainContent>
      {width < 1440 && (
        <PixemaIconLink to={ROUTE.HOME}>
          <PixemaIcon />
        </PixemaIconLink>
      )}
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
