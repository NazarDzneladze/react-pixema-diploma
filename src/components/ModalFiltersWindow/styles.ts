import styled from "styled-components";
import { Color } from "ui";

const StyledModalFiltersWindow = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  width: clamp(320px, 100%, 518px);
  padding: 40px;

  background-color: ${Color.DARK};
`;

export { StyledModalFiltersWindow };
