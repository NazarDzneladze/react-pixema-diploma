import { Input } from "components";
import { StyledHeader, StyledPixemaIcon } from "./styles";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledPixemaIcon />
      <Input />
    </StyledHeader>
  );
};
