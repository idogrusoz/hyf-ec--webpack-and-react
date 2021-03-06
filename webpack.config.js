const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  entry: "./src/index.js",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },

  devServer: {
    hot: true,
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8888,
    historyApiFallback: true
  },

  module: {
    rules: [
      // Use loader for HTML files
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader"
        }
      },
      // Use laoder for css files
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      // Use loader for files
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader: "file-loader"
        }
      },
      // for JS and JSX files
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "src/template.html"
    })
  ]
};
