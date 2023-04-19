import React from "react";
import ProductInCart from "./ProductInCart";

function ShoppingCar({
  shoppingCar,
  onRemoveProductShoppingCar,
  onSumOrSubtract,
}) {
  return (
    <div className="w-full max-w-lg flex flex-col px-5">
      <h1 className="text-2xl">ShoppingCar</h1>
      <div>
        {shoppingCar.map((product, i) => (
          <div key={i}>
            <ProductInCart
              sku={product.sku}
              title={product.title}
              availableSizes={product.availableSizes[0]}
              style={product.style}
              currencyFormat={product.currencyFormat}
              price={product.price}
              quantify={product.quantify}
              onRemoveProductShoppingCar={onRemoveProductShoppingCar}
              onSumOrSubtract={onSumOrSubtract}
            />
          </div>
        ))}
      </div>
      <div className="carCalculator">
        <div className="flex w-full h-44 items-center justify-between">
          <div>
            <h2 className="text-2xl">SUBTOTAL</h2>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-4xl  text-yellow-400">
              $
              {shoppingCar
                .reduce(
                  (total, product) => total + product.price * product.quantify,
                  0
                )
                .toFixed(2)}
            </p>
            <p className="text-xl text-gray-400">
              OR UP TO{"  "}
              {shoppingCar.length !== 0
                ? (
                    shoppingCar.reduce(
                      (total, product) =>
                        total +
                        (product.price / product.installments) *
                          product.quantify,
                      0
                    ) / shoppingCar.length
                  ).toFixed(2)
                : 0}
            </p>
          </div>
        </div>
        <button
          className="w-full h-16 bg-black text-xl text-white"
          onClick={() =>
            alert(
              "Checkout - Subtotal: $ "+shoppingCar
                .reduce(
                  (total, product) => total + product.price * product.quantify,
                  0
                )
                .toFixed(2)
            )
          }
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
}

export default ShoppingCar;
