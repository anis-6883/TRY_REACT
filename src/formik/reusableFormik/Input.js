import React from "react";
import { Field, ErrorMessage } from "formik";

function Input({ label, name, formik, ...rest }) {
  return (
    <div className="mb-3 mt-3">
      <label for={name} className="form-label">
        <b>{label}</b>
      </label>

      <Field
        name={name}
        {...rest}
        className={`form-control ${
          formik.touched[`${name}`] && formik.errors[`${name}`]
            ? "is-invalid"
            : ""
        }`}
      />

      <ErrorMessage name={name}>
        {(errorMag) => <div className="invalid-feedback">{errorMag}</div>}
      </ErrorMessage>
    </div>
  );
}

export default Input;
