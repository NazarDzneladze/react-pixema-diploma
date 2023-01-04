import { Button } from "components";
import { StyledInput } from "components/Input/styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ROUTE } from "router";
import { FieldLabel, FormFields, FormFooter, StyledSignUpForm, TextFooter, Title } from "./styles";

interface IFormValues {
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
  } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    console.log(data);
  };

  return (
    <StyledSignUpForm onSubmit={handleSubmit(onSubmit)}>
      <Title>Sign Up</Title>
      <FormFields>
        <FieldLabel>
          Name
          <StyledInput placeholder="Your name" {...register("name")} />
        </FieldLabel>
        <FieldLabel>
          Email
          <StyledInput placeholder="Your email" {...register("email")} />
        </FieldLabel>
        <FieldLabel>
          Password
          <StyledInput
            placeholder="Your password"
            {...register("password", {
              required: true,
            })}
          />
        </FieldLabel>
        <FieldLabel>
          Confirm password
          <StyledInput
            placeholder="Confirm  password"
            {...register("confirmPassword", {
              required: "vvedi",
              validate: (val: string) => {
                if (watch("password") != val) {
                  return "Your passwords do no match";
                }
              },
            })}
          />
        </FieldLabel>
      </FormFields>
      <FormFooter>
        <Button>Sign Up</Button>
        <TextFooter>
          Already have an account? <Link to={ROUTE.HOME}>Sign In</Link>
        </TextFooter>
      </FormFooter>
    </StyledSignUpForm>
  );
};
