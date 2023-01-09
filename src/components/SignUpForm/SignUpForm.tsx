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
  StyledSignUpForm,
  TextFooter,
  Title,
  ErrorMessage,
} from "./styles";
import { app } from "../../firebase";
import {
  getConfirmPasswordValidation,
  getEmailValidation,
  getNameValidation,
  getPasswordValidation,
} from "./signUpValidation";

interface ISignUpFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<ISignUpFormValues>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ISignUpFormValues> = ({ email, password }) => {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    reset();
    navigate(ROUTE.HOME);
  };

  return (
    <StyledSignUpForm onSubmit={handleSubmit(onSubmit)}>
      <Title>Sign Up</Title>
      <FormFields>
        <FieldLabel>
          Name
          <StyledInput placeholder="Your name" {...register("name", getNameValidation())} />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </FieldLabel>
        <FieldLabel>
          Email
          <StyledInput placeholder="Your email" {...register("email", getEmailValidation())} />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </FieldLabel>
        <FieldLabel>
          Password
          <StyledInput
            placeholder="Your password"
            {...register("password", getPasswordValidation())}
          />
          {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
        </FieldLabel>
        <FieldLabel>
          Confirm password
          <StyledInput
            placeholder="Confirm password"
            {...register("confirmPassword", {
              ...getConfirmPasswordValidation(),
              validate: (val: string) => {
                if (watch("password") != val) {
                  return "Your passwords do no match";
                }
              },
            })}
          />
          {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>}
        </FieldLabel>
      </FormFields>
      <FormFooter>
        <Button>Sign Up</Button>
        <TextFooter>
          Already have an account? <Link to={"../" + ROUTE.SIGN_IN}>Sign In</Link>
        </TextFooter>
      </FormFooter>
    </StyledSignUpForm>
  );
};
