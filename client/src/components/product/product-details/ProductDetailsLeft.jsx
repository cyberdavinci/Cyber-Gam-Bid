import React from "react";
import { FaMinus, FaPlus, FaX } from "react-icons/fa6";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const ProductDetailsLeft = ({ product }) => {
  const items = product?.photos?.map((photo, idx) => (
    <img
      key={`product-details-photo-${idx}`}
      src={photo}
      className="w-full object-cover"
      style={{
        height: 600,
      }}
    />
  ));
  return (
    <TransformWrapper>
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <div className="relative">
          <div className="absolute top-2 right-2 flex items-center gap-1 z-40">
            <button
              onClick={() => zoomIn()}
              className="bg-black text-white border-none outline-none w-8 h-8 rounded-full flex items-center justify-center hover:opacity-70"
            >
              <FaPlus className="text-sm" />
            </button>
            <button
              onClick={() => zoomOut()}
              className="bg-black text-white border-none outline-none w-8 h-8 rounded-full flex items-center justify-center hover:opacity-70"
            >
              <FaMinus className="text-sm" />
            </button>
            <button
              onClick={() => resetTransform()}
              className="bg-black text-white border-none outline-none w-8 h-8 rounded-full flex items-center justify-center hover:opacity-70"
            >
              <FaX className="text-sm" />
            </button>
          </div>
          <TransformComponent
            wrapperStyle={{
              width: "100%",
            }}
            contentStyle={{
              width: "100%",
            }}
          >
            <AliceCarousel
              disableButtonsControls
              animationDuration={2000}
              autoPlay
              infinite
              disableDotsControls
              mouseTracking
              items={items}
              responsive={{
                0: {
                  items: 1,
                },
              }}
            />
          </TransformComponent>
        </div>
      )}
    </TransformWrapper>
  );
};

export default ProductDetailsLeft;
