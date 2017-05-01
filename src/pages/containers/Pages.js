import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';

const Pages = () => (
  <main className="App">
    <Route exact path="/" component={Home}/>
  </main>
);

export default Pages;
