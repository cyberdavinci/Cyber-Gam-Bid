import React, { useState } from "react";
import { FaFilter } from "react-icons/fa6";
import { Card } from "react-bootstrap";
import CategoryProductsFilterCanvas from "./CategoryProductsFilterCanvas";

const CategoryProductsFilterSection = () => {
  const [openFilterCanvas, setOpenFilterCanvas] = useState(false);
  return (
    <Card className="sticky z-40 top-0 mb-0">
      <Card.Body>
        <div className="flex items-stretch gap-2 ">
          <input
            type="text"
            className="flex-1 px-2 form-control"
            placeholder="Filter by item name"
          />
          <button
            onClick={() => setOpenFilterCanvas(true)}
            className="btn btn-dark"
          >
            <FaFilter />
          </button>
        </div>

        <CategoryProductsFilterCanvas
          isOpen={openFilterCanvas}
          setIsOpen={setOpenFilterCanvas}
        />
      </Card.Body>
    </Card>
  );
};

export default CategoryProductsFilterSection;
