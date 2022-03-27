import { Field, ErrorMessage } from "formik";
import React from "react";

function Checkbox({ label, name, options, formik, ...rest }) {
  return (
    <div className="mb-3 mt-3">
      <label htmlFor={name} className="form-label">
        <b>{label}</b>
      </label>

      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <div key={option.key} className="form-check">
                <input
                  type="checkbox"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                  className={`form-check-input ${
                    formik.touched[`${name}`] && formik.errors[`${name}`]
                      ? "is-invalid"
                      : ""
                  }`}
                />
                <label className="form-check-label" htmlFor={option.value}>
                  {option.key}
                </label>
              </div>
            );
          });
        }}
      </Field>

      <ErrorMessage name={name}>
        {(errorMag) => (
          <div style={{ display: "block" }} className="invalid-feedback">
            {errorMag}
          </div>
        )}
      </ErrorMessage>
    </div>
  );
}

export default Checkbox;
