import { useState } from "react";
import "./ShopingCart.css";
import ShopingCartItem from "./ShopingCartItem";

const ShopingCart = ({ shopingCartProducts, removeFromCart }) => {
  const [summa, setSumma] = useState(0);

  if (shopingCartProducts.length === 0) {
    return <h1>Shoping Cart is empty</h1>;
  }

  return (
    <section className="shopingCart">
      {shopingCartProducts.map((product) => {
        return (
          <ShopingCartItem
            key={product.id}
            product={product}
            setSumma={setSumma}
            removeFromCart={removeFromCart}
          />
        );
      })}
      <p>Total: {summa} $</p>
    </section>
  );
};

export default ShopingCart;
