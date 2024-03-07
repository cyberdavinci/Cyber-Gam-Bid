import React, { useState } from "react";
import { FaFilter, FaList, FaTableCellsLarge } from "react-icons/fa6";
import { Card } from "react-bootstrap";
import SellerCatalogFilterCanvas from "./SellerCatalogFilterCanvas";

const SellerCatalogFilterSection = ({ layout, setLayout }) => {
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
          <button
            onClick={() => setLayout(layout === "list" ? "grid" : "list")}
            className="btn btn-dark"
          >
            {layout === "list" ? <FaTableCellsLarge /> : <FaList />}
          </button>
        </div>

        <SellerCatalogFilterCanvas
          isOpen={openFilterCanvas}
          setIsOpen={setOpenFilterCanvas}
        />
      </Card.Body>
    </Card>
  );
};

export default SellerCatalogFilterSection;
