import { FormFieldName } from "config";

export const getFormValidation = (fieldName: FormFieldName) => {
  switch (fieldName) {
    case FormFieldName.NAME:
      return {
        required: "Name is required. Please try again",
        pattern: {
          value: /^[аa-яzАA-ЯZ\s]*$/,
          message: "Only latters. Please try again.",
        },
      };
    case FormFieldName.EMAIL:
      return {
        required: {
          value: true,
          message: "Email is required. Please try again",
        },
      };
    case FormFieldName.PASSWORD:
      return {
        required: "Password is required. Please try again",
        minLength: {
          value: 6,
          message: "Minimum 6 characters",
        },
      };
    case FormFieldName.CONFIRM_PASSWORD:
      return {
        required: "Please confirm password",
        minLength: {
          value: 6,
          message: "Minimum 6 characters",
        },
      };
  }
};
