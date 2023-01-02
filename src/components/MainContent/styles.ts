import styled from "styled-components";
import { Input } from "components";
import { Breakpoint, Color } from "ui";
import { Link } from "react-router-dom";

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
	column-gap: 42px;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto 1fr;
  }
`;

const PixemaIconLink = styled(Link)`
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

  ${Breakpoint.XXL}{
	grid-column: span 2;
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

export { StyledMainContent, PixemaIconLink, Container, Search, SearchWrapper };
