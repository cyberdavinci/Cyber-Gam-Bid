import React, { useState } from "react";
import PersonalCatalogFilterSection from "../../components/catalog/personal-catalog/PersonalCatalogFilterSection";
import PersonalCatalogListLayout from "../../components/catalog/personal-catalog/PersonalCatalogListLayout";
import PersonalCatalogGridLayou from "../../components/catalog/personal-catalog/PersonalCatalogGridLayou";
import { Fade } from "react-awesome-reveal";

const PersonalCatalogPage = () => {
  const [layout, setLayout] = useState("list");

  return (
    <div className="flex flex-col gap-4">
      <PersonalCatalogFilterSection layout={layout} setLayout={setLayout} />

      {layout === "list" && (
        <Fade>
          <PersonalCatalogListLayout />
        </Fade>
      )}
      {layout === "grid" && (
        <Fade>
          <PersonalCatalogGridLayou />
        </Fade>
      )}
    </div>
  );
};

export default PersonalCatalogPage;
