const path = require('path');
const ESLintPlugin  = require('eslint-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const moduleTypeExtension = {
  'commonjs': 'cjs',
  'es': 'mjs'
}

const createConfiguration = (platform, moduleType) => ({
  mode: 'production',
  entry: './src/index.js',
  devtool: 'source-map',
  experiments: {
    outputModule: moduleType === 'es',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `index.${platform}.${moduleTypeExtension[moduleType]}`,
    chunkFormat: moduleType === "es" ? "module" : "commonjs",
    library: {
      type: moduleType === "mjs" ? "module" : "commonjs"
    },
  },
  resolve: {
    extensions: ['.js'],
  },
  target: 'web',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    }],
  },
  performance: {
    maxAssetSize: 512000,
    maxEntrypointSize: 512000,
  },
  plugins: [new ESLintPlugin()],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 6,
            warnings: false,
            comparisons: false,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 6,
            comments: false,
            ascii_only: true,
          },
        },
        parallel: true,
      }),
    ],
  },
});

module.exports = [
  createConfiguration('node', 'es'),
  createConfiguration('node', 'commonjs'),
  createConfiguration('web', 'es'),
  createConfiguration('web', 'commonjs'),
];
