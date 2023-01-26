import { Button } from "components";
import { StyledInput } from "components/Input/styles";
import { FormFieldName } from "config";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { useAppDispatch, useAppSelector, selectAccount } from "store";
import { getFormValidation } from "utils";
import {
  ErrorMessage,
  FieldLabel,
  FormFields,
  FormFooter,
  SignInForm,
  StyledSignInPage,
  TextFooter,
  Title,
} from "./styles";

interface ISignInFormValues {
  email: string;
  password: string;
}

export const SignInPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    reset,
  } = useForm<ISignInFormValues>({
    mode: "onBlur",
    defaultValues: {
      email: "",
    },
  });
  const dispath = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ISignInFormValues> = ({ email, password }) => {
    console.log(password);
    console.log(email);
  };
  return (
    <StyledSignInPage>
      <SignInForm onSubmit={handleSubmit(onSubmit)}>
        <Title>Sign In</Title>
        <FormFields>
          <FieldLabel>
            Email
            <StyledInput
              placeholder="Your email"
              type="email"
              {...register("email", getFormValidation(FormFieldName.EMAIL))}
            />
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          </FieldLabel>
          <FieldLabel>
            Password
            <StyledInput
              placeholder="Your password"
              {...register("password", getFormValidation(FormFieldName.PASSWORD))}
            />
            {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
          </FieldLabel>
        </FormFields>
        <FormFooter>
          <Button type="submit">Sign Up</Button>
          <TextFooter>
            Don’t have an account? <Link to={"../" + ROUTE.SIGN_UP}>Sign Up</Link>
          </TextFooter>
        </FormFooter>
      </SignInForm>
    </StyledSignInPage>
  );
};
