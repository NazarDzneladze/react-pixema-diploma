import styled from "styled-components";
import { PixemaIcon } from "assets";
import { Button, Input } from "components";
import { Breakpoint, Color } from "ui";

const StyledMainContent = styled.div`
  display: grid;

  ${Breakpoint.XXS} {
    grid-template-columns: 1fr auto;
    grid-template-rows: auto 56px 1fr;
  }

  ${Breakpoint.MD} {
    column-gap: 32px;
    grid-template-columns: 208px 1fr auto;
    grid-template-rows: auto 1fr;
  }

  ${Breakpoint.XXL} {
    grid-template-columns: 1fr auto;
    grid-template-rows: auto 1fr;
  }
`;

const StyledPixemaIcon = styled(PixemaIcon)`
  place-self: center start;

  path:nth-child(n + 4) {
    fill: ${Color.WHITE_THEME};
  }
`;

const Search = styled(Input)`
  width: 100%;
  height: 100%;
  padding: 16px 50px 16px 20px;
`;

const Container = styled.div`
  grid-column: span 2;

  ${Breakpoint.MD} {
    grid-column: span 3;
  }
`;

const SearchWrapper = styled.div`
  position: relative;

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

export { StyledMainContent, StyledPixemaIcon, Container, Search, SearchWrapper };
