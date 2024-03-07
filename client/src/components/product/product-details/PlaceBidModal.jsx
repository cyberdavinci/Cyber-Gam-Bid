import React, { useState } from "react";
import { Modal, Spinner } from "react-bootstrap";
import { FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
const PlaceBidModal = ({ isOpen, setIsOpen }) => {
  const [user, setUser] = useState(true);
  const formik = useFormik({
    initialValues: {
      bidAsAnonymous: false,
      amount: "",
      phone: "",
      purpose: "",
      useLoginEmail: false,
    },
    onSubmit: async (values, formikHelper) => {
      console.log(values);
    },
    validationSchema: Yup.object().shape({
      amount: Yup.string().required("Amount is required"),
      phone: Yup.string().required("Phone is required"),
    }),
  });

  return (
    <Modal size="lg" centered show={isOpen} onHide={setIsOpen}>
      <Modal.Body>
        <div className="flex items-center justify-between mb-4">
          <h6 className="h6 mb-0">Place your bid now!</h6>

          <button
            onClick={() => setIsOpen(false)}
            className="border-none outline-none bg-transparent"
          >
            <FaX className="text-xl" />
          </button>
        </div>

        {!user ? (
          <div className="flex flex-col gap-2">
            <p>
              You cannot place a bid without logging in. Please{" "}
              <Link to={`/login`} className="text-black">
                login
              </Link>
            </p>

            <p>
              Do not have an account?{" "}
              <Link to={`/register`} className="text-black">
                register
              </Link>{" "}
            </p>
          </div>
        ) : (
          <form onSubmit={formik.handleSubmit}>
            <div className="flex items-center gap-2 my-3">
              <input
                checked={formik.values.bidAsAnonymous}
                type="checkbox"
                id="bidAsAnonymous"
                style={{
                  accentColor: "black",
                }}
                onChange={(e) =>
                  formik.setValues({
                    ...formik.values,
                    bidAsAnonymous: e.target.checked,
                  })
                }
              />
              <label htmlFor="bidAsAnonymous" className="form-label mb-0">
                Bid as anonymous (optional)
              </label>
            </div>
            <div className="my-3">
              <label className="form-label">
                Amount <sup className="text-danger">*</sup>
              </label>
              <input
                type="number"
                id="amount"
                onChange={formik.handleChange}
                placeholder="Enter bid amount"
                className="form-control"
                value={formik.values.amount}
              />
              {formik.errors.amount && (
                <small className="block my-1 text-sm text-danger">
                  {formik.errors.amount}
                </small>
              )}
            </div>

            <div className="my-3">
              <label className="form-label">
                Phone{" "}
                <small className="text-xs text-gray-700">
                  ( Your phone {formik.values.bidAsAnonymous && "or name"} will
                  not be displayed publicly. This is just for us to be in touch
                  with you. )
                </small>
                <sup className="text-danger">*</sup>
              </label>
              <input
                type="text"
                id="phone"
                onChange={formik.handleChange}
                placeholder="Enter phone number"
                className="form-control"
                value={formik.values.phone}
              />

              {formik.errors.phone && (
                <small className="block my-1 text-sm text-danger">
                  {formik.errors.phone}
                </small>
              )}
            </div>

            <div className="my-3">
              <label className="form-label">Purpose of bid</label>
              <textarea
                placeholder="Enter purpose of bid"
                className="form-control"
              />
            </div>
            <button
              disabled={formik.isSubmitting}
              type="submit"
              className="btn mt-2 btn-dark"
            >
              {formik.isSubmitting ? (
                <Spinner animation="grow" size="sm" />
              ) : (
                "Place my bid"
              )}
            </button>
          </form>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default PlaceBidModal;
