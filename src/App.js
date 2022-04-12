import React from "react";
import ".././src/App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Switch,Route } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Products" component={Products} />
        <Route exact path="/Products/:id" component={Product} />
      </Switch>
    </div>
  );
}

export default App;
