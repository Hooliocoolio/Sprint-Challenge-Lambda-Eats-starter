import React from "react";
import { Switch, Route } from "react-router-dom"
import "./App.css"
import Home from "./components/Home";
import OrderForm from "./components/OrderPizza";
import Pizza from "./components/Pizza";

const App = () => {
  return (
    <>
      {/* <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p> */}
      <Switch>
          <Route path="/Home"><Home /></Route>
          <Route path="/OrderPizza"><OrderForm /></Route>
          <Route path="/Pizza"><Pizza /></Route>
      </Switch>
    </>
  );
};
export default App;
