import React from "react";
import Navbar from "../Navbar.js";
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroItems,
  HeroP,
  HeroBtn,
} from "./HeroElements";

function Hero() {
  return (
    <HeroContainer>
      <Navbar />
      <HeroContent>
        <HeroItems>
          <HeroH1>Greatest Peruvian Food</HeroH1>
          <HeroP>Daily Specials</HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
