import express from 'express';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { renderHtml } from './lib/utils';
import Pages from './pages/components/Pages';
import Loading from './shared/components/Loading';

const app = express();
const port = process.env.PORT || 3000;

app.use((req, res) => {
  const context = {}

  const html = renderToStaticMarkup(
    <StaticRouter location={req.url} context={context}>
      <Loading />
    </StaticRouter>
  );

  if (context.url) {
    res.writeHead(301, { Location: context.url })
    res.end()
  }
  else {
    res.write(renderHtml({
      title: 'Foodiedo',
      html: html,
      css: [],
      js: 'http://localhost:5000/app.js',
    }))
    res.end();
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
