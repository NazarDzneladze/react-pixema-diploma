import { PixemaIcon } from "assets";
import { Navigation } from "components";
import { ROUTE } from "router";
import { CopyrightText, PixemaIconLink, StyledSideBar } from "./styles";

export const SideBar = () => {
  return (
    <StyledSideBar>
      <PixemaIconLink to={ROUTE.HOME}>
        <PixemaIcon />
      </PixemaIconLink>
      <Navigation />
      <CopyrightText>© All Rights Reserved</CopyrightText>
    </StyledSideBar>
  );
};
