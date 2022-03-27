import React from "react";
import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";

const optionsArr = [
  { key: "Selete One Language", value: "" },
  { key: "Java", value: "Java" },
  { key: "JavaScript", value: "JavaScript" },
  { key: "PHP", value: "PHP" },
];

const radioArr = [
  { key: "Male", value: "Male" },
  { key: "Female", value: "Female" },
  { key: "Others", value: "Others" },
];

const checkboxArr = [
  { key: "Black", value: "Black" },
  { key: "Blue", value: "Blue" },
  { key: "Brown", value: "Brown" },
];

const modeOfContactArr = [
  { key: "Email", value: "emailMod" },
  { key: "Telephone", value: "telephoneMode" },
];

const initialValues = {
  fullname: "",
  email: "",
  password: "",
  description: "",
  language: "",
  gender: "",
  colors: [],
  birthDate: null,
  modeOfContact: "",
  phone: "",
};

const validate = (values) => {
  const errors = {};

  if (!values.fullname) {
    errors.fullname = "Please fill the fullname field!";
  }

  if (!values.email) {
    errors.email = "Please fill the email field!";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Please fill the password field!";
  } else if (values.password.length < 6) {
    errors.password = "Not Strong...Length must be > 6";
  }

  if (!values.description) {
    errors.description = "Please fill the description field!";
  }

  if (!values.language) {
    errors.language = "Please fill the language field!";
  }

  if (!values.gender) {
    errors.gender = "Please select the gender button!";
  }

  if (values.colors.length === 0) {
    errors.colors = "Please select one or more color!";
  }

  if (values.birthDate == null) {
    errors.birthDate = "Please fill the birthdate field!";
  }

  if (!values.modeOfContact) {
    errors.modeOfContact = "Please select the Mode-of-Contact!";
  }

  if (values.modeOfContact === "telephoneMode" && !values.phone) {
    errors.phone = "Please fill the contact field!";
  } else if (
    (values.modeOfContact === "telephoneMode" && isNaN(values.phone)) ||
    values.phone.length !== 11
  ) {
    errors.phone = "Please fill valid contact number!";
  }

  return errors;
};

const onSubmit = (values) => {
  console.log("Form Data: ", values);
};

function FormikContainer() {
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="input"
              label="Fullname"
              name="fullname"
              type="text"
              formik={formik}
            />

            <FormikControl
              control="input"
              label="Email"
              name="email"
              type="email"
              formik={formik}
            />

            <FormikControl
              control="input"
              label="Password"
              name="password"
              type="password"
              formik={formik}
            />

            <FormikControl
              control="textarea"
              label="Description"
              name="description"
              formik={formik}
            />

            <FormikControl
              control="select"
              label="Programming Language"
              name="language"
              options={optionsArr}
              formik={formik}
            />

            <FormikControl
              control="radio"
              label="Gender"
              name="gender"
              options={radioArr}
              formik={formik}
            />

            <FormikControl
              control="checkbox"
              label="Favorite Color"
              name="colors"
              options={checkboxArr}
              formik={formik}
            />

            <FormikControl
              control="date"
              label="Birthday"
              name="birthDate"
              formik={formik}
            />

            <FormikControl
              control="radio"
              label="Mode Of Contact"
              name="modeOfContact"
              options={modeOfContactArr}
              formik={formik}
            />

            <FormikControl
              control="input"
              label="Telephone"
              name="phone"
              type="text"
              formik={formik}
            />

            <button
              className="btn btn-info mb-4"
              type="submit"
              disabled={
                !formik.isValid || Object.keys(formik.touched).length === 0
              }
            >
              Submit
            </button>
            <button className="btn btn-primary ms-2 mb-4" type="reset">
              Reset
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormikContainer;
