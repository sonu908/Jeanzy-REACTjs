import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Cards from "./Cards";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import View from "./View";

function Forhim() {
  const [jeanmen, usejeansmen] = useState([]);

  const getallmen = async (req, res) => {
    const jeansmenitems = await axios.get("http://localhost:4000/items");

    usejeansmen(jeansmenitems.data);
  };

  useEffect(() => {
    getallmen();
  }, []);

  return (
    <Container>
      <div>
        <p className="text-center text-2xl tracking-wider underline underline-offset-8">
          MEN JEANS
        </p>
        <img
          className="mt-6  m-auto w-[87rem]"
          src="https://iili.io/Hg6Mzg9.png"
          alt="af7jfwuf"
          border="0"
        ></img>
      </div>

      <Container>
        <Row className="grid grid-rows-4 grid-flow-col gap-4 justify-around mt-14">
          {jeanmen.map((jean) => (
            <Col className="border-2 border-slate-100 p-5">
              <Cards item={jean} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Forhim;
