import React, { useEffect, useState } from "react";
import Product from "../../components/product";

function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

 

  return (
    <div>
      <h1>Products</h1>
      {data.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}

export default Products;
