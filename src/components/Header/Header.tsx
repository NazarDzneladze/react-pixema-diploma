import { BurgerIcon } from "assets";
import { PixemaLogo } from "components";
import { useWindowSize } from "hooks";
import { Search, StyledHeader } from "./styles";

export const Header = () => {
  const { width = 0 } = useWindowSize();
  return (
    <StyledHeader>
      {width < 1440 && <PixemaLogo />}
      <Search placeholder="Search" />
      <BurgerIcon />
    </StyledHeader>
  );
};
