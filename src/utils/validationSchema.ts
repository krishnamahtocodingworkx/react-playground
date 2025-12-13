import { nameRegExp, emailRegExp, passRegExp } from "./validations";
import { FormErrors, FormData } from "./model";

export const validateForm = (formData: FormData): FormErrors => {
  const errors: FormErrors = {};

  // Validate username
  if (!formData.username.trim()) {
    errors.username = "Username is required";
  } else if (
    !nameRegExp.test(formData.username) ||
    formData.username.length < 3 ||
    formData.username.length > 20
  ) {
    errors.username =
      "Username must be 3-20 characters and contain only letters and spaces";
  }

  // Validate email
  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!emailRegExp.test(formData.email)) {
    errors.email = "Please enter a valid email address";
  }

  // Validate password
  if (!formData.password) {
    errors.password = "Password is required";
  } else if (!passRegExp.test(formData.password)) {
    errors.password =
      "Password must be 8-40 characters with at least 1 uppercase, 1 lowercase, 1 number, and 1 special character";
  }

  // Validate confirm password
  if (!formData.confirm_password) {
    errors.confirm_password = "Please confirm your password";
  } else if (formData.password !== formData.confirm_password) {
    errors.confirm_password = "Passwords do not match";
  }

  return errors;
};

export const validateField = (
  name: keyof FormData,
  value: string,
  formData?: FormData
): string => {
  switch (name) {
    case "username":
      if (!value.trim()) return "Username is required";
      if (!nameRegExp.test(value))
        return "Username must be 3-20 characters and contain only letters and spaces";
      return "";

    case "email":
      if (!value.trim()) return "Email is required";
      if (!emailRegExp.test(value)) return "Please enter a valid email address";
      return "";

    case "password":
      if (!value) return "Password is required";
      if (!passRegExp.test(value))
        return "Password must be 8-40 characters with at least 1 uppercase, 1 lowercase, 1 number, and 1 special character";
      return "";

    case "confirm_password":
      if (!value) return "Please confirm your password";
      if (formData && value !== formData.password)
        return "Passwords do not match";
      return "";

    default:
      return "";
  }
};
