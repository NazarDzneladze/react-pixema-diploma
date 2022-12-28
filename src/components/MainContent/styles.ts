import styled from "styled-components";
import { PixemaIcon } from "assets";
import { Input } from "components";
import { Breakpoint, Color } from "ui";

const StyledPixemaIcon = styled(PixemaIcon)`
  place-self: center start;

  path:nth-child(n + 4) {
    fill: ${Color.WHITE_THEME};
  }
`;

const Search = styled(Input)`
  ${Breakpoint.XXS} {
    grid-column: 1 / span 2;
    grid-row: 2 / 3;
  }

  ${Breakpoint.MD} {
    grid-column: 2 / 3;
    grid-row: 1/ 2;
  }

  ${Breakpoint.XXL} {
    grid-column: 1 / 2;
  }
`;

const Conteiner = styled.div`
  grid-column: span 2;

  ${Breakpoint.MD} {
    grid-column: span 3;
  }
`;

const StyledMainContent = styled.div`
  display: grid;

  ${Breakpoint.XXS} {
    grid-template-columns: 50% 50%;
    grid-template-rows: auto auto 1fr;
  }

  ${Breakpoint.MD} {
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto 1fr;
  }

  ${Breakpoint.XXL} {
    grid-template-columns: 1fr auto;
    grid-template-rows: auto 1fr;
  }
`;

export { StyledMainContent, StyledPixemaIcon, Conteiner, Search };
