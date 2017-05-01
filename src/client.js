import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Pages from './pages/components/Pages';

render(
  <BrowserRouter>
    <Pages />
  </BrowserRouter>,
  document.querySelector('.App-container')
);
