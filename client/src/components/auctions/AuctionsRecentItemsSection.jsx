import React from "react";

import { Card, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment";
import { Fade } from "react-awesome-reveal";
import { items } from "../../constants/dummyData";
import AuctionItem from "./AuctionItem";
const AuctionsRecentItemsSection = () => {
  return (
    <Card>
      <Card.Body>
        <h5 className="h5">Recent Listings</h5>

        <div className="grid grid-cols-5 gap-3">
          <Fade>
            {items.map((item, idx) => (
              <AuctionItem
                key={`open-bid-item-${idx}`}
                item={{ ...item, id: idx }}
              />
            ))}
          </Fade>
        </div>
      </Card.Body>
    </Card>
  );
};

export default AuctionsRecentItemsSection;
