import { Navigation } from "components";
import { CopyrightText, StyledPixemaIcon, StyledSideBar } from "./styles";

export const SideBar = () => {
  return (
    <StyledSideBar>
      <StyledPixemaIcon />
      <Navigation />
      <CopyrightText>© All Rights Reserved</CopyrightText>
    </StyledSideBar>
  );
};
