import React from "react";
import { Offcanvas } from "react-bootstrap";
import { FaX } from "react-icons/fa6";
import categories from "../../../constants/categories";
import conditions from "../../../constants/conditions";

const PersonalCatalogFilterCanvas = ({ isOpen, setIsOpen }) => {
  return (
    <Offcanvas placement="end" show={isOpen} onHide={setIsOpen}>
      <Offcanvas.Body>
        <div className="flex items-center justify-between">
          <h6 className="h6 mb-0">More Filter</h6>
          <button
            onClick={() => setIsOpen(false)}
            className="bg-transparent outline-none border-none p-2"
          >
            <FaX />
          </button>
        </div>

        <hr />

        {/* category */}
        <p className="font-bold mb-1">Category</p>
        {categories.map((category) => (
          <div
            key={`auction-filter-${category}`}
            className="flex items-center gap-2"
          >
            <input
              type="checkbox"
              style={{ accentColor: "black" }}
              id={category}
            />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}

        {/* min bid */}

        <div className="flex items-center gap-3 mt-4">
          <label className="w-fit">Min. Bid Price (GMD): </label>
          <input
            type="number"
            className="form-control flex-1"
            placeholder="Enter amount here"
          />
        </div>

        {/* Current bid price */}
        <div className="flex items-center gap-3 mt-3">
          <label className="w-fit">Curr. Bid Price (GMD): </label>
          <input
            type="number"
            className="form-control flex-1"
            placeholder="Enter amount here"
          />
        </div>

        {/* conditions */}
        <p className="font-bold mb-1 mt-4">Condition</p>
        {conditions.map((condition) => (
          <div
            key={`auction-filter-${condition}`}
            className="flex items-center gap-2"
          >
            <input
              type="checkbox"
              style={{ accentColor: "black" }}
              id={condition}
            />
            <label htmlFor={condition}>{condition}</label>
          </div>
        ))}

        {/* Auction end date */}

        <p className="font-bold mb-1 mt-4">Auction end date</p>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            style={{ accentColor: "black" }}
            id={"Today"}
          />
          <label htmlFor={"Today"}>{"Today"}</label>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            style={{ accentColor: "black" }}
            id={"Tomorrow"}
          />
          <label htmlFor={"Tomorrow"}>{"Tomorrow"}</label>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            style={{ accentColor: "black" }}
            id={"in 7 days"}
          />
          <label htmlFor={"in 7 days"}>{"in 7 days"}</label>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            style={{ accentColor: "black" }}
            id={"in 10 days +"}
          />
          <label htmlFor={"in 10 days +"}>{"in 10 days +"}</label>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default PersonalCatalogFilterCanvas;
