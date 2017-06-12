const webpack = require('webpack');
const path = require('path');

const DeclarationBundlerPlugin = require('declaration-bundler-webpack-plugin');

module.exports = {
  entry: {
    'md-zippy': './src/component/zippy.module.ts',
    'md-zippy.min': './src/component/zippy.module.ts'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'mdMaterialZippy',
    umdNamedDefine: true
  },

  devtool: 'source-map',

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.ts']
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    }),
    new DeclarationBundlerPlugin({
      moduleName: '"md-zippy"',
      out: 'md-zippy.d.ts',
      removeSource: true
    })
  ],

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: [
          'ng-annotate-loader',
          {
            loader: 'awesome-typescript-loader',
            options: {
              noEmit: true,
              configFileName: 'tsconfig.prod.json'
            }
          }
        ]
      }
    ]
  },

  externals: ['angular', 'angular-material']
};
