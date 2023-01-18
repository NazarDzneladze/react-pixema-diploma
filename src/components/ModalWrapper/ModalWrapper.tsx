import { ReactNode } from "react";
import { StyledModalWrapper } from "./styles";

interface IProps {
  children: ReactNode;
}

export const ModalWrapper = ({ children }: IProps) => {
  return <StyledModalWrapper>{children}</StyledModalWrapper>;
};
