const ShopingCart = ({ shopingCartProducts }) => {


  return (
    <div>
      {shopingCartProducts.map((product) => {
        return (
          <section key={product.id}>
            <p>{product.title}</p>
            
          </section>
        );
      })}
    </div>
  );
};

export default ShopingCart;
