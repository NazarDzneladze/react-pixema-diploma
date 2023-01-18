import { BurgerIcon } from "assets";
import { AuthDetails, PixemaLogo } from "components";
import { useWindowSize } from "hooks";
import { useForm } from "react-hook-form";
import { Search, StyledHeader } from "./styles";

export const Header = () => {
  const { width = 0 } = useWindowSize();
  const { register, watch } = useForm();

  console.log(watch("search"));

  return (
    <StyledHeader>
      {width < 1440 && <PixemaLogo />}
      <Search placeholder="Search" {...register("search")} />
      {width >= 1440 ? <AuthDetails /> : <BurgerIcon />}
    </StyledHeader>
  );
};
