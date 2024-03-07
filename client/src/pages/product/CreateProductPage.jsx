import React from "react";
import { Card } from "react-bootstrap";
import BackBtn from "../../components/generic/BackBtn";
import CreateProductForm from "../../components/product/create-product/CreateProductForm";
import { useFormik } from "formik";
import Swal from "sweetalert2";
const CreateProductPage = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
      brand: "",
      condition: "",
      photos: [],
      auctionEndDate: "",
      qty: 1,
      price: 0,
      status: "Closed",
      description: "",
    },
  });
  return (
    <div>
      <Card>
        <Card.Body>
          {/* Header */}
          <div className="sticky top-0 bg-white">
            <div className="flex items-center justify-between mb-7">
              <BackBtn />
              <h6 className="h6">Add a new item to your catalog</h6>
            </div>
          </div>

          {/* form */}
          <CreateProductForm formik={formik} />
          <button
            onClick={() =>
              Swal.fire({
                icon: "question",
                text: "Are you sure",
                confirmButtonText: "Yes",
                confirmButtonColor: "#00ff00",
                showCancelButton: true,
                cancelButtonColor: "#000",
              })
            }
            className="btn btn-dark"
          >
            Create product
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CreateProductPage;
