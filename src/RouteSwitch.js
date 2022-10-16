import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Homepage from "./Homepage";
import Shop from "./components/Shop";
import About from "./components/About";
import Contact from "./components/Contact";
import { nanoid } from "nanoid";
import products from "./components/products";
import Product from "./components/Product";
import Cart from "./components/Cart";

const RouteSwitch = () => {
  const [amountInCart, setAmountInCart] = React.useState(0);
  const [kilo, setKilo] = React.useState({ value: "1000" });
  const [cart, setCart] = React.useState([]);

  const handleAddCart = (name, picture, kilo, price) => {
    let isInCart = false;
    cart.forEach((item) => {
      if (item.product === name) {
        item.weight = parseInt(item.weight) + parseInt(kilo);
        isInCart = true;
      }
    });
    if (!isInCart) {
      setCart([...cart, { product: name, picUrl: picture, weight: kilo, price: price }]);
    }
  };

  return (
    <BrowserRouter>
      <App amountInCart={amountInCart}>
        <Routes>
          <Route path="/ShoppingCart/" element={<Homepage />} />
          {products.map((e) => (
            <Route
              key={nanoid()}
              path={`/ShoppingCart/shop/${e.name.replaceAll(" ", "")}`}
              element={
                <Product
                  cart={cart}
                  handleAddCart={handleAddCart}
                  kilo={kilo}
                  setKilo={setKilo}
                  amountInCart={amountInCart}
                  setAmountInCart={setAmountInCart}
                  name={e.name}
                  price={e.price}
                  picture={e.image}
                  description={e.desc}
                />
              }
            />
          ))}
          <Route path="/ShoppingCart/shop" element={<Shop />} />
          <Route path="/ShoppingCart/about" element={<About />} />
          <Route path="/ShoppingCart/contact" element={<Contact />} />
          <Route
            path="/ShoppingCart/cart"
            element={
              <Cart
                amountInCart={amountInCart}
                setAmountInCart={setAmountInCart}
                cart={cart}
                setCart={setCart}
              />
            }
          />
        </Routes>
      </App>
    </BrowserRouter>
  );
};

export default RouteSwitch;