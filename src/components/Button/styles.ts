import styled, { css } from "styled-components";

interface IProps {
  $searchStyle?: boolean;
}

const StyledButton = styled.button<IProps>`
  background: none;

  ${({ $searchStyle }) =>
    $searchStyle &&
    css`
      position: absolute;
      top: 20px;
      right: 19px;

      background: none;
      border: none;
    `}
`;

export { StyledButton };
