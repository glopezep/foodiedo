import express from 'express';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { renderHtml } from './lib/utils';
import Pages from './pages/containers/Pages'

const app = express();
const port = process.env.PORT || 3000;

app.use((req, res) => {
  const context = {}

  const html = renderToStaticMarkup(
    <StaticRouter location={req.url} context={context}>
      <Pages />
    </StaticRouter>
  );

  if (context.url) {
    res.writeHead(301, { Location: context.url })
    res.end()
  }
  else {
    res.write(renderHtml({ title: 'Test', html: html }))
    res.end();
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
