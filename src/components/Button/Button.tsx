import { StyledButton } from "./styles";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  $searchStyle?: boolean;
  onClick?: () => {};
}

export const Button = ({ children, $searchStyle, onClick }: IProps) => {
  return (
    <StyledButton $searchStyle={$searchStyle} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
