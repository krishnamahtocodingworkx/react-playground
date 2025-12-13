import { FormData, FormErrors } from "../utils/model";
import { validateField } from "../utils/validationSchema";

export const handleBlur = (
  event: React.FocusEvent<HTMLInputElement>,
  formData: FormData,
  setTouched: React.Dispatch<React.SetStateAction<Record<string, boolean>>>,
  setErrors: React.Dispatch<React.SetStateAction<FormErrors>>
) => {
  const name = event.target.name as keyof typeof formData;
  const value = event.target.value;
  setTouched((prev) => ({ ...prev, [name]: true }));
  const fieldError = validateField(name, value, formData);
  setErrors((prevErrors) => ({
    ...prevErrors,
    [name]: fieldError || undefined,
  }));
};
