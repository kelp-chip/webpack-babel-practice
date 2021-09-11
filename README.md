To use/make this app your own, run "npm install", then "npm run build" and "npm start" and you're good to go!

---------------------------------------------------------------------------------------------------------------------


Steps to recreate this environment yourself:

1) run "npm init" to create package.json

2) run "npm i express react react-dom" this installs express and necessary react packages

3) run "npm i @babel/core @babel/preset-env @babel/preset-react babel-loader nodemon webpack webpack-cli -D" to install necessary development packages

4) create a file called "webpack.config.js". 

The first module will designate the entry point of the files you want to compile 
and the file name for the place you want your compiled code to go.

The second module is for your babel loader info.

Copy/paste this code in your newly created file:

    const path = require('path');
    module.exports = {
      entry: './client/index.js',
      mode: "development",
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), //this is the folder you want to save your bundle in
      },

     module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
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


5) create a folder for your server and create an index.js file for your express routes

6) create your index.html and include a script that links to your bundle.js (or whatever file name you decided on)
This file should be created automatically by webpack once you've run "npm run build" (This is a script we will write ourselves in step 7).
If you copied the code from step 4 exactly it should show up in a new folder called "dist"

7) Create these scripts in package.json:

     - "build": "npx webpack -w"
     - "start": "nodemon server"


8) create a folder called client and create a file called index.js within it. This is your point of entry that was mentioned previously in step 4.
This is where you can link to your react components/create them. Check out the the client folder in this project for reference if needed.

9) And that's it! To start up the app, run "npm run build" in one terminal and "npm start" in another. Visit localhost:[your port number here] to view your page.

10) *Optional - if you plan to create a git repo make sure to create a .gitignore file that contains node_modules and dist folders


-----------------------------------------------------------------------------------------------------------------------------------------------

References I used to write this guide:

https://webpack.js.org/guides/getting-started/

https://webpack.js.org/loaders/babel-loader/

https://reactjs.org/docs/getting-started.html
