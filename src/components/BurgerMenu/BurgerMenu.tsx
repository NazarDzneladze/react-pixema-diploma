import { HomeIcon, TrendsIcon, FavoritesIcon, SettingsIcon, CloseIcon } from "assets";
import { CustomNavLink } from "components";
import { ROUTE } from "router";
import { BurgerNav, StyledBurgerMenu } from "./styles";

interface IProps {
  closeMenu: () => void;
}

export const BurgerMenu = ({ closeMenu }: IProps) => {
  return (
    <StyledBurgerMenu
      initial={{ x: 150 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 250 }}
    >
      <BurgerNav>
        <CustomNavLink to={ROUTE.HOME}>
          <HomeIcon />
          Home
        </CustomNavLink>
        <CustomNavLink to={ROUTE.HOME + ROUTE.TRENDS}>
          <TrendsIcon />
          Trends
        </CustomNavLink>
        <CustomNavLink to={ROUTE.HOME + ROUTE.FAVORITES}>
          <FavoritesIcon />
          Favorites
        </CustomNavLink>
        <CustomNavLink to={ROUTE.HOME + ROUTE.SETTINGS}>
          <SettingsIcon />
          Settings
        </CustomNavLink>
      </BurgerNav>
      <CloseIcon onClick={closeMenu} />
    </StyledBurgerMenu>
  );
};
