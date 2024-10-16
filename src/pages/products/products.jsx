import React, { useEffect, useState } from "react";
import Product from "../../components/product";
import { Wrapper } from "./style";

function Products() {
  const [data, setData] = useState([]);
  const [cart, setCart] =  useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const submitHandler = (product) => {
    cart.push(product);
    localStorage.setItem('cart',JSON.stringify(cart))
  };
  
  return (
    <div>
      <h1>Products</h1>
      <Wrapper>
        {data.map((product) => (
          <Product product={product} key={product.id} cartRequest={submitHandler} />
        ))}
      </Wrapper>
    </div>
  );
}

export default Products;
