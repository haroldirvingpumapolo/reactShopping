import React, { useState } from "react";

function Product({
  sku,
  title,
  currencyFormat,
  price,
  installments,
  onAddCar,
  completeProduct,
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="max-w-xs flex flex-col justify-center items-center content-center py-6"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={`/src/assets/products/${sku}-${hovered ? 2 : 1}-product.webp`}
        alt={sku}
      />
      <p className="text-xl">{title}</p>
      <p className="text-2xl font-bold">{`${currencyFormat}${price}`}</p>
      <p className="text-xl">{`or ${installments} x ${currencyFormat} ${(
        price / installments
      ).toFixed(2)}`}</p>
      <button
        className={`w-full h-14 text-white  ${
          hovered ? "bg-yellow-400" : "bg-gray-800"
        }`}
        onClick={() => onAddCar(completeProduct)}
      >
        Add to cart
      </button>
    </div>
  );
}

export default Product;
