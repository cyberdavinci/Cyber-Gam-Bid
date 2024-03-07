import React from "react";
import CustomInput from "../../generic/CustomInput";
import CustomSelect from "../../generic/CustomSelect";
import categories from "../../../constants/categories";
import conditions from "../../../constants/conditions";
import CustomDropZone from "../../generic/CustomDropZone";

const CreateProductForm = ({ formik }) => {
  return (
    <div className="grid grid-cols-3 gap-3">
      {/* name */}
      <CustomInput
        type="text"
        label={"Product Name"}
        placeholder="Enter product name"
        value={formik.values.name}
        id="name"
        onChange={formik.handleChange}
      />

      {/*  Category*/}
      <CustomSelect
        label={"Category"}
        options={categories}
        id="category"
        onChange={formik.handleChange}
        value={formik.values.category}
      />

      {/* Brand */}
      <CustomInput
        type="text"
        label={"Brand"}
        placeholder="Enter brand name"
        value={formik.values.brand}
        id="brand"
        onChange={formik.handleChange}
      />

      <div className="grid grid-cols-4 gap-3 col-span-3">
        {/* Quantity */}
        <CustomInput
          type="number"
          label={"Quantity"}
          placeholder="Enter quantity"
          value={formik.values.qty}
          id="qty"
          min={1}
          onChange={formik.handleChange}
        />

        {/* Price */}
        <CustomInput
          type="number"
          label={"Price (GMD)"}
          placeholder="Enter price"
          min={0}
          value={formik.values.price}
          id="price"
          onChange={formik.handleChange}
        />

        {/* Status */}
        <CustomSelect
          label={"Status"}
          options={["Open", "Closed"]}
          id="status"
          onChange={formik.handleChange}
          value={formik.values.status}
        />

        {/* Condition */}
        <CustomSelect
          label={"Condition"}
          options={conditions}
          id="condition"
          onChange={formik.handleChange}
          value={formik.values.condition}
        />
      </div>

      {/* Description */}

      <div className="col-span-3">
        <label className="form-label">Description</label>
        <textarea
          id="description"
          className="form-control h-36"
          value={formik.values.description}
          onChange={formik.handleChange}
          placeholder="Enter product description here min of 50 words"
        />
      </div>

      <div className="col-span-3">
        <label className="form-label">Product Images</label>
        <CustomDropZone />
      </div>
    </div>
  );
};

export default CreateProductForm;
