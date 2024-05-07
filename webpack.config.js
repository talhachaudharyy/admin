// webpack.config.js

const path = require('path');

module.exports = {
  // Other webpack configurations...
  
  resolve: {
    fallback: {
      "url": require.resolve("url/"),
    },
  },
};
