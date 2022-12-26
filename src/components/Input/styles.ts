import styled from "styled-components";
import { Color } from "ui";

const StyledInput = styled.input`
  padding-top: 16px;
  padding-bottom: 16px;

  border-radius: 10px;
  background-color: ${Color.GRAPHITE};
  border: 1px solid red;
  color:${Color.WHITE_THEME}
`;

export { StyledInput };
