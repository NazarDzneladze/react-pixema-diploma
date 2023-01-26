import styled from "styled-components";
import { Breakpoint } from "ui";

const StyledHomePage = styled.div`
  display: grid;
  grid-template-rows: 56px 1fr;

  ${Breakpoint.XXS} {
    grid-template-rows: auto 1fr;
  }

  ${Breakpoint.MD} {
    grid-template-rows: 56px 1fr;
  }
`;

const ErrorText = styled.span`
  place-self: center;

  font-size: 54px;

  color: red;
`;

export { StyledHomePage, ErrorText };
