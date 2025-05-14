import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../cssStyle/SignIn.css";

export default function SignIn({ setLogIn, setsignIn }) {
  const handelloginOpening = () => {
    setLogIn(true);
    setsignIn(false);
  };
  const validation = Yup.object({
    username: Yup.string().required("Name is required!"),
    phone: Yup.string()
      .matches(/^09\d{9}$/, "PhoneNumebr is not valid.")
      .required("PhoneNumber is required!"),
    password: Yup.string()
      .required("Password is required!")
      .min(6, "The password must be at least 6 characters long!"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required.")
      .oneOf([Yup.ref("password"), null], "Passwords do not match"),
  });

  return (
    <Formik
      initialValues={{
        username: "",
        phone: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validation}
      onSubmit={(values) => {
        alert("The form was submitted successfully");
      }}
      validateOnBlur={false}
    >
      {() => (
        <Form>
          <h2 className="mb-4 mt-0 text-center">Sign Up</h2>{" "}
          <div>
            <label>Username:</label>
            <Field
              type="text"
              name="username"
              className="inputItem"
              placeholder="Enter your username."
            />
            <ErrorMessage name="username">
              {(msg) => <div className="error-message">{msg || " "}</div>}
            </ErrorMessage>
          </div>
          <div>
            <label>Phone Number:</label>
            <Field
              type="text"
              name="phone"
              className="inputItem"
              placeholder="Enter your phone number:"
            />
            <ErrorMessage name="phone">
              {(msg) => <div className="error-message">{msg || " "}</div>}
            </ErrorMessage>
          </div>
          <div>
            <label>Password:</label>
            <Field
              type="password"
              name="password"
              className="inputItem"
              placeholder="Enter your password:"
            />
            <ErrorMessage name="password">
              {(msg) => <div className="error-message">{msg || " "}</div>}
            </ErrorMessage>
          </div>
          <div>
            <label>Confirm Password:</label>
            <Field
              type="password"
              name="confirmPassword"
              className="inputItem"
              placeholder="Enter your confirm password:"
            />
            <ErrorMessage name="confirmPassword">
              {(msg) => <div className="error-message">{msg || " "}</div>}
            </ErrorMessage>
          </div>
          <button type="submit" className="submitButton">
            Send
          </button>
          <p className="mt-4 ms-1 text-center" style={{ fontSize: "14px" }}>
            Already Have An Account ?{" "}
            <span className="login" onClick={handelloginOpening}>
              Login
            </span>
          </p>
        </Form>
      )}
    </Formik>
  );
}
