import React from "react";
import { Card } from "react-bootstrap";
import { items } from "../../constants/dummyData";
import AuctionItem from "./AuctionItem";
import { Fade } from "react-awesome-reveal";
import { FaChevronRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import categories from "../../constants/categories";

const AuctionCatgoriesSection = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4">
      {categories?.map((category, index) => (
        <Card>
          <Card.Body>
            <div className="flex items-center justify-between mb-3">
              <h5 className="h5 mb-0">{category}</h5>
              <button
                onClick={() => navigate(`/category/${category}/${index}`)}
                className="bg-transparent outline-none border-none flex items-center gap-2 hover:text-gray-600"
              >
                More of this category <FaChevronRight />
              </button>
            </div>

            <div className="grid grid-cols-5 gap-3">
              <Fade>
                {items.slice(0, 5).map((item, idx) => (
                  <AuctionItem
                    key={`${category}-item-${idx}-${index}`}
                    item={{ ...item, id: idx }}
                  />
                ))}
              </Fade>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default AuctionCatgoriesSection;
