import styled from "styled-components";
import { Breakpoint } from "ui";

const StyledHeader = styled.header`
  display: grid;

  ${Breakpoint.XXS} {
    grid-template-columns: 1fr auto;
    grid-template-rows: auto 56px;
  }

  ${Breakpoint.MD} {
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto;
  }

  ${Breakpoint.XXL} {
    grid-template-columns: 1fr auto;
  }
`;

const Search = styled.input`
  border: 1px solid green;

  ${Breakpoint.XXS} {
    grid-column: span 2;
    grid-row: 2/3;
  }

  ${Breakpoint.MD} {
    grid-column: 2/3;
    grid-row: 1;
  }

  ${Breakpoint.XXL} {
    grid-column: 1/2;
  }
`;
export { StyledHeader, Search };
