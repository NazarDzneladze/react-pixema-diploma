export const getNameValidation = () => {
  return {
    required: "Name is required. Please try again",
    pattern: {
      value: /^[аa-яzАA-ЯZ\s]*$/,
      message: "Only latters. Please try again.",
    },
  };
};

export const getEmailValidation = () => {
  return {
    required: "Email is required. Please try again",
    pattern: {
      value: /^(.+)@(.+)$/,
      message: "Email must contain the @ symbol",
    },
  };
};

export const getPasswordValidation = () => {
  return {
    required: "Password is required. Please try again",
    minLength: {
      value: 6,
      message: "Minimum 6 characters",
    },
  };
};

export const getConfirmPasswordValidation = () => {
  return {
    required: "Please confirm password",
    minLength: {
      value: 6,
      message: "Minimum 6 characters",
    },
  };
};
