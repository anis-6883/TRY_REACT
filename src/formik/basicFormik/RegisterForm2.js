import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";

const initialValues = {
  username: "",
  email: "",
  password: "",
  comments: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  tags: [""],
};

const onSubmit = (values) => {
  console.log(values);
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

function RegisterForm2() {
  const [show, setShow] = useState("password");

  const showControl = () => {
    show === "password" ? setShow("text") : setShow("password");
  };

  return (
    <div className="container mt-5">
      <h3 style={{ textAlign: "center" }}>React Formik</h3>
      <code>
        <i>*Field means mandetory to fill it!</i>
      </code>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="mb-3 mt-4">
            <Field name="username">
              {(props) => {
                const { field, meta } = props;
                return (
                  <div>
                    <label for="username" className="form-label">
                      *Fullname
                    </label>
                    <input
                      type="text"
                      id="username"
                      {...field}
                      className={`form-control ${
                        meta.touched && meta.error ? "is-invalid" : ""
                      } ${meta.touched && !meta.error ? "is-valid" : ""}`}
                      placeholder="Enter Fullname"
                    />
                    <ErrorMessage name="username">
                      {(errorMag) => (
                        <div className="invalid-feedback">{errorMag}</div>
                      )}
                    </ErrorMessage>
                    {meta.touched && !meta.error ? (
                      <div className="valid-feedback">Correct Username!</div>
                    ) : null}
                  </div>
                );
              }}
            </Field>
          </div>

          <div className="mb-3">
            <Field name="email">
              {(props) => {
                const { field, meta } = props;
                return (
                  <div>
                    <label for="email" className="form-label">
                      *Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...field}
                      className={`form-control ${
                        meta.touched && meta.error ? "is-invalid" : ""
                      } ${meta.touched && !meta.error ? "is-valid" : ""}`}
                      placeholder="Enter Email"
                    />
                    <ErrorMessage name="email">
                      {(errorMag) => (
                        <div className="invalid-feedback">{errorMag}</div>
                      )}
                    </ErrorMessage>
                    {meta.touched && !meta.error ? (
                      <div className="valid-feedback">Correct Email!</div>
                    ) : null}
                  </div>
                );
              }}
            </Field>
          </div>

          <div className="mb-3">
            <label for="password" className="form-label">
              *Password
            </label>
            <Field name="password">
              {(props) => {
                const { field, meta } = props;
                return (
                  <div className="input-group">
                    <span onClick={showControl} class="input-group-text">
                      {show === "password" ? (
                        <i class="bi bi-eye-slash"></i>
                      ) : (
                        <i class="bi bi-eye"></i>
                      )}
                    </span>
                    <input
                      type={`${show}`}
                      id="password"
                      {...field}
                      className={`form-control ${
                        meta.touched && meta.error ? "is-invalid" : ""
                      } ${meta.touched && !meta.error ? "is-valid" : ""}`}
                      placeholder="Enter Password"
                    />
                    <ErrorMessage name="password">
                      {(errorMag) => (
                        <div className="invalid-feedback">{errorMag}</div>
                      )}
                    </ErrorMessage>
                    {meta.touched && !meta.error ? (
                      <div className="valid-feedback">Correct Password!</div>
                    ) : null}
                  </div>
                );
              }}
            </Field>
          </div>

          <div className="mb-3">
            <label htmlFor="comments" className="form-label">
              Comments
            </label>
            <Field
              as="textarea"
              name="comments"
              id="comments"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="facebook" className="form-label">
              Facebook Profile
            </label>
            <Field
              type="text"
              name="social.facebook"
              id="facebook"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="twitter" className="form-label">
              Twitter Profile
            </label>
            <Field
              type="text"
              name="social.twitter"
              id="twitter"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phPrimary" className="form-label">
              Primary Phone
            </label>
            <Field
              type="text"
              name="phoneNumbers[0]"
              id="phPrimary"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phSecondary" className="form-label">
              Secondary Phone
            </label>
            <Field
              type="text"
              name="phoneNumbers[1]"
              id="phSecondary"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">List of Tags</label>
            <FieldArray name="tags">
              {(fieldArrayprops) => {
                const { form, push, remove } = fieldArrayprops;
                const { values } = form;
                const { tags } = values;
                return (
                  <div>
                    {tags.map((tag, index) => (
                      <div key={index}>
                        <Field name={`tags[${index}]`} />
                        {index > 0 && (
                          <button type="button" onClick={() => remove(index)}>
                            -
                          </button>
                        )}
                        <button type="button" onClick={() => push("")}>
                          +
                        </button>
                      </div>
                    ))}
                  </div>
                );
              }}
            </FieldArray>
          </div>

          <Field name="submitButton">
            {(props) => {
              const { form } = props;
              console.log(props);
              return (
                <input
                  className="btn btn-info mb-5"
                  type="submit"
                  value="Submit"
                  disabled={
                    Object.keys(form.touched).length === 0 || !form.isValid
                  }
                />
              );
            }}
          </Field>
          <button type="reset" className="btn btn-primary mb-5 ms-2">
            Reset
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default RegisterForm2;
