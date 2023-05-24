import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

function View() {
  const [jeandetails, setJeandetails] = useState({});

  const { id } = useParams();
  console.log(id);

  const getJeandetails = async () => {
    let { data } = await axios.get(`http://localhost:4000/items/view/${id}`);
    setJeandetails(data);
  };

  console.log(jeandetails);

  useEffect(() => {
    getJeandetails();
  }, []);

  return (
    <div className="mt-14">
      <Row className="flex justify-evenly">
        <Col>
          <img
            className="border-4 border-black"
            src={jeandetails.image}
            alt=""
          />
        </Col>

        <Col style={{ width: "400px" }}>
          <h1 className="text-3xl">{jeandetails.name}</h1>

          <div className="text-5xl">
            <p className="text-sm/[25px]">{jeandetails.description}</p>
            <p>
              <span>only at : </span>
              {jeandetails.price}$
            </p>
            <p>{}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default View;
