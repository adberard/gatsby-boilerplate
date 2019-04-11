/* eslint-disable */
const ForkTsCheckerWebpackPlugin = require(`fork-ts-checker-webpack-plugin`);
const resolvableExtensions = () => [`.ts`, `.tsx`];

function onCreateBabelConfig({ actions }, options) {
  actions.setBabelPreset({
    name: `@babel/preset-typescript`,
    options,
  });
}

// function onCreateWebpackConfig({ actions, loaders }) {
//   const jsLoader = loaders.js();
//   const tslint = loaders.tslint;
//
//   if (!jsLoader) {
//     return;
//   }
//
//   actions.setWebpackConfig({
//     // plugins: [
//     //   // new ForkTsCheckerWebpackPlugin({
//     //   //   async: false,
//     //   //   silent: true,
//     //   //   formatter: `codeframe`,
//     //   //   jsLoader,
//     //   // }),
//     // ],
//     module: {
//       rules: [
//         {
//           test: /\.tsx?$/,
//           use: jsLoader,
//         },
//       ],
//     },
//   });
// }

exports.resolvableExtensions = resolvableExtensions;
exports.onCreateBabelConfig = onCreateBabelConfig;
// exports.onCreateWebpackConfig = onCreateWebpackConfig;
