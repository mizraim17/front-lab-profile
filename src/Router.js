import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Componets/Home/Home";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Home} />
      <Route exact path="/login" component={Home} />
    </Switch>
  );
};

export default Router;
