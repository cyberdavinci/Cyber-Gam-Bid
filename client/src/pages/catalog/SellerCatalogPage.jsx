import React, { useState } from "react";
import SellerCatalogFilterSection from "../../components/catalog/seller-catalog/SellerCatalogFilterSection";
import SellerCatalogListLayout from "../../components/catalog/seller-catalog/SellerCatalogListLayout";
import SellerCatalogGridLayou from "../../components/catalog/seller-catalog/SellerCatalogGridLayou";
import { Fade } from "react-awesome-reveal";

const SellerCatalogPage = () => {
  const [layout, setLayout] = useState("grid");

  return (
    <div className="flex flex-col gap-4">
      <SellerCatalogFilterSection layout={layout} setLayout={setLayout} />

      {layout === "list" && (
        <Fade>
          <SellerCatalogListLayout />
        </Fade>
      )}
      {layout === "grid" && (
        <Fade>
          <SellerCatalogGridLayou />
        </Fade>
      )}
    </div>
  );
};

export default SellerCatalogPage;
