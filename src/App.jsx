import { useEffect, useState } from "react";
import axios from "axios";
import ShoppingCar from "./Components/ShoppingCar";
import dataArrButtons from "./Components/dataArrButtons";
import ShowProducts from "./Components/ShowProducts";
import FilterButtons from "./Components/FilterButtons";

function App() {
  const [products, setProducts] = useState([]);
  const [shoppingCar, setShoppingCar] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    axios
      .get("https://react-shopping-cart-67954.firebaseio.com/products.json")
      .then((res) => {
        setProducts(res.data.products);
      });
    setButtons(dataArrButtons);
  }, []);

  function handleSizeClick(size) {
    setButtons(
      buttons.map((button) =>
        button.buttonValue === size
          ? { ...button, select: !button.select }
          : button
      )
    );
    sizes.includes(size)
      ? setSizes(sizes.filter((s) => s !== size))
      : setSizes([...sizes, size]);
  }

  function addCar(product) {
    shoppingCar.some((item) => item.sku === product.sku)
      ? setShoppingCar(
          shoppingCar.map((itemShoppingCar) =>
            itemShoppingCar.sku === product.sku
              ? { ...itemShoppingCar, quantify: itemShoppingCar.quantify + 1 }
              : itemShoppingCar
          )
        )
      : setShoppingCar([...shoppingCar, { ...product, quantify: 1 }]);
    console.log(shoppingCar);
  }
  function onSumOrSubtract(skuValue, sumOrSubtract) {
    setShoppingCar(
      shoppingCar.map((itemShoppingCar) =>
        itemShoppingCar.sku === skuValue
          ? {
              ...itemShoppingCar,
              quantify: itemShoppingCar.quantify + sumOrSubtract,
            }
          : itemShoppingCar
      )
    );
    console.log(shoppingCar);
  }

  function removeProductShoppingCar(skuValue) {
    setShoppingCar(
      shoppingCar.filter((itemShoppingCar) => itemShoppingCar.sku !== skuValue)
    );
  }

  return (
    <div className="flex items-start select-none mt-24">
      <FilterButtons
        dataButtons={buttons}
        onHandleSizeClick={handleSizeClick}
      />
      <ShowProducts
        dataShowProducts={products}
        onAddCar={addCar}
        dataSizes={sizes}
      />
      <ShoppingCar
        shoppingCar={shoppingCar}
        onRemoveProductShoppingCar={removeProductShoppingCar}
        onSumOrSubtract={onSumOrSubtract}
      />
    </div>
  );
}

export default App;
