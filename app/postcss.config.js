/* eslint-disable global-require */
module.exports = {
  plugins: [
    // require('postcss-smart-imp\ort')(),
    require('postcss-cssnext')({
      browsers: [
        '>1%',
        'last 2 versions',
        'Firefox ESR',
        'not ie < 9', // React doesn't support IE8 anyway
      ]
    })
  ]
};
