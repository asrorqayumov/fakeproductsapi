import React from "react";
import "./style.css";
import {
  Card,
  CardBody,
  CardHeader,
  CardImage,
  Title,
  Price,
  Button,
} from "./style";

export default function Product({ product,cartRequest }) {
  const { title, image, price, id } = product;

  const titleDestruc = (text) => {
    return text.split(" ").splice(0, 3).join(" ");
  };

  const submitHandler = (product) => {
    cartRequest(product);
  };
  return (
    <Card>
      <CardHeader>
        <CardImage src={image} alt="product image" />
      </CardHeader>
      <CardBody>
        <Title>{titleDestruc(title)}</Title>
        <Price>${price}</Price>
        <Button onClick={() => submitHandler(product)}>Add to Cart</Button>
      </CardBody>
    </Card>
  );
}

// style berish
// navbar navlink ga qushish
// cart ga qushish logikasi
// cart sahifasi
