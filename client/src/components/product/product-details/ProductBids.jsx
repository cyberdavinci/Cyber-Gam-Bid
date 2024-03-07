import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const ProductBids = ({ bids }) => {
  const items = bids?.map((bid, idx) => (
    <div className="flex flex-col gap-1">
      <p className="flex items-center gap-3">
        <b>
          {bid?.bidder?.bidAsAnonymous ? "Anonymous" : bid?.bidder?.username}
        </b>
      </p>

      <p className="flex items-center gap-3">
        <b>Amount:</b> GMD {bid?.amount || "N/A"}
      </p>
    </div>
  ));
  return (
    <AliceCarousel
      disableButtonsControls
      animationDuration={3000}
      autoPlay
      infinite
      disableDotsControls
      mouseTracking
      items={items}
      responsive={{
        0: {
          items: 5,
        },
      }}
    />
  );
};

export default ProductBids;
