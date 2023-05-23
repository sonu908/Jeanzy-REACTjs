import React from "react";
// import { Swiper, SwiperSlide } from 'swiper/react';
import Container from "react-bootstrap/Container";
// Import Swiper styles
import "swiper/css";
import Tocollection from "./Tocollection";

function Swipeimages() {
  return (
    <Container className="m-8 relative">
  <img
    src="https://static.independent.co.uk/2023/02/09/07/02153758-b6c5cfba-e21c-487e-b2fc-ba1613596577.jpg"
    alt=""
  />
  <div className="absolute top-56 left-96  flex items-center justify-center">
    <h2 className="text-black text-5xl font-bold">summer sale.</h2>
  </div>

      <Container>
        <Tocollection />
      </Container>
    </Container>
  );
}

export default Swipeimages;
