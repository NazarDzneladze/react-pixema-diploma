import styled from "styled-components";
import { Breakpoint, Color } from "ui";
import { Link } from "react-router-dom";

const PixemaIconLink = styled(Link)`
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

  ${Breakpoint.XXS} {
    row-gap: 56px;
  }
`;

export { StyledSideBar, PixemaIconLink, CopyrightText };
