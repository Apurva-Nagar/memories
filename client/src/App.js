import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import LandingPage from "./components/LandingPage/LandingPage";

const App = () => {
  const loggedIn = JSON.parse(localStorage.getItem("user_auth"));
  console.log("Test", loggedIn);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          {loggedIn ? <Redirect to="/feed" /> : <LandingPage />}
        </Route>
        <Route path="/feed" component={Home} />
        <Route path="/auth" component={Auth} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
