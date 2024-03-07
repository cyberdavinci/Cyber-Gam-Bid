import React from "react";
import { Card, Spinner } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import classNames from "classnames";
const ResetPassword = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    onSubmit: async (values, formikHandlers) => {},
    validationSchema: Yup.object().shape({
      password: Yup.string().required("Password is required"),
      confirmPassword: Yup
      .string()
      .required('Please retype your password.')
      .oneOf([Yup.ref('password')], 'Your passwords do not match.')

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
          <h5 className="h5 text-center mb-7">RESET YOUR PASSWORD</h5>
          <form
            onSubmit={formik.handleSubmit}
            className={classNames("flex flex-col gap-3")}
          >
           
            <div>
              <label className="form-label">New Password<sup className="text-danger">*</sup></label>
              <input
                type="password"
                id="password"
                onChange={formik.handleChange}
                placeholder="Enter your new password"
                className="form-control"
              />
              {formik.errors.password && (
                <small className="block my-1 text-sm text-danger">
                  {formik.errors.password}
                </small>
              )}
            </div>

             <div>
              <label className="form-label">Confirm Password<sup className="text-danger">*</sup></label>
              <input
                type="password"
                id="confirmPassowrd"
                onChange={formik.handleChange}
                placeholder="Confirm your new password"
                className="form-control"
              />
              {formik.errors.confirmPassword && (
                <small className="block my-1 text-sm text-danger">
                  {formik.errors.confirmPassword}
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
          
        </Card.Body>
      </Card>
    </div>
  );
};

export default ResetPassword;
