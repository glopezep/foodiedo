import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
// import Waiting from './Waiting';

const Pages = () => (
  <main className="App">
    <Route exact path="/" component={Home}/>
    {/* <Route exact path="/waiting" component={Waiting}/> */}
  </main>
);

export default Pages;
