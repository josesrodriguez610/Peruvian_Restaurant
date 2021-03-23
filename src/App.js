import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles.js";
import Hero from "./components/Hero";
import Products from "./components/Products/index.js";
import { productData } from "./components/Products/data.js";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favorite" data={productData} />
    </Router>
  );
}

export default App;
