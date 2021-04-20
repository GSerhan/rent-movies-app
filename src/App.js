import React from 'react';
import './App.css';
import {Route, Switch, Redirect} from "react-router-dom";

import Customers from './components/v2/customers';
import Rentals from './components/v2/rentals';
import NotFound from "./components/v2/notFound";
import Navbar from "./components/v2/navBar";
import Movies2 from "./components/v2/movies2";
import Movies from "./components/v1/movies";

function App() {
  return (
      <main className="container">
          <Navbar/>
          <Switch>
              <Route path="/v2/customers" component={Customers}/>
              <Route path="/v2/rentals" component={Rentals}/>
              <Route path="/v1" exact component={Movies}/>
              <Route path="/v2" exact component={Movies2}/>
              <Route path="/v2/movies" exact component={Movies2}/>
              <Route path="/not-found" component={NotFound} />
              <Redirect from="/" exact to='/v2/movies'/>
              <Redirect to='/not-found'/>
          </Switch>
      </main>
  );
}

export default App;
