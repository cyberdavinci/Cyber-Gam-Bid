import React from "react";
import { v4 as uuidV4 } from "uuid";
const CustomSelect = ({ label, options, ...selectOptions }) => {
  return (
    <div>
      {label && <label className="form-label">{label}</label>}
      <select className="form-select" {...selectOptions}>
        <option value="">Choose....</option>
        {options.map((option) => (
          <option key={uuidV4()} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
