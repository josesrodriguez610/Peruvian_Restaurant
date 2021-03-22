import React from "react";
import NavBar from "./components/Navbar.js";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles.js";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <NavBar />
    </Router>
  );
}

export default App;
