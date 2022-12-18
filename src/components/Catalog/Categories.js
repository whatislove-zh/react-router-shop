import React, { useEffect, useState } from "react";

const Categories = ({ chooseCategory, products }) => {
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    setCategories([
      {
        key: "all",
        name: "All",
      },

      {
        key: "men's clothing",
        name: "Men's clothing",
      },

      {
        key: "women's clothing",
        name: "Women's clothing",
      },
      {
        key: "electronics",
        name: "Electronics",
      },
      {
        key: "jewelery",
        name: "Jewelery",
      },
    ]);
  }, []);

  return (
    <section className="categories">
      {categories.map((element) => {
        return (
          <section
            className="categoriesItem"
            key={element.key}
            onClick={() => {
              chooseCategory(element.key);
            }}
          >
            {element.name}
          </section>
        );
      })}
    </section>
  );
};

export default Categories;
