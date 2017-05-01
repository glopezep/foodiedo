import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Pages from './pages/containers/Pages';

const container = document.querySelector('.App-container');

render(
  <BrowserRouter>
    <Pages />
  </BrowserRouter>,
  container
);
