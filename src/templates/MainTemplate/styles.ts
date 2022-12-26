import styled from "styled-components";
import { BurgerIcon, PixemaIcon } from "assets";
import { Input } from "components";
import { Breakpoint, Color } from "ui";

const StyledPixemaIcon = styled(PixemaIcon)`
  place-self: center start;

  path:nth-child(n + 4) {
    fill: ${Color.WHITE_THEME};
  }
`;

const Search = styled(Input)`
  grid-area: search;
`;

const AccountInfo = styled(BurgerIcon)`
  grid-area: account;
  place-self: end;
`;

const StyledMainTemplate = styled.div`
  display: grid;

  background-color: ${Color.DARK_THEME};

  ${Breakpoint.XXS} {
    grid-template-columns: 50% 50%;
    grid-template-areas:
      "logo account"
      "search search"
      "content content";

    padding: 32px 24px 48px;
  }

  ${Breakpoint.MD} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "logo search account"
      "content content content";

    padding: 40px 40px 56px;
  }

  ${Breakpoint.XXL} {
    grid-template-areas:
      "logo search account"
      "nav content content";
  }
`;

export { StyledMainTemplate, AccountInfo, StyledPixemaIcon, Search };
