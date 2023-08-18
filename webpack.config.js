const webpack = require("webpack");
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  plugins: [
    // dotenv 사용을 위한 설정
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    })
  ]
};

historyApiFallback:true;