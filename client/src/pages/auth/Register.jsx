import React from "react";
import { Card, Spinner } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
const Register = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confimPassword: "",
      phoneNumber: "",
      address: {
        street: "",
        city: "",
        state: "",
        zipCode: "",
        country: "GM",
      },
    },
    onSubmit: async (values, formikHandlers) => {},
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("Email is required")
        .email("Enter a valid email address"),
      password: Yup.string().required("Password is required"),
      confirmPassword: Yup.string()
        .required("Please retype your password.")
        .oneOf([Yup.ref("password")], "Your passwords do not match."),
      name: Yup.string().required("Name is required"),
      phoneNumber: Yup.string().required("Phone number is required"),
      address: Yup.object({
        street: Yup.string().required("Required"),
        city: Yup.string().required("Required"),
        state: Yup.string().required("Required"),
        zipCode: Yup.string().notRequired(),
      }),
    }),
  });
  return (
    <div className="h-full flex items-center justify-center">
      <Card>
        <Card.Body>
          <h5 className="h5 text-center mb-7">REGISTER TO START AUCTIONS</h5>
          <form onSubmit={formik.handleSubmit}>
            <div className="my-2">
              <label className="form-label">
                Full Name <sup className="text-danger">*</sup>
              </label>
              <input
                type="text"
                id="name"
                onChange={formik.handleChange}
                placeholder="Enter full name"
                className="form-control"
                value={formik.values.name}
              />
              {formik.errors.name && (
                <small className="block my-1 text-sm text-danger">
                  {formik.errors.name}
                </small>
              )}
            </div>
            <div className="grid grid-cols-2 gap-2 my-2">
              <div>
                <label className="form-label">
                  Email<sup className="text-danger">*</sup>
                </label>
                <input
                  type="text"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  placeholder="Enter email address"
                  className="form-control"
                />
                {formik.errors.email && (
                  <small className="block my-1 text-sm text-danger">
                    {formik.errors.email}
                  </small>
                )}
              </div>
              <div>
                <label className="form-label">
                  Phone<sup className="text-danger">*</sup>
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  onChange={formik.handleChange}
                  values={formik.values.phoneNumber}
                  placeholder="Enter phone number"
                  className="form-control"
                />
                {formik.errors.phoneNumber && (
                  <small className="block my-1 text-sm text-danger">
                    {formik.errors.phoneNumber}
                  </small>
                )}
              </div>
            </div>
            <div className="my-2 grid grid-cols-2 gap-2">
              <div>
                <label className="form-label">
                  Password<sup className="text-danger">*</sup>
                </label>
                <input
                  type="password"
                  id="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  placeholder="Enter your password"
                  className="form-control"
                />
                {formik.errors.password && (
                  <small className="block my-1 text-sm text-danger">
                    {formik.errors.password}
                  </small>
                )}
              </div>
              <div>
                <label className="form-label">
                  Confirm password <sup className="text-danger">*</sup>
                </label>
                <input
                  type="password"
                  id="confimPassword"
                  onChange={formik.handleChange}
                  value={formik.values.confimPassword}
                  placeholder="Confirm your password"
                  className="form-control"
                />
                {formik.errors.confimPassword && (
                  <small className="block my-1 text-sm text-danger">
                    {formik.errors.confimPassword}
                  </small>
                )}
              </div>
            </div>
            <div className="grid my-2 grid-cols-2 gap-2">
              <div className="col-span-2">
                <label className="form-label">
                  Street <sup className="text-danger">*</sup>
                </label>
                <input
                  type="text"
                  id="address.street"
                  onChange={formik.handleChange}
                  placeholder="Enter street name"
                  className="form-control"
                  value={formik.values.address.street}
                />
                {formik.errors?.address?.street && (
                  <small className="block my-1 text-sm text-danger">
                    {formik.errors?.address?.street}
                  </small>
                )}
              </div>

              <div>
                <label className="form-label">
                  City <sup className="text-danger">*</sup>
                </label>
                <input
                  type="text"
                  id="address.city"
                  onChange={formik.handleChange}
                  placeholder="Enter city"
                  className="form-control"
                  value={formik.values.address.city}
                />
                {formik.errors?.address?.city && (
                  <small className="block my-1 text-sm text-danger">
                    {formik.errors?.address?.city}
                  </small>
                )}
              </div>

              <div>
                <label className="form-label">
                  State <sup className="text-danger">*</sup>
                </label>
                <input
                  type="text"
                  id="address.state"
                  onChange={formik.handleChange}
                  placeholder="Enter state"
                  className="form-control"
                  value={formik.values.address.state}
                />
                {formik.errors?.address?.state && (
                  <small className="block my-1 text-sm text-danger">
                    {formik.errors?.address?.state}
                  </small>
                )}
              </div>
            </div>
            <button
              disabled={formik.isSubmitting}
              type="submit"
              className="btn mt-2 btn-outline-dark"
            >
              {formik.isSubmitting ? (
                <Spinner animation="grow" size="sm" />
              ) : (
                "Register"
              )}
            </button>
          </form>

          <p className="flex items-center text-black mt-2">
            Already have an account?
            <Link to="/login" className="ml-2 mb-0 text-black">
              Login
            </Link>
          </p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Register;
