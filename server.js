require('babel-register');
require.extensions['.css'] = () => { return }
require('./src/server.js');
