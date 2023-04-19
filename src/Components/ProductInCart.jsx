import classNames from "classnames";
import React from "react";

function ProductInCart({
  sku,
  title,
  availableSizes,
  style,
  currencyFormat,
  price,
  quantify,
  onRemoveProductShoppingCar,
  onSumOrSubtract,
}) {
  return (
    <div className="w-full flex flex-col ">
      <div className="flex justify-end w-full">
        <button
          className="text-xl text-black font-bold"
          onClick={() => {
            onRemoveProductShoppingCar(sku);
          }}
        >
          X
        </button>
      </div>
      <div className="flex content-between justify-between text-xl">
        <img
          className=""
          src={`/src/assets/products/${sku}-1-cart.webp`}
          alt={`${sku}`}
        />
        <div className="flex flex-col content-around ">
          <div>{title}</div>
          <div>
            {availableSizes[0]} | {style}
          </div>
          <div>Quantify: {quantify}</div>
        </div>
        <div>
          <div>{`${currencyFormat}${price}`}</div>
          <div>
            <button
              className={classNames(
                "bg-gray-400 ",
                " w-6 ",
                quantify === 1 && "pointer-events-none"
              )}
              onClick={() => {
                onSumOrSubtract(sku, -1);
              }}
            >
              -
            </button>
            <button
              className="bg-black w-7 text-white"
              onClick={() => {
                onSumOrSubtract(sku, +1);
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInCart;
