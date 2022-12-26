import React, { useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";

const ShopingCartItem = ({ product, setSumma, removeFromCart }) => {
  const [counter, setCounter] = useState(1);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    setPrice(Math.round(product.price * counter * 100) / 100);
  }, [counter, product.price]);

  useEffect(() => {
    setSumma((prev) => Math.round((prev + product.price) * 100) / 100);
  }, [product.price, setSumma]);

  const handleChange = (event) => {
    setCounter(Number(event.target.value));
  };

  return (
    <section className="shopingCartItem">
      <Link to={`../catalog/${product.slug}`}>
        <img src={product.image} alt={product.category} />
      </Link>
      <section className="cartProductInfo">
        <section>
          <Link to={`../catalog/${product.slug}`}>
            <p>{product.title}</p>
          </Link>
          <button
            className="deleteBtn"
            onClick={() => {
              removeFromCart(product.id);
            }}
          >
            <BsTrash />
          </button>
        </section>
        <section>
          <section className="cartCounter">
            <p
              className="minusBtn"
              onClick={() => {
                setCounter(counter === 1 ? 1 : counter - 1);
                setSumma((prev) => {
                  return (
                    Math.round(
                      (counter === 1 ? prev : prev - product.price) * 100
                    ) / 100
                  );
                });
              }}
            >
              -
            </p>
            <input
              type="number"
              readOnly
              value={counter}
              onChange={handleChange}
            />
            <p
              className="plussBtn"
              onClick={() => {
                setCounter(counter >= 99 ? 99 : counter + 1);
                setSumma((prev) => {
                  return (
                    Math.round(
                      (counter >= 99 ? prev : prev + product.price) * 100
                    ) / 100
                  );
                });
              }}
            >
              +
            </p>
          </section>
          <p>Price: {price} $</p>
        </section>
      </section>
    </section>
  );
};

export default ShopingCartItem;
