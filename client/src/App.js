import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import LandingPage from "./components/LandingPage/LandingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/feed" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
