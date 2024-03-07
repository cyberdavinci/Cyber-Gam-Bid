import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import ProductBids from "./ProductBids";

const ProductDetailsRight = ({ product }) => {
  return (
    <div>
      <p className="italic">Items details</p>
      <hr />
      <h4 className="h4">{product?.name || "N/A"}</h4>

      <p className="flex items-center gap-3">
        <b>Price:</b> {product?.price || "N/A"}
      </p>

      <p className="flex items-center gap-3">
        <b>Category:</b> {product?.category || "N/A"}
      </p>

      <p className="flex items-center gap-3">
        <b>Condition:</b> {product?.condition || "N/A"}
      </p>

      <p className="flex items-center gap-3">
        <b>Auction Ends at:</b>{" "}
        {moment().isAfter(moment(product?.auctionEndDate)) ? (
          <span className="text-danger">Closed</span>
        ) : (
          <>{moment(product?.auctionEndDate).fromNow() || "N/A"}</>
        )}
      </p>

      {/* seller details */}
      <hr />
      <p className="italic">Seller details</p>
      <hr />

      <p className="flex items-center gap-3">
        <b>Name:</b> {product?.seller?.name || "N/A"}
      </p>

      <p className="flex items-center gap-3">
        <b>Profile:</b>{" "}
        <Link
          className="text-black"
          to={`/seller/${product?.seller?.username}`}
        >
          Visit
        </Link>
      </p>

      <hr />
      <p className="italic">Bidders</p>
      <hr />

      <ProductBids bids={product?.bids} />
    </div>
  );
};

export default ProductDetailsRight;
