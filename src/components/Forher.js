import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import Cardswomen from "./Cardswomen";


function Forher() {
  const [jeanwomen, setjeanwomen] = useState([]);

  //call

  const getallwomenjean = async (req, res) => {
    const jeanwomen = await axios.get("http://localhost:4000/witems");

    setjeanwomen(jeanwomen.data);
  };
  console.log(jeanwomen);

  useEffect(() => {
    getallwomenjean();
  }, []);

  return (
    <Container>
      <div>
        <p className="text-center text-2xl tracking-wider underline underline-offset-8">
          WOMEN JEANS
        </p>
        <img
          className="mt-6  m-auto w-[87rem]"
          src="https://yardnyc.com/wp-content/uploads/2019/11/YARD_SITE_2019_GAP_WEARLIGHT_STILL01-1536x864.jpg"
          alt="4b22867e1c2cc0e640db9ef6d6de2bc3"
          border="0"
        ></img>
      </div>

      <Container>
        <Row className="grid grid-rows-4 grid-flow-col gap-4 justify-around mt-14">
          {jeanwomen.map((jean) => (
            <Col className="border-2 border-slate-100 p-5">
              <Cardswomen item={jean} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Forher;
