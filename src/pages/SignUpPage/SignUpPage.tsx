import { Button } from "components";
import { StyledInput } from "components/Input/styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ROUTE } from "router";
import {
  FieldLabel,
  FormFields,
  FormFooter,
  SignUpForm,
  TextFooter,
  Title,
  ErrorMessage,
  StyledSignUpPage,
} from "./styles";
import { selectAccount, signUp, useAppDispatch, useAppSelector } from "store";
import { getFormValidation } from "utils";
import { FormFieldName } from "config";
import { useState } from "react";

interface ISignUpFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    reset,
  } = useForm<ISignUpFormValues>({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const dispath = useAppDispatch();
  const [signUpError, setSignUpError] = useState<null | string>(null);

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ISignUpFormValues> = ({ email, password, name }) => {
    const userInfo = {
      name: name,
      email: email,
      isAuth: true,
    };

    dispath(signUp({ email, password, name }))
      .then(() => {
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        navigate(ROUTE.HOME);
      })
      .catch((error) => setSignUpError(error));
  };

  return (
    <StyledSignUpPage>
      <SignUpForm onSubmit={handleSubmit(onSubmit)}>
        <Title>Sign Up</Title>
        <FormFields>
          <FieldLabel>
            Name
            <StyledInput
              placeholder="Your name"
              {...register("name", getFormValidation(FormFieldName.NAME))}
            />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </FieldLabel>
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
          <FieldLabel>
            Confirm password
            <StyledInput
              placeholder="Confirm password"
              {...register("confirmPassword", {
                ...getFormValidation(FormFieldName.CONFIRM_PASSWORD),
                validate: (val: string) => {
                  if (watch("password") != val) {
                    return "Your passwords do no match";
                  }
                },
              })}
            />
            {errors.confirmPassword && (
              <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
            )}
          </FieldLabel>
          {signUpError && <ErrorMessage>{signUpError}</ErrorMessage>}
        </FormFields>
        <FormFooter>
          <Button type="submit">Sign Up</Button>
          <TextFooter>
            Already have an account? <Link to={"../" + ROUTE.SIGN_IN}>Sign In</Link>
          </TextFooter>
        </FormFooter>
      </SignUpForm>
    </StyledSignUpPage>
  );
};
