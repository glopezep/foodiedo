export function renderHtml(options) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>${options.title}</title>
    </head>
    <body>
      ${options.html}
    </body>
    </html>
  `;
}

export default {
  renderHtml,
}
