import webpack from 'webpack'
import Dotenv from 'dotenv-webpack'

module.exports = {
  entry:"./src/assets/js/app.js",
  target: 'node',
  output:{
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test:/\.js$/,
        exclude:/node_modules/,
        use: [
          {
            loader:'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      }
    ]
  },
  plugins:[
    new Dotenv()
  ]  
}