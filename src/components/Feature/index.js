import React from "react";
import { FeatureButton, FeatureContainer } from "./FeatureElements";

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Dish of the Day</h1>
      <p>Cau Cau de Pollo</p>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
