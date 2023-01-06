import styled from "styled-components";
import { Breakpoint, Color } from "ui";

const StyledSignUpForm = styled.form`
  place-self: center;

  display: grid;
  grid-template-rows: auto 1fr auto auto;
  row-gap: 40px;

  width: clamp(272px, 100%, 574px);

  background-color: ${Color.DARK};
  border-radius: 10px;
  color: white;

  ${Breakpoint.XXS} {
    padding: 24px;
  }

  ${Breakpoint.MD} {
    padding: 40px;
  }
`;

const Title = styled.h3`
  place-self: center start;
`;

const FormFields = styled.div`
  display: grid;
  grid-template-rows: repeat(4, auto);
  row-gap: 24px;
`;

const FieldLabel = styled.label`
  display: grid;
  grid-template-rows: auto 56px;
  row-gap: 8px;
`;

const FormFooter = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  row-gap: 32px;
`;

const TextFooter = styled.p`
  place-self: center;

  a {
    color: ${Color.PRIMARY};
  }
`;

const ErrorMessage = styled.span`
  color: red;
`;
export { StyledSignUpForm, Title, FormFields, FieldLabel, TextFooter, FormFooter, ErrorMessage };
