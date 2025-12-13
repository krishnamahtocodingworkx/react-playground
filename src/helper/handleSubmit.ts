import { FormData, FormErrors } from "../utils/model";
import { validateForm } from "../utils/validationSchema";
import { initialFormData } from "../utils/initialValues";

export const handleSubmit = (
  event: React.FormEvent<HTMLFormElement>,
  formData: FormData,
  setTouched: React.Dispatch<React.SetStateAction<Record<string, boolean>>>,
  setErrors: React.Dispatch<React.SetStateAction<FormErrors>>,
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
) => {
  event.preventDefault();
  // Mark all fields as touched
  const allTouched = Object.keys(formData).reduce((acc, key) => {
    acc[key] = true;
    return acc;
  }, {} as Record<string, boolean>);
  setTouched(allTouched);
  // Validate entire form
  const formErrors = validateForm(formData);
  setErrors(formErrors);
  // If no errors, proceed with form submission
  if (Object.keys(formErrors).length === 0) {
    console.log("Form submitted successfully:", formData);
    alert("Form submitted successfully");
    setFormData(initialFormData);
    setErrors({});
    setTouched({});
    // Add your form submission logic here
  }
};
