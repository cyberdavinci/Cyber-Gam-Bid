import moment from "moment";
import React from "react";
import { Card, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const AuctionItem = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="my-3">
      <Link
        to={`/product/${item.name?.toLowerCase()?.split(" ").join("-") || ""}/${
          item.id
        }`}
      >
        <img
          src={item.photos[0]}
          alt=""
          className="h-44 object-cover w-full hover:scale-110 transition-all duration-300"
        />
      </Link>
      <div className="p-2">
        <Link
          to={`/product/${
            item.name?.toLowerCase()?.split(" ").join("-") || ""
          }/${item.id}`}
          className="font-bold text-decoration-none text-black"
        >
          {item.name}
        </Link>
        <Table className="mt-4">
          <tbody>
            <tr>
              <th className="text-sm">Price</th>
              <td className="text-sm">${item.price}</td>
            </tr>
            <tr>
              <th className="text-sm">Seller</th>
              <td className="text-sm">{item.seller.name}</td>
            </tr>
            <tr>
              <th className="text-sm">Condition</th>
              <td className="text-sm">{item.condition}</td>
            </tr>
            <tr>
              <th className="text-sm">Auction ends:</th>
              <td className="text-sm">
                {moment().isAfter(moment(item?.auctionEndDate)) ? (
                  <span className="text-danger">Closed</span>
                ) : (
                  <>{moment(item?.auctionEndDate).fromNow() || "N/A"}</>
                )}
              </td>
            </tr>
          </tbody>
        </Table>
        <button
          onClick={() =>
            navigate(
              `/product/${
                item.name?.toLowerCase()?.split(" ").join("-") || ""
              }/${item.id}`
            )
          }
          className="btn btn-dark"
        >
          More details
        </button>
      </div>
    </div>
  );
};

export default AuctionItem;
