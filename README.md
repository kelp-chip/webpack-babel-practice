1)
  [npm init] to create package.json

2)
  install dependencies for front end and backend:
  [npm i express react react-dom]

3)
  install dev dependencies:
  [npm i @babel/core @babel/preset-env @babel/preset-react babel-loader nodemon webpack webpack-cli -D]

4)
  create file called "webpack.config.js" and copy paste this in there - read through because a lot of it is pretty obvious:

  const path = require('path');

  module.exports = {
    entry: './client/index.js',
    mode: "development",
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env']
            }
          }
        }
      ]
    }

  };


5)
  create your express server folder and create your express routes within index.js

6)
  create your index.html and include a script that links to your bundle.js (or whatever you called it) file that babel should create for you after you run the special command

7)
  Create these scripts:

     - "build": "npx webpack -w"
     - "start": "nodemon server"