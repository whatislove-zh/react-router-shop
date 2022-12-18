import { NavLink } from "react-router-dom";

const Products = ({ products }) => {
  
  products.sort((a, b) => a.title > b.title ? 1 : -1)

  return <section className="products">
    {products.map((el) => {
        return (<NavLink to={el.slug} key={el.id} className="productsItem">
            <img src={el.image} alt={el.title} />
            <h3>{el.title}</h3>
            <b>{el.price + " $"}</b>
        </NavLink>)
    })}
  </section>;
};

export default Products;
