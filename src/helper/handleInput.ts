import { FormData, FormErrors } from "../utils/model";
import { validateField } from "../utils/validationSchema";

export const handleInput = (
  event: React.ChangeEvent<HTMLInputElement>,
  setFormData: React.Dispatch<React.SetStateAction<FormData>>,
  touched: Record<string, boolean>,
  setErrors: React.Dispatch<React.SetStateAction<FormErrors>>
) => {
  const name = event.target.name as keyof FormData;
  const value = event.target.value;

  setFormData((prev) => {
    const updated = { ...prev, [name]: value };
    // Validate field on change if it has been touched
    if (touched[name]) {
      const fieldError = validateField(name, value, updated);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: fieldError || undefined,
      }));
    }

    return updated;
  });
};
