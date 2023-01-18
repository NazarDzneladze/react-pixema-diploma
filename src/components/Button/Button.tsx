import { StyledButton } from "./styles";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps {
  children: ReactNode;
  $searchStyle?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: () => void;
}

export const Button = ({ children, $searchStyle, onClick, type = "submit" }: IProps) => {
  return (
    <StyledButton $searchStyle={$searchStyle} onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
};
