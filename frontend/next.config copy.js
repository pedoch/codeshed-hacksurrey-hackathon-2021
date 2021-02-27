const withCSS = require('@zeit/next-css');

module.exports = withCSS({});

module.exports = {
  future: { webpack5: true },
};

// module.exports = {
//   webpack: (config) => {
//     // Fixes npm packages that depend on `fs` module
//     config.node = {
//       fs: "empty",
//     };
//     return config;
//   },
// };
