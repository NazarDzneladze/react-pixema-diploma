import styled from "styled-components";
import { Breakpoint } from "ui";

const StyledNavigation = styled.nav`
  ${Breakpoint.XXS} {
    display: none;
  }

  ${Breakpoint.XXL} {
    display: grid;
    grid-template-rows: repeat(4, auto);
    row-gap: 25px;
  }
`;

export { StyledNavigation };
