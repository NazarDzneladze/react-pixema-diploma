import styled from "styled-components";
import { PixemaIcon } from "assets";
import { Color } from "ui";

const StyledHeader = styled.header`
  grid-area: header;
  display: grid;
`;

const StyledPixemaIcon = styled(PixemaIcon)`
  width: 100px;
  height: 100px;

  path:nth-child(n + 4) {
    fill: ${Color.WHITE_THEME};
  }
`;

export { StyledHeader, StyledPixemaIcon };
