import React from "react";

const CustomInput = ({ label, ...inputProps }) => {
  return (
    <div>
      {label && <label className="form-label">{label}</label>}
      <input className="form-control" {...inputProps} />
    </div>
  );
};

export default CustomInput;
