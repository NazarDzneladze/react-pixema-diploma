import { BurgerIcon, SearchIcon } from "assets";
import { AuthDetails, BurgerMenu, ModalFiltersWindow, PixemaLogo } from "components";
import { useToggle, useWindowSize } from "hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { IParams } from "types/types";
import { BurgerButton, HeaderForm, Search, StyledHeader } from "./styles";
import { memo } from "react";

interface IHeaderProps {
  params?: IParams;
  setParams?: (searchValue: string) => void;
}

interface IFormProps {
  search: string;
}

export const Header = memo(({ setParams }: IHeaderProps) => {
  const { width = 0 } = useWindowSize();
  const { handleSubmit, register } = useForm<IFormProps>();
  const [isOpenMenu, setIsOpenMenu] = useToggle();
  const [isOpenFilters, setIsOpenFilters] = useToggle();

  const onSubmit: SubmitHandler<IFormProps> = ({ search }) => {
    if (setParams) {
      setParams(search);
    }
  };

  return (
    <StyledHeader>
      {width < 1440 && <PixemaLogo />}
      <HeaderForm onSubmit={handleSubmit(onSubmit)}>
        <Search {...register("search")} />
        <SearchIcon onClick={setIsOpenFilters} />
      </HeaderForm>
      {width >= 1440 ? (
        <AuthDetails />
      ) : (
        <BurgerButton onClick={setIsOpenMenu}>
          <BurgerIcon />
        </BurgerButton>
      )}
      {isOpenMenu && <BurgerMenu closeMenu={setIsOpenMenu} />}
      {isOpenFilters && <ModalFiltersWindow toggleModal={setIsOpenFilters} />}
    </StyledHeader>
  );
});
