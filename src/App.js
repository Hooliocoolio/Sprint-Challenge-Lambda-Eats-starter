import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";
 
import Home from "./components/Home";
import OrderForm from "./components/OrderPizza";
import Pizza from "./components/Pizza";

export default function App() {
  return (
      <div className="form">
        <Switch>
          <Route path="/Pizza">
            <Pizza />
          </Route>
          <Route path="/OrderPizza">
            <OrderForm />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
  );
}

