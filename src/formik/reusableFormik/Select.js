import { Field, ErrorMessage } from "formik";
import React from "react";

function Select({ label, name, options, formik, ...rest }) {
  return (
    <div className="mb-3 mt-3">
      <label for={name} className="form-label">
        <b>{label}</b>
      </label>

      <Field
        as="select"
        name={name}
        {...rest}
        className={`form-select ${
          formik.touched[`${name}`] && formik.errors[`${name}`]
            ? "is-invalid"
            : ""
        }`}
      >
        {options.map((option) => {
          return (
            <option key={option.key} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>

      <ErrorMessage name={name}>
        {(errorMag) => <div className="invalid-feedback">{errorMag}</div>}
      </ErrorMessage>
    </div>
  );
}

export default Select;
