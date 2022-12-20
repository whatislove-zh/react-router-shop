import { Link } from "react-router-dom";
import AddToCartBtn from "../AddToCartBtn";

const Products = ({ products, addToCart }) => {
  products.sort((a, b) => (a.title > b.title ? 1 : -1));

  return (
    <section className="products">
      {products.map((el) => {
        return (
          <section key={el.id} className="productsItem">
            <Link to={el.slug}>
              <img src={el.image} alt={el.title} />
            </Link>
            <Link to={el.slug}>
              <h3>{el.title}</h3>
            </Link>
            <section className="priceSection">
              <b>{el.price + " $"}</b>
              <AddToCartBtn product={el} addToCart={addToCart} />
            </section>
          </section>
        );
      })}
    </section>
  );
};

export default Products;
