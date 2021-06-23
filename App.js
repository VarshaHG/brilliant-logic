import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Today from "./Today";

function App() {
  return (
    <Router>
    <div className="app">
    <Switch>
      <Route path="/daily-problems/">
       <Header />
       <Today />
      </Route>
      <Route path="/courses/">
       <Header />  
       <h1>Your courses</h1>
      </Route>
      <Route path="/">
        <Header />
        <Home />
      </Route>  
    </Switch>  
    </div>
    </Router>
    
  );
}

export default App;
