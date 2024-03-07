import React from "react";
import { Card, Spinner } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

const ConfirmResetPasswordCode = () => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      code: "",
    },
    onSubmit: async (values, formikHandlers) => {
      navigate("/reset-password")
    },
    validationSchema: Yup.object().shape({
      code: Yup.string().required("code is required"),
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
          <h5 className="h5 text-center mb-7">CONFIRMATION CODE?</h5>
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
            <div>
              <label className="form-label">Code<sup className="text-danger">*</sup></label>
              <input
                type="code"
                id="code"
                onChange={formik.handleChange}
                placeholder="Enter confirmation code"
                className="form-control"
              />
              {formik.errors.code && (
                <small className="block my-1 text-sm text-danger">
                  {formik.errors.code}
                </small>
              )}
            </div>

            <button
              disabled={formik.isSubmitting}
              type="submit"
              className="btn  btn-outline-dark"
            >
              {formik.isSubmitting ? (
                <Spinner animation="grow" size="sm"  />
              ) : (
                "Confirm my code"
              )}
            </button>
          </form>
          
        </Card.Body>
      </Card>
    </div>
  );
};

export default ConfirmResetPasswordCode;
