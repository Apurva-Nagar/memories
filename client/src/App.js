import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
};

export default App;
