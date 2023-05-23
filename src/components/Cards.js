import React from "react";
import { Card } from "react-bootstrap";

function Cards({ item }) {
  console.log(item);

  var finalprice = item.price - 9;

  return (
    <>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <img src={item.image} alt="" />
        <Card.Header className="text-l">{item.name}</Card.Header>
        <p className="text-xl">
          <span className="line-through text-red-600"> {item.price}</span>
          {""} {finalprice}$
        </p>
      </Card>
    </>
  );
}

export default Cards;
