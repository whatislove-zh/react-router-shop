import Categories from "./Categories";
import "./Catalog.css";
import Products from "./Products";
import { useEffect, useState } from "react";

const API = "https://mocki.io/v1/0728a121-4d7c-4c52-b22c-1e3d8912071f";

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [currentProducts, setCurrentProducts] = useState([]);

  const chooseCategory = (category) => {
    if (category === "all") {
      setCurrentProducts(products);
      return;
    }
    setCurrentProducts(products.filter((el) => el.category === category));
  };

  const fetchData = async (API) => {
    const response = await fetch(API);
    if (!response.ok) {
      throw new Error("Something wrong whith data, data could not be fetched");
    } else {
      return response.json();
    }
  };

  useEffect(() => {
    fetchData(API)
      .then((res) => {
        setProducts(res);
        return res;
      })
      .then((res) => {
        setCurrentProducts(res);
      });
  }, []);

  return (
    <section>
      <Categories chooseCategory={chooseCategory} products={products} />
      <Products products={currentProducts} />
    </section>
  );
};

export default Catalog;
