import React from "react";
import { Offcanvas } from "react-bootstrap";

const CategoryProductsFilterCanvas = ({ isOpen, setIsOpen }) => {
  return (
    <Offcanvas placement="end" show={isOpen} onHide={setIsOpen}>
      <Offcanvas.Body></Offcanvas.Body>
    </Offcanvas>
  );
};

export default CategoryProductsFilterCanvas;
