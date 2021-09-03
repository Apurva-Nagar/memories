import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" component={Auth} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
