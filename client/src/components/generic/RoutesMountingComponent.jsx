import React from "react";
import { Spinner } from "react-bootstrap";
import MainLayout from "../../pages/layout/MainLayout";
const RoutesMountingComponent = () => {
  return (
    <MainLayout>
      <div className="h-screen flex items-center justify-center">
        <Spinner  />
      </div>
    </MainLayout>
  );
};

export default RoutesMountingComponent;
