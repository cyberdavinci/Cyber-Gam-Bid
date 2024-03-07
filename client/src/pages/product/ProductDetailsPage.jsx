import React, { useState } from "react";
import ProductDetailsLeft from "../../components/product/product-details/ProductDetailsLeft";
import ProductDetailsRight from "../../components/product/product-details/ProductDetailsRight";
import BackBtn from "../../components/generic/BackBtn";
import { items } from "../../constants/dummyData";
import { useParams } from "react-router-dom";
import PlaceBidModal from "../../components/product/product-details/PlaceBidModal";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const product = items.find((_, idx) => idx === parseInt(id));

  const [openPlaceBidModal, setOpenPlaceBidModal] = useState(false);

  return (
    <div className="container-fluid">
      <PlaceBidModal
        isOpen={openPlaceBidModal}
        setIsOpen={setOpenPlaceBidModal}
      />
      <div className="flex items-center justify-between gap-2">
        <BackBtn />
        <button
          onClick={() => setOpenPlaceBidModal(true)}
          className="flex items-center gap-2 text-white bg-green-600 border-none outline-none rounded-2xl p-2 text-sm px-5 hover:opacity-80"
        >
          Place a bid
        </button>
      </div>
      {product ? (
        <div className="grid grid-cols-2 gap-3">
          <ProductDetailsLeft product={product} />
          <ProductDetailsRight product={product} />
        </div>
      ) : (
        <div className="py-10 flex items-center justify-center font-black font-bold">
          This product is not available
        </div>
      )}
    </div>
  );
};

export default ProductDetailsPage;
