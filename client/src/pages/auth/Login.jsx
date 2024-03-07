import React from "react";
import { Card, Spinner } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import classNames from "classnames";
const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, formikHandlers) => {},
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("Email is required")
        .email("Enter a valid email address"),
      password: Yup.string().required("Password is required"),
    }),
  });
  return (
    <div className="h-full flex items-center justify-center">
      <Card
        style={{
          width: 450,
          maxWidth: "100%",
        }}
      >
        <Card.Body>
          <h5 className="h5 text-center mb-7">LOGIN TO YOUR DASHBOARD</h5>
          <form
            onSubmit={formik.handleSubmit}
            className={classNames("flex flex-col gap-3")}
          >
            <div>
              <label className="form-label">Email address<sup className="text-danger">*</sup></label>
              <input
                type="text"
                id="email"
                onChange={formik.handleChange}
                placeholder="Enter your email address"
                className="form-control"
              />
              {formik.errors.email && (
                <small className="block my-1 text-sm text-danger">
                  {formik.errors.email}
                </small>
              )}
            </div>
            <div>
              <label className="form-label">Password<sup className="text-danger">*</sup></label>
              <input
                type="password"
                id="password"
                onChange={formik.handleChange}
                placeholder="Enter your password"
                className="form-control"
              />
              {formik.errors.password && (
                <small className="block my-1 text-sm text-danger">
                  {formik.errors.password}
                </small>
              )}
            </div>
            <button
              disabled={formik.isSubmitting}
              type="submit"
              className="btn  btn-outline-dark"
            >
              {formik.isSubmitting ? (
                <Spinner animation="grow" size="sm" />
              ) : (
                "Login"
              )}
            </button>
          </form>
          <p className="flex items-center text-black mt-3 justify-center">
            Forgot your password?{" "}
            <Link to="/forgot-password" className="ml-2 mb-0 text-black">
              click here
            </Link>
          </p>
          <p className="text-center font-bold my-1 text-lg">OR</p>
          <p className="flex items-center text-black justify-center mt-3">
            Do not have an account?
            <Link to="/register" className="ml-2 mb-0 text-black">
              Register
            </Link>
          </p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
