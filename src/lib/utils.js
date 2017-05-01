export function renderHtml(options) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      ${options.css.map(link => `<link rel="stylesheet" href="${link}">`)}
      <title>${options.title}</title>
    </head>
    <body>
      <div class="App-container">
        ${options.html}
      </div>
      <script src="${options.js}"></script>
    </body>
    </html>
  `;
}

export default {
  renderHtml,
}
