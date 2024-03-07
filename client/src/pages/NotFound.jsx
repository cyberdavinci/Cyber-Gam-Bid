import React from "react";
import { Card } from "react-bootstrap";
import {FaHouse} from "react-icons/fa6"
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="h-full flex items-center justify-center">
      <Card>
        <Card.Body className="text-center  gap-3">
          <h1 className="h1">Oops!</h1>
          <h5 className="h5">404 - PAGE NOT FOUND</h5>
          <p>
            This page you are looking for might have been removed <br />
            had its name changed or temporarly unavailable
          </p>
          <button onClick={() => navigate("/")} className="btn btn-dark flex items-center gap-2 mx-auto"><FaHouse /> GO TO HOMEPAGE</button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NotFound;
