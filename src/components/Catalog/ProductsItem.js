import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import NotFound from "../NotFound";

const API = "https://mocki.io/v1/0728a121-4d7c-4c52-b22c-1e3d8912071f";

const ProductsItem = () => {
  const [loader, setLoader] = useState(true);

  const [product, setProduct] = useState();

  const params = useParams();

  const fetchData = async (API) => {
    const response = await fetch(API);
    if (!response.ok) {
      throw new Error("Something wrong whith data, data could not be fetched");
    } else {
      return response.json();
    }
  };

  useEffect(() => {
    fetchData(API).then((res) => {
      setProduct(res.find((element) => element.slug === params.slug));
      setLoader(false);
      return;
    });
    // eslint-disable-next-line
  }, []);

  if (loader) {
    return <h1>Loading ...</h1>;
  }
  if (!product) {
    return <NotFound />;
  }

  return <section className="productInfo">
    <img className="image" src={product.image} alt={product.title}/>
    <section>
      <h1 className="title">{product.title}</h1>
      <h3 className="price">{product.price} $</h3>
      <p className="description">{product.description}</p>
    </section>
  </section>;
};

export default ProductsItem;
