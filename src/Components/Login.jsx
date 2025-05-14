import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../cssStyle/SignIn.css";

export default function Login({setLogIn,setsignIn}) {
  const handelsignInOpening=()=>{
    setLogIn(false)
    setsignIn(true)
  }
  const validation = Yup.object({
    phone: Yup.string().required("PhoneNumber is required!"),
    password: Yup.string().required("Password is required!"),
  });

  return (
    <Formik
      initialValues={{ 
        phone: "",
        password: "",
      }}
      validationSchema={validation}
      onSubmit={(values) => {
        alert("The form was submitted successfully");
      }}
      validateOnBlur={false}
    >
      {() => (
        <Form>
          <h2 className="mb-4 mt-0 text-center">Login In</h2>
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
          <button type="submit" className="submitButton">
            Sign In
          </button>
          <p className="mt-4 ms-1 text-center" style={{fontSize:"14px"}}>Have'nt An Account ? <span className="login" onClick={handelsignInOpening}>sign Up</span></p>
        </Form>
      )}
    </Formik>
  );
}