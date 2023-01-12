import { toggleTheme, useAppDispatch, useAppSelector } from "store";
import { StyledThemeToggler, ToggleInput } from "./styles";

export const ThemeToggler = () => {
  const dispatch = useAppDispatch();
  const { currentTheme } = useAppSelector((store) => store.theme);

  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <StyledThemeToggler onClick={handleTheme}>
      <ToggleInput type="checkbox" checked={currentTheme === "light" ? false : true} />
    </StyledThemeToggler>
  );
};
