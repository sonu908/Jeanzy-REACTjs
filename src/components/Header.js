import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <p href="#" className="tracking-tighter text-9xl ms-5 ">
            Jeanzy
          </p>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Header;
