import React from "react";
import DateView from "react-datepicker";
import { Field, ErrorMessage } from "formik";
import "react-datepicker/dist/react-datepicker.css";

function DatePicker({ label, name, formik, ...rest }) {
  return (
    <div className="mb-3 mt-3">
      <label htmlFor={name} className="form-label">
        <b>{label}</b>
      </label>

      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              className={`form-control ${
                formik.touched[`${name}`] && formik.errors[`${name}`]
                  ? "is-invalid"
                  : ""
              }`}
              selected={value}
              onChange={(value) => setFieldValue(name, value)}
            />
          );
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

export default DatePicker;
