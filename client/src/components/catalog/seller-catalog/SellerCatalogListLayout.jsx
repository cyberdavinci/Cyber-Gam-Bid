import React from "react";
import { Card, Table } from "react-bootstrap";
import { items } from "../../../constants/dummyData";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
import { FaEye, FaPencil, FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";
const SellerCatalogListLayout = () => {
  const navigate = useNavigate();
  return (
    <Card>
      <Card.Body>
        <Table responsive>
          <thead>
            <td />
            <th>Name</th>
            <th>Price</th>
            <th>Condition</th>
            <th>Category</th>
            <th>Auction Status</th>
            <th>Bids</th>
            <td />
          </thead>
          <tbody>
            {items.map((item, idx) => (
              <tr key={`Seller-catalog-item-${idx}`}>
                <td className="pl-0 ml-0 pb-0">
                  <Link
                    to={`/product/${
                      item.name?.toLowerCase()?.split(" ").join("-") || ""
                    }/${idx}`}
                    className="flex items-center justify-center w-full"
                  >
                    <img
                      src={item.photos[0]}
                      className="w-10 h-10 object-scale-down"
                    />
                  </Link>
                </td>
                <td className="pl-0 ml-0 pb-0">
                  <Link
                    to={`/product/${
                      item.name?.toLowerCase()?.split(" ").join("-") || ""
                    }/${idx}`}
                    className="text-black text-decoration-none hover:underline"
                  >
                    {item.name}
                  </Link>
                </td>
                <td className="pl-0 ml-0 pb-0">GMD {item.price}</td>
                <td className="pl-0 ml-0 pb-0">{item.condition}</td>
                <td className="pl-0 ml-0 pb-0">{item.category}</td>
                <td className="pl-0 ml-0 pb-0">
                  {moment().isAfter(moment(item?.auctionEndDate)) ? (
                    <span className="text-danger">Closed</span>
                  ) : (
                    <>{moment(item?.auctionEndDate).fromNow() || "N/A"}</>
                  )}
                </td>
                <td className="pl-0 ml-0 pb-0">{item.bids.length}</td>
                <td className="pl-0 ml-0 pb-0">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      className="btn btn-sm btn-dark flex items-center gap-2"
                      onClick={() =>
                        navigate(
                          `/product/${
                            item.name?.toLowerCase()?.split(" ").join("-") || ""
                          }/${idx}`
                        )
                      }
                    >
                      <FaEye /> <span className="mb-0">More</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default SellerCatalogListLayout;
