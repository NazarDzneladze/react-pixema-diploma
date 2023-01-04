import styled from "styled-components";
import { AuthBackgroundImg } from "assets";
import { Breakpoint, Color } from "ui";

const StyledAuthTemplate = styled.div`
  display: grid;
  /* grid-template-rows: auto 1fr auto; */

  /* min-height: 100vh; */

  background-image: url(${AuthBackgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${Color.DARK_THEME};
  background-position: top;

  ${Breakpoint.XXS} {
    padding: 32px 24px 48px;
  }

  ${Breakpoint.MD} {
    padding: 47px 40px 56px;
  }

  ${Breakpoint.XXL} {
    padding: 43px 62px 63px;
  }
`;

const CopyrightText = styled.p`
  place-self: center;

  color: ${Color.WHITE};
`;

export { StyledAuthTemplate, CopyrightText };
