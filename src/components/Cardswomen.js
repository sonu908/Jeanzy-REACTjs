import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Cardswomen({ item }) {
  console.log(item);

  var finalPrice = item.price - 9;
  var slicedPrice = finalPrice.toFixed(2);
  var slicedPriceNumber = parseFloat(slicedPrice); // or Number(slicedPrice)

  // Now you can use the slicedPriceNumber for further calculations or comparisons

  return (
    <Link to={`/Viewwomen/${item.id}`}>
      <Card
        style={{
          width: "15em",
        }}
      >
        <img src={item.image} alt="" />
        <Card.Header className="text-l">{item.name}</Card.Header>
        <p className="text-xl">
          <span className="line-through text-red-600"> {item.price}</span>
          {""} <br /> {slicedPriceNumber}$
        </p>
      </Card>
    </Link>
  );
}

export default Cardswomen;
