import { CarouselProvider, Slider } from "pure-react-carousel";
import React from "react";

import CustomCardSlide from "./CustomCardSlide";
import CustomDotGroup from "./CustomDotGroup";


const CardCarousel = () => (
  <CarouselProvider
    naturalSlideWidth={1}
    naturalSlideHeight={1.25}
    totalSlides={4}
    style={{ width: "300px" }}
  >
      <center> 
    <Slider>
      <CustomCardSlide
        image="https://lorempixel.com/800/800/cats/0"
        index={0}
        header="Matthew House"
        meta="Friend"
    />
      <CustomCardSlide
        image="https://place-hold.it/800x800&text=Matthew&fontsize=32"
        index={1}
        header="Matthew House"
        meta="Friend"
      />
      <CustomCardSlide
        header="Elliot Baker"
        image="https://place-hold.it/800x800&text=Elliot&fontsize=32"
        index={2}
        meta="Friend"
      />
      <CustomCardSlide
        header="Steve Sanders"
        image="https://place-hold.it/800x800&text=Steve&fontsize=32"
        index={3}
        meta="Friend"
      />
    </Slider>
    </center>
    <CustomDotGroup slides={4} />
  </CarouselProvider>
);

export default CardCarousel;
