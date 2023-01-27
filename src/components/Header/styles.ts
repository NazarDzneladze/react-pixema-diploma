import styled from "styled-components";
import { StyledInput } from "components/Input/styles";
import { Breakpoint, Color } from "ui";

const StyledHeader = styled.header`
  display: grid;

  ${Breakpoint.XXS} {
    grid-template-columns: 1fr 56px;
    grid-template-rows: repeat(2, 56px);
  }

  ${Breakpoint.MD} {
    grid-template-columns: auto 1fr 56px;
    grid-template-rows: auto;
  }

  ${Breakpoint.XXL} {
    grid-template-columns: 1fr auto;
    column-gap: 40px;
  }
`;

const BurgerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${Color.PRIMARY};
  border-radius: 10px;
  border: none;
`;

const HeaderForm = styled.form`
  display: grid;

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

const Search = styled(StyledInput)`
  place-self: stretch;
`;
export { StyledHeader, Search, HeaderForm, BurgerButton };
