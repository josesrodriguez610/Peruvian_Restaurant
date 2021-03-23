import React, { useState } from "react";
import Navbar from "../Navbar.js";
import Sidebar from "../Sidebar/index.js";
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroItems,
  HeroP,
  HeroBtn,
} from "./HeroElements";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
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
