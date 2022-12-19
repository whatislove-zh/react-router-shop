import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Catalog from "./components/Catalog/Catalog";
import ProductsItem from "./components/Catalog/ProductsItem";
import Contacts from "./components/Contacts/Contacts";
import Home from "./components/Home/Home";
import MainLayout from "./components/layout/MainLayout";
import NotFound from "./components/NotFound";

function App() {
  return (
    <section className="wrapper">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          <Route path="catalog" element={<Catalog />} />

          <Route path="catalog/:slug" element={<ProductsItem />} />

          <Route path="about" element={<About />} />

          <Route path="contacts" element={<Contacts />} /> 
        
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </section>
  );
}

export default App;
