import React, { useState } from "react";
import "./style.css";
import { initialFormData } from "../../utils/initialValues";
import { FormErrors } from "../../utils/model";
import { errorMessageStyle } from "../../utils/styles";
import { isFormValid } from "../../utils/validations";
import { STRING } from "../../utils/strings";
import { handleInput } from "../../helper/handleInput";
import { handleBlur } from "../../helper/handleBlur";
import { handleSubmit } from "../../helper/handleSubmit";

const UseStateObject = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleInput(event, setFormData, touched, setErrors);
  };

  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    handleBlur(event, formData, setTouched, setErrors);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    handleSubmit(event, formData, setTouched, setErrors, setFormData);
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="card-title text-center">{STRING.REGISTER_TITLE}</h2>
        <div className="card-body py-md-4">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="text"
                className={`form-control ${
                  errors.username ? "is-invalid" : ""
                }`}
                id="name"
                name="username"
                placeholder={STRING.NAME_PLACEHOLDER}
                autoComplete="off"
                value={formData.username}
                onChange={onInputChange}
                onBlur={onBlur}
              />
              {errors.username && (
                <div className="invalid-feedback" style={errorMessageStyle}>
                  {errors.username}
                </div>
              )}
            </div>
            <div className="form-group">
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                id="email"
                name="email"
                autoComplete="off"
                placeholder={STRING.EMAIL_PLACEHOLDER}
                value={formData.email}
                onChange={onInputChange}
                onBlur={onBlur}
              />
              {errors.email && (
                <div className="invalid-feedback" style={errorMessageStyle}>
                  {errors.email}
                </div>
              )}
            </div>

            <div className="form-group">
              <input
                type="password"
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
                id="password"
                name="password"
                placeholder={STRING.PASSWORD_PLACEHOLDER}
                autoComplete="off"
                value={formData.password}
                onChange={onInputChange}
                onBlur={onBlur}
              />
              {errors.password && (
                <div className="invalid-feedback" style={errorMessageStyle}>
                  {errors.password}
                </div>
              )}
            </div>
            <div className="form-group">
              <input
                type="password"
                className={`form-control ${
                  errors.confirm_password ? "is-invalid" : ""
                }`}
                id="confirm-password"
                name="confirm_password"
                placeholder={STRING.CONFIRM_PASSWORD_PLACEHOLDER}
                autoComplete="off"
                value={formData.confirm_password}
                onChange={onInputChange}
                onBlur={onBlur}
              />
              {errors.confirm_password && (
                <div className="invalid-feedback" style={errorMessageStyle}>
                  {errors.confirm_password}
                </div>
              )}
            </div>
            <div className="d-flex flex-row align-items-center justify-content-between">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!isFormValid(formData)}
              >
                {STRING.CREATE_ACCOUNT_BUTTON}
              </button>
            </div>
          </form>
          <div>
            <p>{`My name is ${formData.username} and email is ${formData.email}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseStateObject;
