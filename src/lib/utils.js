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
        <style>
          .spinner {
            margin: 100px auto 0;
            width: 70px;
            text-align: center;
          }

          .spinner > div {
            width: 18px;
            height: 18px;
            background-color: #333;

            border-radius: 100%;
            display: inline-block;
            -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
            animation: sk-bouncedelay 1.4s infinite ease-in-out both;
          }

          .spinner .bounce1 {
            -webkit-animation-delay: -0.32s;
            animation-delay: -0.32s;
          }

          .spinner .bounce2 {
            -webkit-animation-delay: -0.16s;
            animation-delay: -0.16s;
          }

          @-webkit-keyframes sk-bouncedelay {
            0%, 80%, 100% { -webkit-transform: scale(0) }
            40% { -webkit-transform: scale(1.0) }
          }

          @keyframes sk-bouncedelay {
            0%, 80%, 100% {
              -webkit-transform: scale(0);
              transform: scale(0);
            } 40% {
              -webkit-transform: scale(1.0);
              transform: scale(1.0);
            }
          }
        </style>
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
