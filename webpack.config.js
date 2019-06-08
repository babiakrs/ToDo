const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = (process.env.NODE_ENV === 'production');

const SOURCE_PATH = path.resolve(__dirname, 'source');
const BUILD_PATH = path.resolve(__dirname, 'build');

module.exports = {
  watch: !isProduction,
  mode: process.env.NODE_ENV,
  devtool: isProduction ? 'source-map' : 'inline-source-map',

  entry: SOURCE_PATH + '/index.js',
  output: {
		path: BUILD_PATH,
		filename: isProduction ? 'static/scripts/app.[hash:8].js' : 'static/scripts/app.js'
  },
  
  devServer: {
		contentBase: path.join(__dirname, 'build'),
		overlay: false,
		clientLogLevel: 'none',
		compress: true,
		port: 1337,
		hot: true
	},

  module: {
    rules: [{
			test: /\.js?$/,
			enforce: 'pre',
			exclude: /node_modules/,
			loader: 'eslint-loader',
			options: {
				fix: false,
				cache: false,
				eslintPath: require.resolve('eslint')
			}
		}, {
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			options: {
				presets: [
					'@babel/preset-env',
					'@babel/preset-react'
				]
			}
		}, {
      test: /\.s(a|c)ss$/,
      use: [
        isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },

  plugins: [
    new HtmlWebpackPlugin({
			inject: true,
			minify: isProduction && {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true
			},
			filename: './index.html',
			template: SOURCE_PATH + '/index_template.html'
    }),
    isProduction && new MiniCssExtractPlugin({
			filename: isProduction ? 'static/styles/app.[contenthash:8].css' : 'static/styles/app.css'
		})
  ].filter(Boolean)
};