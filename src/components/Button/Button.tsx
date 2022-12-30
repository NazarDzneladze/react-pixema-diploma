import { StyledButton } from "./styles";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  $searchStyle?: boolean;
}

export const Button = ({ children, $searchStyle }: IProps) => {
  return <StyledButton $searchStyle={$searchStyle}>{children}</StyledButton>;
};
