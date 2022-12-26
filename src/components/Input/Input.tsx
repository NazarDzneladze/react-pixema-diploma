import { StyledInput } from "./styles";

interface IProps {
  placeholder: string;
}

export const Input = (props: IProps) => {
  return <StyledInput {...props} />;
};
