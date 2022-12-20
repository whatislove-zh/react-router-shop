import React from "react";

const AddToCartBtn = ({ btnText, addToCart, product }) => {
  return (
    <button
      onClick={() => {
        addToCart(product);
      }}
      className="addToCartBtn"
    >
      {!btnText ? "+" : btnText}
    </button>
  );
};

export default AddToCartBtn;
