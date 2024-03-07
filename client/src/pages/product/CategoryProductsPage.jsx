import React from "react";
import { Fade } from "react-awesome-reveal";
import { useNavigate, useParams } from "react-router-dom";
import CategoryProductItem from "../../components/category-products/CategoryProductItem";
import { items } from "../../constants/dummyData";
import { Card } from "react-bootstrap";
import CategoryProductsFilterSection from "../../components/category-products/CategoryProductsFilterSection";
import BackBtn from "../../components/generic/BackBtn";

const CategoryProductsPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center  gap-4">
        <BackBtn />

        <h5 className="h5 mb-0">{slug}</h5>
      </div>
      <CategoryProductsFilterSection />
      <div className="grid grid-cols-5 gap-3">
        <Fade>
          {items.map((item, idx) => (
            <Card className="p-0" key={`${slug}-item-${idx}`}>
              <Card.Body className="p-0">
                <CategoryProductItem item={{ ...item, id: idx }} />
              </Card.Body>
            </Card>
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default CategoryProductsPage;
