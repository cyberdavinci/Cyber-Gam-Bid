import React from "react";
import { Card } from "react-bootstrap";
import { items } from "../../../constants/dummyData";
import AuctionItem from "../../auctions/AuctionItem";
import { Fade } from "react-awesome-reveal";

const PersonalCatalogGridLayou = () => {
  return (
    <Card>
      <Card.Body>
        <div className="grid grid-cols-5 gap-3">
          <Fade>
            {items.map((item, idx) => (
              <AuctionItem
                key={`personal-catalog-grid-${idx}`}
                item={{ ...item, id: idx }}
              />
            ))}
          </Fade>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PersonalCatalogGridLayou;
