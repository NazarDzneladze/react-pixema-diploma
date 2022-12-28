import styled from "styled-components";
import { PixemaIcon } from "assets";
import { Color } from "ui";

const StyledPixemaIcon = styled(PixemaIcon)`
  place-self: center start;

  path:nth-child(n + 4) {
    fill: ${Color.WHITE_THEME};
  }
`;

const CopyrightText = styled.p`
  color: ${Color.LIGHT};
`;

const StyledSideBar = styled.div`
  display: grid;
  grid-template-rows: 56px 1fr auto;

  nav {
    place-self: start;
  }
`;

export { StyledSideBar, StyledPixemaIcon, CopyrightText };
