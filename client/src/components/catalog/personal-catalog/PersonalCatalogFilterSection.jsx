import React, { useState } from "react";
import { FaFilter, FaList, FaPlus, FaTableCellsLarge } from "react-icons/fa6";
import { Card } from "react-bootstrap";
import PersonalCatalogFilterCanvas from "./PersonalCatalogFilterCanvas";
import { useNavigate } from "react-router-dom";

const PersonalCatalogFilterSection = ({ layout, setLayout }) => {
  const [openFilterCanvas, setOpenFilterCanvas] = useState(false);
  const navigate = useNavigate();
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
          {/* <button
            onClick={() => setLayout(layout === "list" ? "grid" : "list")}
            className="btn btn-dark"
          >
            {layout === "list" ? <FaTableCellsLarge /> : <FaList />}
          </button> */}
          <button
            onClick={() => navigate("/product/create")}
            className="btn btn-dark flex items-center gap-2"
          >
            <FaPlus /> Add new item
          </button>
        </div>

        <PersonalCatalogFilterCanvas
          isOpen={openFilterCanvas}
          setIsOpen={setOpenFilterCanvas}
        />
      </Card.Body>
    </Card>
  );
};

export default PersonalCatalogFilterSection;
