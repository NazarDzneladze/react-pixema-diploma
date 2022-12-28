import { CustomNavLink } from "components";
import { ROUTE } from "router";
import { StyledNavigation } from "./styles";

export const Navigation = () => {
  return (
    <StyledNavigation>
      <CustomNavLink to={ROUTE.HOME}>Home</CustomNavLink>
      <CustomNavLink to={ROUTE.TRENDS}>Trends</CustomNavLink>
      <CustomNavLink to={ROUTE.FAVORITES}>Favorites</CustomNavLink>
      <CustomNavLink to={ROUTE.SETTINGS}>Settings</CustomNavLink>
    </StyledNavigation>
  );
};
