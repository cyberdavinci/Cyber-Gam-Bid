import React from "react";
import { Card, Spinner } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (values, formikHandlers) => {
      navigate("/confirm-reset-password-code")
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("Email is required")
        .email("Enter a valid email address"),
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
          <h5 className="h5 text-center mb-7">FORGOT YOUR PASSWORD?</h5>
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
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
            <button
              disabled={formik.isSubmitting}
              type="submit"
              className="btn  btn-outline-dark"
            >
              {formik.isSubmitting ? (
                <Spinner animation="grow" size="sm" />
              ) : (
                "Send password reset code"
              )}
            </button>
           
            </div>
          </form>
          <p className="flex items-center text-black mt-3">
            Remembered your password?{" "}
            <Link to="/login" className="ml-2 mb-0 text-black">
              login
            </Link>
          </p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ForgotPassword;
