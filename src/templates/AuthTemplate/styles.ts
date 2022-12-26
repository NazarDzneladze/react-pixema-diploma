import styled from "styled-components";
import { AuthBackgroundImg } from "assets";
import { Color } from "ui";

const StyledAuthTemplate = styled.div`
  height: 100vh;

  background-image: url(${AuthBackgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${Color.DARK_THEME};
  background-position: top;
`;

export { StyledAuthTemplate };
