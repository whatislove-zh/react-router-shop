import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Catalog from "./components/Catalog/Catalog";
import ProductsItem from "./components/Catalog/ProductsItem";
import Contacts from "./components/Contacts/Contacts";
import Home from "./components/Home/Home";
import MainLayout from "./components/layout/MainLayout";
import NotFound from "./components/NotFound";
import ShopingCart from "./components/ShopingCart/ShopingCart";

function App() {
  const [shopingCartProducts, setShopingCartProducts] = useState([]);

  const addToCart = (product) => {
    let flag = true;

    shopingCartProducts.some((el) => {
      if (JSON.stringify(el) === JSON.stringify(product)) {
        flag = false;
        return false;
      }

      return false;
    });

    flag && setShopingCartProducts((prev) => [...prev, product]);
  };

  return (
    <section className="wrapper">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          <Route path="catalog" element={<Catalog addToCart={addToCart} />} />
          <Route
            path="catalog/:slug"
            element={<ProductsItem addToCart={addToCart} />}
          />

          <Route path="about" element={<About />} />

          <Route path="contacts" element={<Contacts />} />

          <Route
            path="shoping-cart"
            element={<ShopingCart shopingCartProducts={shopingCartProducts} />}
          />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </section>
  );
}

export default App;
