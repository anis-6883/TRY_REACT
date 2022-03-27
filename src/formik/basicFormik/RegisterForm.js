import React, { useState } from "react";
import { useFormik } from "formik";
// import * as Yup from "yup";

const initialValues = {
  username: "",
  email: "",
  password: "",
};

const onSubmit = (values) => {
  console.log(JSON.stringify(values));
};

const validate = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = "Please fill the username field!";
  }
  if (!values.email) {
    errors.email = "Please fill the email field!";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Please fill the password field!";
  } else if (values.password.length < 8) {
    errors.password = "Password is not strong! At least 8 characters...";
  }
  return errors;
};

function RegisterForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  const [show, setShow] = useState("password");

  const showControl = () => {
    show === "password" ? setShow("text") : setShow("password");
  };

  // const { username, email, password } = formik.values;
  // const { handleChange, handleSubmit, handleBlur } = formik;

  // console.log("Forms Errors: ", formik.errors);
  // console.log("Forms Touched: ", formik.touched);

  return (
    <div className="container mt-5">
      <h3 style={{ textAlign: "center" }}>React Formik</h3>

      <form onSubmit={formik.handleSubmit}>
        {/* username field */}
        <div className="mb-3">
          <input
            name="username"
            className={`form-control ${
              formik.touched.username && formik.errors.username
                ? "is-invalid"
                : ""
            } ${
              formik.touched.username && !formik.errors.username
                ? "is-valid"
                : ""
            }`}
            type="text"
            placeholder="Enter Fullname"
            // value={username}
            // onBlur={handleBlur}
            // onChange={handleChange}
            {...formik.getFieldProps("username")}
          />
          {formik.touched.username && formik.errors.username ? (
            <div className="invalid-feedback">{formik.errors.username}</div>
          ) : null}
          {formik.touched.username && !formik.errors.username ? (
            <div className="valid-feedback">Correct Username</div>
          ) : null}
        </div>

        {/* email field */}
        <div className="mb-3">
          <input
            name="email"
            className={`form-control ${
              formik.touched.email && formik.errors.email ? "is-invalid" : ""
            } ${
              formik.touched.email && !formik.errors.email ? "is-valid" : ""
            }`}
            type="email"
            placeholder="Enter Email"
            // value={email}
            // onBlur={handleBlur}
            // onChange={handleChange}
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="invalid-feedback">{formik.errors.email}</div>
          ) : null}
          {formik.touched.email && !formik.errors.email ? (
            <div className="valid-feedback">Correct Email</div>
          ) : null}
        </div>

        {/* password field */}
        <div className="mb-3 input-group">
          <span
            onClick={showControl}
            class="input-group-text"
            id="basic-addon1"
          >
            {show === "password" ? (
              <i class="bi bi-eye-slash"></i>
            ) : (
              <i class="bi bi-eye"></i>
            )}
          </span>
          <input
            name="password"
            className={`form-control ${
              formik.touched.password && formik.errors.password
                ? "is-invalid"
                : ""
            } ${
              formik.touched.password && !formik.errors.password
                ? "is-valid"
                : ""
            }`}
            type={`${show}`}
            placeholder="Enter Password"
            // value={password}
            // onBlur={handleBlur}
            // onChange={handleChange}
            {...formik.getFieldProps("password")}
          />

          {formik.touched.password && formik.errors.password ? (
            <div className="invalid-feedback">{formik.errors.password}</div>
          ) : null}
          {formik.touched.password && !formik.errors.password ? (
            <div className="valid-feedback">Correct password</div>
          ) : null}
        </div>

        <input
          className="btn btn-info"
          name="submitButton"
          type="submit"
          value="Submit"
          disabled={
            Object.keys(formik.touched).length === 0 ||
            Object.keys(formik.errors).length !== 0
          }
        />
      </form>
    </div>
  );
}

export default RegisterForm;
