import styled from "styled-components";
import { StyledInput } from "components/Input/styles";
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
    column-gap: 40px;
  }
`;

const Search = styled(StyledInput)`
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
