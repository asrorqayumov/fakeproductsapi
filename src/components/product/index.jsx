import React from "react";
import './style.css';

export default function Product({ product}) {
  const { title,image, price} = product; 
    return (
      <div>
          <img src={image} alt="product image" />
             <h3>{title}</h3>
             <p>Price:{price}</p>
      </div>
    );

}
// style berish
// navbar navlink ga qushish
// cart ga qushish logikasi
// cart sahifasi
